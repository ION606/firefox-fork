{%- call py::docstring_value(ci.namespace_docstring(), 0) %}

# This file was autogenerated by some hot garbage in the `uniffi` crate.
# Trust me, you don't want to mess with it!

# Common helper code.
#
# Ideally this would live in a separate .py file where it can be unittested etc
# in isolation, and perhaps even published as a re-useable package.
#
# However, it's important that the details of how this helper code works (e.g. the
# way that different builtin types are passed across the FFI) exactly match what's
# expected by the rust code on the other side of the interface. In practice right
# now that means coming from the exact some version of `uniffi` that was used to
# compile the rust component. The easiest way to ensure this is to bundle the Python
# helpers directly inline like we're doing here.

from __future__ import annotations
import os
import sys
import ctypes
import enum
import struct
import contextlib
import datetime
import threading
import itertools
import traceback
import typing
{%- if ci.has_async_fns() %}
import asyncio
{%- endif %}
import platform
{%- for req in self.imports() %}
{{ req.render() }}
{%- endfor %}

# Used for default argument values
_DEFAULT = object() # type: typing.Any

{% include "RustBufferTemplate.py" %}
{% include "Helpers.py" %}
{% include "HandleMap.py" %}
{% include "RustBufferHelper.py" %}

# Contains loading, initialization code, and the FFI Function declarations.
{% include "NamespaceLibraryTemplate.py" %}

# Public interface members begin here.
{{ type_helper_code }}

# Async support
{%- if ci.has_async_fns() %}
{%- include "Async.py" %}
{%- endif %}

{%- for func in ci.function_definitions() %}
{%- include "TopLevelFunctionTemplate.py" %}
{%- endfor %}

__all__ = [
    "InternalError",
    {%- for e in ci.enum_definitions() %}
    "{{ e|type_name }}",
    {%- endfor %}
    {%- for record in ci.record_definitions() %}
    "{{ record|type_name }}",
    {%- endfor %}
    {%- for func in ci.function_definitions() %}
    "{{ func.name() }}",
    {%- endfor %}
    {%- for obj in ci.object_definitions() %}
    "{{ obj|type_name }}",
    {%- endfor %}
    {%- for c in ci.callback_interface_definitions() %}
    "{{ c.name()|class_name }}",
    {%- endfor %}
]

{% import "macros.py" as py %}