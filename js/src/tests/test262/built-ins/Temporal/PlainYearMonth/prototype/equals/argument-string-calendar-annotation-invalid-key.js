// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.equals
description: Annotation keys are lowercase-only
features: [Temporal]
---*/

const invalidStrings = [
  ["1970-01-01T00:00[U-CA=iso8601]", "invalid capitalized key"],
  ["1970-01-01T00:00[u-CA=iso8601]", "invalid partially-capitalized key"],
  ["1970-01-01T00:00[FOO=bar]", "invalid capitalized unrecognized key"],
];
const instance = new Temporal.PlainYearMonth(2000, 5);
invalidStrings.forEach(([arg, descr]) => {
  assert.throws(
    RangeError,
    () => instance.equals(arg),
    `annotation keys must be lowercase: ${arg} - ${descr}`
  );
});

reportCompare(0, 0);