/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef mozilla_dom_battery_BatteryManager_h
#define mozilla_dom_battery_BatteryManager_h

#include "mozilla/DOMEventTargetHelper.h"
#include "mozilla/HalBatteryInformation.h"

namespace mozilla {

namespace hal {
class BatteryInformation;
}  // namespace hal

namespace dom::battery {

class BatteryManager final : public DOMEventTargetHelper,
                             public hal::BatteryObserver {
 public:
  explicit BatteryManager(nsPIDOMWindowInner* aWindow);

  void Init();
  void Shutdown();

  // For IObserver.
  void Notify(const hal::BatteryInformation& aBatteryInfo) override;

  /**
   * WebIDL Interface
   */

  nsIGlobalObject* GetParentObject() const { return GetOwnerGlobal(); }

  JSObject* WrapObject(JSContext*, JS::Handle<JSObject*> aGivenProto) override;

  bool Charging() const;

  double ChargingTime() const;

  double DischargingTime() const;

  double Level() const;

  IMPL_EVENT_HANDLER(chargingchange)
  IMPL_EVENT_HANDLER(chargingtimechange)
  IMPL_EVENT_HANDLER(dischargingtimechange)
  IMPL_EVENT_HANDLER(levelchange)

 private:
  /**
   * Update the battery information stored in the battery manager object using
   * a battery information object.
   */
  void UpdateFromBatteryInfo(const hal::BatteryInformation& aBatteryInfo);

  /**
   * Represents the battery level, ranging from 0.0 (dead or removed?)
   * to 1.0 (fully charged)
   */
  double mLevel;
  bool mCharging;
  /**
   * Represents the discharging time or the charging time, depending on the
   * current battery status (charging or not).
   */
  double mRemainingTime;
};

}  // namespace dom::battery
}  // namespace mozilla

#endif  // mozilla_dom_battery_BatteryManager_h