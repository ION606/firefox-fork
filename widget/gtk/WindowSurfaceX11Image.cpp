/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "WindowSurfaceX11Image.h"

#include "mozilla/gfx/2D.h"
#include "mozilla/gfx/Tools.h"
#include "mozilla/gfx/gfxVars.h"
#include "gfxPlatform.h"
#include "gfx2DGlue.h"

#include <X11/extensions/shape.h>

namespace mozilla {
namespace widget {

using namespace mozilla::gfx;

// gfxImageSurface pixel format configuration.
#define SHAPED_IMAGE_SURFACE_BPP 4
#ifdef IS_BIG_ENDIAN
#  define SHAPED_IMAGE_SURFACE_ALPHA_INDEX 0
#else
#  define SHAPED_IMAGE_SURFACE_ALPHA_INDEX 3
#endif

WindowSurfaceX11Image::WindowSurfaceX11Image(Display* aDisplay, Window aWindow,
                                             Visual* aVisual,
                                             unsigned int aDepth)
    : WindowSurfaceX11(aDisplay, aWindow, aVisual, aDepth) {}

WindowSurfaceX11Image::~WindowSurfaceX11Image() {}

already_AddRefed<gfx::DrawTarget> WindowSurfaceX11Image::Lock(
    const LayoutDeviceIntRegion& aRegion) {
  gfx::IntRect bounds = aRegion.GetBounds().ToUnknownRect();
  gfx::IntSize size(bounds.XMost(), bounds.YMost());

  if (!mWindowSurface || mWindowSurface->CairoStatus() ||
      !(size <= mWindowSurface->GetSize())) {
    mWindowSurface = new gfxXlibSurface(mDisplay, mWindow, mVisual, size);
  }
  if (mWindowSurface->CairoStatus()) {
    return nullptr;
  }

  if (!mImageSurface || mImageSurface->CairoStatus() ||
      !(size <= mImageSurface->GetSize())) {
    gfxImageFormat format = SurfaceFormatToImageFormat(mFormat);
    if (format == gfx::SurfaceFormat::UNKNOWN) {
      format = mDepth == 32 ? gfx::SurfaceFormat::A8R8G8B8_UINT32
                            : gfx::SurfaceFormat::X8R8G8B8_UINT32;
    }

    mImageSurface = new gfxImageSurface(size, format);
    if (mImageSurface->CairoStatus()) {
      return nullptr;
    }
  }

  gfxImageFormat format = mImageSurface->Format();
  // Cairo prefers compositing to BGRX instead of BGRA where possible.
  // Cairo/pixman lacks some fast paths for compositing BGRX onto BGRA, so
  // just report it as BGRX directly in that case.
  // Otherwise, for Skia, report it as BGRA to the compositor. The alpha
  // channel will be discarded when we put the image.
  if (format == gfx::SurfaceFormat::X8R8G8B8_UINT32) {
    gfx::BackendType backend = gfxVars::ContentBackend();
    if (!gfx::Factory::DoesBackendSupportDataDrawtarget(backend)) {
      backend = gfx::BackendType::SKIA;
    }
    if (backend != gfx::BackendType::CAIRO) {
      format = gfx::SurfaceFormat::A8R8G8B8_UINT32;
    }
  }

  return gfxPlatform::CreateDrawTargetForData(
      mImageSurface->Data(), mImageSurface->GetSize(), mImageSurface->Stride(),
      ImageFormatToSurfaceFormat(format));
}

void WindowSurfaceX11Image::Commit(
    const LayoutDeviceIntRegion& aInvalidRegion) {
  RefPtr<gfx::DrawTarget> dt = gfx::Factory::CreateDrawTargetForCairoSurface(
      mWindowSurface->CairoSurface(), mWindowSurface->GetSize());
  RefPtr<gfx::SourceSurface> surf =
      gfx::Factory::CreateSourceSurfaceForCairoSurface(
          mImageSurface->CairoSurface(), mImageSurface->GetSize(),
          mImageSurface->Format());
  if (!dt || !surf) {
    return;
  }

  gfx::IntRect bounds = aInvalidRegion.GetBounds().ToUnknownRect();
  if (bounds.IsEmpty()) {
    return;
  }

  uint32_t numRects = aInvalidRegion.GetNumRects();
  if (numRects == 1) {
    dt->CopySurface(surf, bounds, bounds.TopLeft());
  } else {
    AutoTArray<IntRect, 32> rects;
    rects.SetCapacity(numRects);
    for (auto iter = aInvalidRegion.RectIter(); !iter.Done(); iter.Next()) {
      rects.AppendElement(iter.Get().ToUnknownRect());
    }
    dt->PushDeviceSpaceClipRects(rects.Elements(), rects.Length());

    dt->DrawSurface(surf, gfx::Rect(bounds), gfx::Rect(bounds),
                    DrawSurfaceOptions(),
                    DrawOptions(1.0f, CompositionOp::OP_SOURCE));

    dt->PopClip();
  }
}

}  // namespace widget
}  // namespace mozilla