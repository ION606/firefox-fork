// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.offsetnanoseconds
description: Basic functionality in named time zone
features: [Temporal]
---*/

var instance = new Temporal.ZonedDateTime(0n, "America/Los_Angeles");
assert.sameValue(instance.offsetNanoseconds, -8 * 3600000000000)

reportCompare(0, 0);