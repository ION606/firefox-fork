// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.compare
description: ISO strings at the edges of the representable range
features: [Temporal]
---*/

const instance = new Temporal.PlainYearMonth(2019, 6);

const validStrings = [
  "-271821-04",
  "-271821-04-01",
  "-271821-04-01T00:00",
  "+275760-09",
  "+275760-09-30",
  "+275760-09-30T23:59:59.999999999",
];

for (const arg of validStrings) {
  Temporal.PlainYearMonth.compare(arg, instance);
  Temporal.PlainYearMonth.compare(instance, arg);
}

const invalidStrings = [
  "-271821-03-31",
  "-271821-03-31T23:59:59.999999999",
  "+275760-10",
  "+275760-10-01",
  "+275760-10-01T00:00",
];

for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => Temporal.PlainYearMonth.compare(arg, instance),
    `"${arg}" is outside the representable range of PlainYearMonth (first argument)`
  );
  assert.throws(
    RangeError,
    () => Temporal.PlainYearMonth.compare(instance, arg),
    `"${arg}" is outside the representable range of PlainYearMonth (second argument)`
  );
}

reportCompare(0, 0);