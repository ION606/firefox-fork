/* Any copyright is dedicated to the Public Domain.
  http://creativecommons.org/publicdomain/zero/1.0/ */
/* eslint-disable max-len */

"use strict";

/*
 * THIS FILE IS AUTOGENERATED. DO NOT MODIFY BY HAND. SEE devtools/client/webconsole/test/README.md.
 */

const {
  parsePacketsWithFronts,
} = require("chrome://mochitests/content/browser/devtools/client/webconsole/test/browser/stub-generator-helpers.js");
const { prepareMessage } = require("resource://devtools/client/webconsole/utils/messages.js");
const {
  ConsoleMessage,
  NetworkEventMessage,
} = require("resource://devtools/client/webconsole/types.js");

const rawPackets = new Map();
rawPackets.set(`console.log('foobar', 'test')`, {
  "arguments": [
    "foobar",
    "test"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log(undefined)`, {
  "arguments": [
    {
      "type": "undefined"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.warn('danger, will robinson!')`, {
  "arguments": [
    "danger, will robinson!"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "warn",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log(NaN)`, {
  "arguments": [
    {
      "type": "NaN"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log(null)`, {
  "arguments": [
    {
      "type": "null"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log('鼬')`, {
  "arguments": [
    "鼬"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.clear()`, {
  "arguments": [],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "clear",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count('bar')`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 1,
    "label": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.assert(false, {message: 'foobar'})`, {
  "arguments": [
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj29",
        "class": "Object",
        "ownPropertyLength": 1,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "Object",
          "ownProperties": {
            "message": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "foobar"
            }
          },
          "ownPropertiesLength": 1
        }
      },
      "actorID": "server0.conn0.process5//obj29"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "assert",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source30",
  "innerWindowID": 8589934593,
  "stacktrace": [
    {
      "columnNumber": 35,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "triggerPacket",
      "lineNumber": 1,
      "sourceId": "server0.conn0.child1/source30"
    }
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log('úṇĩçödê țĕșť')`, {
  "arguments": [
    "úṇĩçödê țĕșť"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.dirxml(window)`, {
  "arguments": [
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj32",
        "class": "Window",
        "ownPropertyLength": 818,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "ObjectWithURL",
          "url": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html"
        }
      },
      "actorID": "server0.conn0.process5//obj32"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "dirxml",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log('myarray', ['red', 'green', 'blue'])`, {
  "arguments": [
    "myarray",
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj34",
        "class": "Array",
        "ownPropertyLength": 4,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "ArrayLike",
          "length": 3,
          "items": [
            "red",
            "green",
            "blue"
          ]
        }
      },
      "actorID": "server0.conn0.process5//obj34"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log('myregex', /a.b.c/)`, {
  "arguments": [
    "myregex",
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj36",
        "class": "RegExp",
        "ownPropertyLength": 1,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "displayString": "/a.b.c/"
      },
      "actorID": "server0.conn0.process5//obj36"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.table(['red', 'green', 'blue']);`, {
  "arguments": [
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj38",
        "class": "Array",
        "ownPropertyLength": 4,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": null,
        "ownProperties": {
          "0": {
            "configurable": true,
            "enumerable": true,
            "writable": true,
            "value": "red"
          },
          "1": {
            "configurable": true,
            "enumerable": true,
            "writable": true,
            "value": "green"
          },
          "2": {
            "configurable": true,
            "enumerable": true,
            "writable": true,
            "value": "blue"
          }
        }
      },
      "actorID": "server0.conn0.process5//obj38"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "table",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log('myobject', {red: 'redValue', green: 'greenValue', blue: 'blueValue'});`, {
  "arguments": [
    "myobject",
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj40",
        "class": "Object",
        "ownPropertyLength": 3,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "Object",
          "ownProperties": {
            "red": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "redValue"
            },
            "green": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "greenValue"
            },
            "blue": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "blueValue"
            }
          },
          "ownPropertiesLength": 3
        }
      },
      "actorID": "server0.conn0.process5//obj40"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.debug('debug message');`, {
  "arguments": [
    "debug message"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "debug",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.info('info message');`, {
  "arguments": [
    "info message"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "info",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.error('error message');`, {
  "arguments": [
    "error message"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "error",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source30",
  "innerWindowID": 8589934593,
  "stacktrace": [
    {
      "columnNumber": 35,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "triggerPacket",
      "lineNumber": 1,
      "sourceId": "server0.conn0.child1/source30"
    }
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log(Symbol.for('foo'))`, {
  "arguments": [
    {
      "type": "symbol",
      "actor": "server0.conn0.process7//symbol46",
      "name": "foo"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.process7//source20",
  "innerWindowID": 15032385537,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log(Symbol.for('bar'))`, {
  "arguments": [
    {
      "type": "symbol",
      "actor": "server0.conn0.process7//symbol48",
      "name": "bar"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.process7//source20",
  "innerWindowID": 15032385537,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log('mymap')`, {
  "arguments": [
    "mymap",
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj45",
        "class": "Map",
        "ownPropertyLength": 0,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "MapLike",
          "size": 2,
          "entries": [
            [
              "key1",
              "value1"
            ],
            [
              "key2",
              "value2"
            ]
          ]
        }
      },
      "actorID": "server0.conn0.process5//obj45"
    }
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 5,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source46",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log('myset')`, {
  "arguments": [
    "myset",
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj47",
        "class": "Set",
        "ownPropertyLength": 0,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "ArrayLike",
          "length": 2,
          "items": [
            "a",
            "b"
          ]
        }
      },
      "actorID": "server0.conn0.process5//obj47"
    }
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.trace()`, {
  "arguments": [],
  "columnNumber": 13,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "trace",
  "lineNumber": 3,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source50",
  "innerWindowID": 8589934593,
  "stacktrace": [
    {
      "columnNumber": 13,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "testStacktraceFiltering",
      "lineNumber": 3,
      "sourceId": "server0.conn0.child1/source50"
    },
    {
      "columnNumber": 5,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "foo",
      "lineNumber": 6,
      "sourceId": "server0.conn0.child1/source50"
    },
    {
      "columnNumber": 3,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "triggerPacket",
      "lineNumber": 9,
      "sourceId": "server0.conn0.child1/source50"
    }
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.trace('bar', {'foo': 'bar'}, [1,2,3])`, {
  "arguments": [
    "bar",
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj50",
        "class": "Object",
        "ownPropertyLength": 1,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "Object",
          "ownProperties": {
            "foo": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "bar"
            }
          },
          "ownPropertiesLength": 1
        }
      },
      "actorID": "server0.conn0.process5//obj50"
    },
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj51",
        "class": "Array",
        "ownPropertyLength": 4,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "ArrayLike",
          "length": 3,
          "items": [
            1,
            2,
            3
          ]
        }
      },
      "actorID": "server0.conn0.process5//obj51"
    }
  ],
  "columnNumber": 13,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "trace",
  "lineNumber": 3,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source51",
  "innerWindowID": 8589934593,
  "stacktrace": [
    {
      "columnNumber": 13,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "testStacktraceWithLog",
      "lineNumber": 3,
      "sourceId": "server0.conn0.child1/source51"
    },
    {
      "columnNumber": 5,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "foo",
      "lineNumber": 6,
      "sourceId": "server0.conn0.child1/source50"
    },
    {
      "columnNumber": 3,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "triggerPacket",
      "lineNumber": 9,
      "sourceId": "server0.conn0.child1/source50"
    }
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.trace("%cHello%c|%cWorld")`, {
  "arguments": [
    "Hello",
    "|",
    "World"
  ],
  "columnNumber": 13,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "trace",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child3/source57",
  "innerWindowID": 10737418241,
  "stacktrace": [
    {
      "columnNumber": 13,
      "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
      "functionName": "triggerPacket",
      "lineNumber": 2,
      "sourceId": "server0.conn0.child3/source57"
    }
  ],
  "styles": [
    "color:red",
    "",
    "color: blue"
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.time('bar')`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "time",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "timer": {
    "name": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`timerAlreadyExists`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "time",
  "lineNumber": 3,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "timer": {
    "error": "timerAlreadyExists",
    "name": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.timeLog('bar') - 1`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "timeLog",
  "lineNumber": 4,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "timer": {
    "duration": 4,
    "name": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.timeLog('bar') - 2`, {
  "arguments": [
    "bar",
    "second call",
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj54",
        "class": "Object",
        "ownPropertyLength": 1,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "Object",
          "ownProperties": {
            "state": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": 1
            }
          },
          "ownPropertiesLength": 1
        }
      },
      "actorID": "server0.conn0.process5//obj54"
    }
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "timeLog",
  "lineNumber": 5,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source46",
  "innerWindowID": 8589934593,
  "timer": {
    "duration": 5,
    "name": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.timeEnd('bar')`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "timeEnd",
  "lineNumber": 6,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "timer": {
    "duration": 9,
    "name": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`timeEnd.timerDoesntExist`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "timeEnd",
  "lineNumber": 7,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "timer": {
    "error": "timerDoesntExist",
    "name": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`timeLog.timerDoesntExist`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "timeLog",
  "lineNumber": 8,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "timer": {
    "error": "timerDoesntExist",
    "name": "bar"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.table('bar')`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "table",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.table(['a', 'b', 'c'])`, {
  "arguments": [
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj57",
        "class": "Array",
        "ownPropertyLength": 4,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": null,
        "ownProperties": {
          "0": {
            "configurable": true,
            "enumerable": true,
            "writable": true,
            "value": "a"
          },
          "1": {
            "configurable": true,
            "enumerable": true,
            "writable": true,
            "value": "b"
          },
          "2": {
            "configurable": true,
            "enumerable": true,
            "writable": true,
            "value": "c"
          }
        }
      },
      "actorID": "server0.conn0.process5//obj57"
    }
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "table",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.group('bar')`, {
  "arguments": [
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "group",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.groupEnd('bar')`, {
  "arguments": [],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "groupEnd",
  "lineNumber": 3,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.groupCollapsed('foo')`, {
  "arguments": [
    "foo"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "groupCollapsed",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.groupEnd('foo')`, {
  "arguments": [],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "groupEnd",
  "lineNumber": 3,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.group()`, {
  "arguments": [],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "group",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.groupEnd()`, {
  "arguments": [],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "groupEnd",
  "lineNumber": 3,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log(%cfoobar)`, {
  "arguments": [
    "foo",
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "styles": [
    "color:blue; font-size:1.3em; background:url('data:image/png,base64,iVBORw0KGgoAAAAN'), url('https://example.com/test'); position:absolute; top:10px; ",
    "color:red; line-height: 1.5; background:url('https://example.com/test')"
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log("%cHello%c|%cWorld")`, {
  "arguments": [
    "Hello",
    "|",
    "World"
  ],
  "columnNumber": 13,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source63",
  "innerWindowID": 8589934593,
  "styles": [
    "color:red",
    "",
    "color: blue"
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.group(%cfoo%cbar)`, {
  "arguments": [
    "foo",
    "bar"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "group",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "styles": [
    "color:blue;font-size:1.3em;background:url('https://example.com/test');position:absolute;top:10px",
    "color:red;background:url('https://example.com/test')"
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.groupEnd(%cfoo%cbar)`, {
  "arguments": [],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "groupEnd",
  "lineNumber": 6,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.groupCollapsed(%cfoo%cbaz)`, {
  "arguments": [
    "foo",
    "baz"
  ],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "groupCollapsed",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source48",
  "innerWindowID": 8589934593,
  "styles": [
    "color:blue;font-size:1.3em;background:url('https://example.com/test');position:absolute;top:10px",
    "color:red;background:url('https://example.com/test')"
  ],
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.groupEnd(%cfoo%cbaz)`, {
  "arguments": [],
  "columnNumber": 11,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "groupEnd",
  "lineNumber": 6,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source54",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.dir({C, M, Y, K})`, {
  "arguments": [
    {
      "_grip": {
        "type": "object",
        "actor": "server0.conn0.process5//obj66",
        "class": "Object",
        "ownPropertyLength": 4,
        "extensible": true,
        "frozen": false,
        "sealed": false,
        "isError": false,
        "preview": {
          "kind": "Object",
          "ownProperties": {
            "cyan": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "C"
            },
            "magenta": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "M"
            },
            "yellow": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "Y"
            },
            "black": {
              "configurable": true,
              "enumerable": true,
              "writable": true,
              "value": "K"
            }
          },
          "ownPropertiesLength": 4
        }
      },
      "actorID": "server0.conn0.process5//obj66"
    }
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "dir",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | default: 1`, {
  "arguments": [
    "default"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 2,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 1,
    "label": "default"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | default: 2`, {
  "arguments": [
    "default"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 3,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 2,
    "label": "default"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | test counter: 1`, {
  "arguments": [
    "test counter"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 4,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 1,
    "label": "test counter"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | test counter: 2`, {
  "arguments": [
    "test counter"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 5,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 2,
    "label": "test counter"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | default: 3`, {
  "arguments": [
    "default"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 6,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 3,
    "label": "default"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | clear`, {
  "arguments": [],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "clear",
  "lineNumber": 7,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | default: 4`, {
  "arguments": [
    "default"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 8,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 4,
    "label": "default"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.count | test counter: 3`, {
  "arguments": [
    "test counter"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "count",
  "lineNumber": 9,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 3,
    "label": "test counter"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.countReset | test counter: 0`, {
  "arguments": [
    "test counter"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "countReset",
  "lineNumber": 10,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "count": 0,
    "label": "test counter"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.countReset | counterDoesntExist`, {
  "arguments": [
    "test counter"
  ],
  "columnNumber": 15,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "countReset",
  "lineNumber": 11,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source68",
  "innerWindowID": 8589934593,
  "counter": {
    "error": "counterDoesntExist",
    "label": "test counter"
  },
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});

rawPackets.set(`console.log escaped characters`, {
  "arguments": [
    "hello \nfrom \rthe \"string world!"
  ],
  "columnNumber": 35,
  "filename": "https://example.com/browser/devtools/client/webconsole/test/browser/test-console-api.html",
  "level": "log",
  "lineNumber": 1,
  "timeStamp": 1572867483805,
  "sourceId": "server0.conn0.child1/source22",
  "innerWindowID": 8589934593,
  "resourceType": "console-message",
  "isAlreadyExistingResource": false
});


const stubPackets = parsePacketsWithFronts(rawPackets);

const stubPreparedMessages = new Map();
for (const [key, packet] of Array.from(stubPackets.entries())) {
  const transformedPacket = prepareMessage(packet, {
    getNextId: () => "1",
  });
  const message = ConsoleMessage(transformedPacket);
  stubPreparedMessages.set(key, message);
}

module.exports = {
  rawPackets,
  stubPreparedMessages,
  stubPackets,
};