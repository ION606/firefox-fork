// |reftest| shell-option(--enable-json-parse-with-source) skip-if(!JSON.hasOwnProperty('isRawJSON')||!xulRuntime.shell) -- json-parse-with-source is not enabled unconditionally, requires shell-options
// Copyright (C) 2024 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-built-in-function-objects
description: >
  JSON.rawJSON.length value and descriptor.
info: |
    Every built-in function object, including constructors, has a *"length"*
    property whose value is a non-negative integral Number. Unless otherwise
    specified, this value is the number of required parameters shown in the
    subclause heading for the function description. Optional parameters and rest
    parameters are not included in the parameter count.

    Unless otherwise specified, the *"length"* property of a built-in function
    object has the attributes { [[Writable]]: *false*, [[Enumerable]]: *false*,
    [[Configurable]]: *true* }.

includes: [propertyHelper.js]
features: [json-parse-with-source]
---*/

verifyProperty(JSON.rawJSON, 'length', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});

reportCompare(0, 0);