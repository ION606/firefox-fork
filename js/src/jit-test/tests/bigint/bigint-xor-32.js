const tests = [
  [-0x80000000n, -2n, 0x7ffffffen],
  [-0x7fffffffn, -2n, 0x7fffffffn],
  [-0x7ffffffen, -2n, 0x7ffffffcn],
  [-2n, -2n, 0n],
  [-1n, -2n, 1n],
  [0n, -2n, -2n],
  [1n, -2n, -1n],
  [2n, -2n, -4n],
  [0x7ffffffen, -2n, -0x80000000n],
  [0x7fffffffn, -2n, -0x7fffffffn],
  [-0x80000000n, -1n, 0x7fffffffn],
  [-0x7fffffffn, -1n, 0x7ffffffen],
  [-0x7ffffffen, -1n, 0x7ffffffdn],
  [-1n, -1n, 0n],
  [0n, -1n, -1n],
  [1n, -1n, -2n],
  [2n, -1n, -3n],
  [0x7ffffffen, -1n, -0x7fffffffn],
  [0x7fffffffn, -1n, -0x80000000n],
  [-0x80000000n, 0n, -0x80000000n],
  [-0x7fffffffn, 0n, -0x7fffffffn],
  [-0x7ffffffen, 0n, -0x7ffffffen],
  [0n, 0n, 0n],
  [1n, 0n, 1n],
  [2n, 0n, 2n],
  [0x7ffffffen, 0n, 0x7ffffffen],
  [0x7fffffffn, 0n, 0x7fffffffn],
  [-0x80000000n, 1n, -0x7fffffffn],
  [-0x7fffffffn, 1n, -0x80000000n],
  [-0x7ffffffen, 1n, -0x7ffffffdn],
  [1n, 1n, 0n],
  [2n, 1n, 3n],
  [0x7ffffffen, 1n, 0x7fffffffn],
  [0x7fffffffn, 1n, 0x7ffffffen],
  [-0x80000000n, 2n, -0x7ffffffen],
  [-0x7fffffffn, 2n, -0x7ffffffdn],
  [-0x7ffffffen, 2n, -0x80000000n],
  [2n, 2n, 0n],
  [0x7ffffffen, 2n, 0x7ffffffcn],
  [0x7fffffffn, 2n, 0x7ffffffdn],
  [-0x80000000n, 0x7ffffffen, -2n],
  [-0x7fffffffn, 0x7ffffffen, -1n],
  [-0x7ffffffen, 0x7ffffffen, -4n],
  [0x7ffffffen, 0x7ffffffen, 0n],
  [0x7fffffffn, 0x7ffffffen, 1n],
  [-0x80000000n, 0x7fffffffn, -1n],
  [-0x7fffffffn, 0x7fffffffn, -2n],
  [-0x7ffffffen, 0x7fffffffn, -3n],
  [0x7fffffffn, 0x7fffffffn, 0n],
  [-0x80000000n, -0x80000000n, 0n],
  [-0x7fffffffn, -0x80000000n, 1n],
  [-0x7ffffffen, -0x80000000n, 2n],
  [-0x7fffffffn, -0x7fffffffn, 0n],
  [-0x7ffffffen, -0x7fffffffn, 3n],
  [-0x7ffffffen, -0x7ffffffen, 0n],
];

function f(tests) {
  for (let test of tests) {
    let lhs = test[0], rhs = test[1], expected = test[2];
    assertEq(BigInt.asIntN(32, lhs), lhs);
    assertEq(BigInt.asIntN(32, rhs), rhs);
    assertEq(BigInt.asIntN(32, expected), expected);

    assertEq(lhs ^ rhs, expected);
    assertEq(rhs ^ lhs, expected);
  }
}

for (let i = 0; i < 10; ++i) {
  f(tests);
}