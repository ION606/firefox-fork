// |reftest| skip-if(!Array.prototype.toSource)

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 245148;
var summary = '[null].toSource() == "[null]"';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

expect = '[null]';
actual = [null].toSource();

reportCompare(expect, actual, summary);