// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.prototype.with
description: Empty or a function object may be used as options
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.PlainMonthDay(5, 2);

const result1 = instance.with({ day: 5 }, {});
TemporalHelpers.assertPlainMonthDay(
  result1, "M05", 5,
  "options may be an empty plain object"
);

const result2 = instance.with({ day: 5 }, () => {});
TemporalHelpers.assertPlainMonthDay(
  result2, "M05", 5,
  "options may be a function object"
);

reportCompare(0, 0);