assertEq(isValidJSON(`0`), true);
assertEq(isValidJSON(`1.2`), true);
assertEq(isValidJSON(`-2.3`), true);
assertEq(isValidJSON(`true`), true);
assertEq(isValidJSON(`false`), true);
assertEq(isValidJSON(`null`), true);
assertEq(isValidJSON(`"foo"`), true);
assertEq(isValidJSON(`[]`), true);
assertEq(isValidJSON(`[0, true, false, null]`), true);
assertEq(isValidJSON(`{}`), true);
assertEq(isValidJSON(`{"foo": 10}`), true);

assertEq(isValidJSON(``), false);
assertEq(isValidJSON(`.2`), false);
assertEq(isValidJSON(`2.`), false);
assertEq(isValidJSON(`undefined`), false);
assertEq(isValidJSON(`'foo'`), false);
assertEq(isValidJSON(`'foo`), false);
assertEq(isValidJSON(`"foo`), false);
assertEq(isValidJSON(`[`), false);
assertEq(isValidJSON(`[,]`), false);
assertEq(isValidJSON(`[1,]`), false);
assertEq(isValidJSON(`{foo: 10}`), false);
assertEq(isValidJSON(`{"foo": 10,}`), false);
assertEq(isValidJSON(`{`), false);