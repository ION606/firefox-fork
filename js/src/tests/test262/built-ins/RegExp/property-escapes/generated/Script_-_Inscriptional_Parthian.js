// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Inscriptional_Parthian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010B40, 0x010B55],
    [0x010B58, 0x010B5F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Inscriptional_Parthian}+$/u,
  matchSymbols,
  "\\p{Script=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\p{Script=Prti}+$/u,
  matchSymbols,
  "\\p{Script=Prti}"
);
testPropertyEscapes(
  /^\p{sc=Inscriptional_Parthian}+$/u,
  matchSymbols,
  "\\p{sc=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\p{sc=Prti}+$/u,
  matchSymbols,
  "\\p{sc=Prti}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010B3F],
    [0x010B56, 0x010B57],
    [0x010B60, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Inscriptional_Parthian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\P{Script=Prti}+$/u,
  nonMatchSymbols,
  "\\P{Script=Prti}"
);
testPropertyEscapes(
  /^\P{sc=Inscriptional_Parthian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\P{sc=Prti}+$/u,
  nonMatchSymbols,
  "\\P{sc=Prti}"
);

reportCompare(0, 0);