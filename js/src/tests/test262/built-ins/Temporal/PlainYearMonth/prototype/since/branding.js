// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const since = Temporal.PlainYearMonth.prototype.since;

assert.sameValue(typeof since, "function");

const args = [new Temporal.PlainYearMonth(2022, 6)];

assert.throws(TypeError, () => since.apply(undefined, args), "undefined");
assert.throws(TypeError, () => since.apply(null, args), "null");
assert.throws(TypeError, () => since.apply(true, args), "true");
assert.throws(TypeError, () => since.apply("", args), "empty string");
assert.throws(TypeError, () => since.apply(Symbol(), args), "symbol");
assert.throws(TypeError, () => since.apply(1, args), "1");
assert.throws(TypeError, () => since.apply({}, args), "plain object");
assert.throws(TypeError, () => since.apply(Temporal.PlainYearMonth, args), "Temporal.PlainYearMonth");
assert.throws(TypeError, () => since.apply(Temporal.PlainYearMonth.prototype, args), "Temporal.PlainYearMonth.prototype");

reportCompare(0, 0);