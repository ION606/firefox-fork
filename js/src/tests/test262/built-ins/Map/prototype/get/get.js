// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-map.prototype.get
description: >
  Property type and descriptor.
info: |
  Map.prototype.get ( key )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Map.prototype.get,
  'function',
  '`typeof Map.prototype.get` is `function`'
);

verifyProperty(Map.prototype, 'get', {
  writable: true,
  enumerable: false,
  configurable: true,
});

reportCompare(0, 0);