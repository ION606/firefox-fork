// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tostring
description: halfTrunc value for roundingMode option
features: [Temporal]
---*/

const instant = new Temporal.Instant(1_000_000_000_123_987_500n);

const result1 = instant.toString({ smallestUnit: "microsecond", roundingMode: "halfTrunc" });
assert.sameValue(result1, "2001-09-09T01:46:40.123987Z",
  "roundingMode is halfTrunc (with 6 digits from smallestUnit)");

const result2 = instant.toString({ fractionalSecondDigits: 6, roundingMode: "halfTrunc" });
assert.sameValue(result2, "2001-09-09T01:46:40.123987Z",
  "roundingMode is halfTrunc (with 6 digits from fractionalSecondDigits)");

const result3 = instant.toString({ smallestUnit: "millisecond", roundingMode: "halfTrunc" });
assert.sameValue(result3, "2001-09-09T01:46:40.124Z",
  "roundingMode is halfTrunc (with 3 digits from smallestUnit)");

const result4 = instant.toString({ fractionalSecondDigits: 3, roundingMode: "halfTrunc" });
assert.sameValue(result4, "2001-09-09T01:46:40.124Z",
  "roundingMode is halfTrunc (with 3 digits from fractionalSecondDigits)");

const result5 = instant.toString({ smallestUnit: "second", roundingMode: "halfTrunc" });
assert.sameValue(result5, "2001-09-09T01:46:40Z",
  "roundingMode is halfTrunc (with 0 digits from smallestUnit)");

const result6 = instant.toString({ fractionalSecondDigits: 0, roundingMode: "halfTrunc" });
assert.sameValue(result6, "2001-09-09T01:46:40Z",
  "roundingMode is halfTrunc (with 0 digits from fractionalSecondDigits)");

const result7 = instant.toString({ smallestUnit: "minute", roundingMode: "halfTrunc" });
assert.sameValue(result7, "2001-09-09T01:47Z", "roundingMode is halfTrunc (round to minute)");

reportCompare(0, 0);