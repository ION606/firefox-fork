/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

//! Computed time values.

use crate::values::CSSFloat;
use crate::Zero;
use std::fmt::{self, Write};
use style_traits::{CssWriter, ToCss};

/// A computed `<time>` value.
#[derive(Animate, Clone, Copy, Debug, MallocSizeOf, PartialEq, PartialOrd, ToResolvedValue)]
#[cfg_attr(feature = "servo", derive(Deserialize, Serialize))]
#[repr(C)]
pub struct Time {
    seconds: CSSFloat,
}

impl Time {
    /// Creates a time value from a seconds amount.
    pub fn from_seconds(seconds: CSSFloat) -> Self {
        Time { seconds }
    }

    /// Returns the amount of seconds this time represents.
    #[inline]
    pub fn seconds(&self) -> CSSFloat {
        self.seconds
    }
}

impl ToCss for Time {
    fn to_css<W>(&self, dest: &mut CssWriter<W>) -> fmt::Result
    where
        W: Write,
    {
        self.seconds().to_css(dest)?;
        dest.write_char('s')
    }
}

impl Zero for Time {
    fn zero() -> Self {
        Self::from_seconds(0.0)
    }

    fn is_zero(&self) -> bool {
        self.seconds == 0.
    }
}