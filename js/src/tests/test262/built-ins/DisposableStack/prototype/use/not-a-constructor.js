// |reftest| shell-option(--enable-explicit-resource-management) skip-if(!(this.hasOwnProperty('getBuildConfiguration')&&getBuildConfiguration('explicit-resource-management'))||!xulRuntime.shell) -- explicit-resource-management is not enabled unconditionally, requires shell-options
// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-disposablestack.prototype.use
description: >
  DisposableStack.prototype.use does not implement [[Construct]], is not new-able
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.

  sec-evaluatenew

  ...
  7. If IsConstructor(constructor) is false, throw a TypeError exception.
  ...
includes: [isConstructor.js]
features: [Reflect.construct, explicit-resource-management, arrow-function]
---*/

assert.sameValue(
  isConstructor(DisposableStack.prototype.use),
  false,
  'isConstructor(DisposableStack.prototype.use) must return false'
);

assert.throws(TypeError, () => {
  let stack = new DisposableStack({}); new stack.use();
}, '`let stack = new DisposableStack({}); new stack.use()` throws TypeError');

reportCompare(0, 0);