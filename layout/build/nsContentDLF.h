/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef nsContentDLF_h__
#define nsContentDLF_h__

#include "nsIDocumentLoaderFactory.h"
#include "nsMimeTypes.h"

class nsDocShell;
class nsIChannel;
class nsIDocumentViewer;
class nsILoadGroup;
class nsIStreamListener;

#define CONTENT_DLF_CONTRACTID "@mozilla.org/content/document-loader-factory;1"
#define PLUGIN_DLF_CONTRACTID \
  "@mozilla.org/content/plugin/document-loader-factory;1"

class nsContentDLF final : public nsIDocumentLoaderFactory {
 protected:
  virtual ~nsContentDLF();

 public:
  nsContentDLF();

  NS_DECL_ISUPPORTS
  NS_DECL_NSIDOCUMENTLOADERFACTORY

  nsresult InitUAStyleSheet();

  typedef already_AddRefed<mozilla::dom::Document> (*DocumentCreator)();
  nsresult CreateDocument(const char* aCommand, nsIChannel* aChannel,
                          nsILoadGroup* aLoadGroup, nsIDocShell* aContainer,
                          DocumentCreator aDocumentCreator,
                          nsIStreamListener** aDocListener,
                          nsIDocumentViewer** aDocumentViewer);

  /**
   * Create a blank document using the given loadgroup and given
   * principal.  aPrincipal is allowed to be null, in which case the
   * new document will get the about:blank content principal.
   */
  static already_AddRefed<mozilla::dom::Document> CreateBlankDocument(
      nsILoadGroup* aLoadGroup, nsIPrincipal* aPrincipal,
      nsIPrincipal* aPartitionedPrincipal, nsDocShell* aContainer);

 private:
  static nsresult EnsureUAStyleSheet();
  static bool IsImageContentType(const nsACString&);
};

nsresult NS_NewContentDocumentLoaderFactory(nsIDocumentLoaderFactory** aResult);

#endif