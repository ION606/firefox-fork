// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- async-iteration
description: |
  pending
esid: pending
---*/

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let iter = gen().filter(x => x % 2);

for (const v of [1, 3]) {
  iter.next().then(
    ({done, value}) => {
      assert.sameValue(done, false);
      assert.sameValue(value, v);
    }
  );
}

iter.next().then(({done}) => assert.sameValue(done, true));


reportCompare(0, 0);