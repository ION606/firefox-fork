/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

use std::fmt;

use rusqlite::{
    types::{FromSql, FromSqlError, FromSqlResult, ToSql, ToSqlOutput, ValueRef},
    Result as RusqliteResult,
};

use crate::rs::SuggestRecordType;

/// Record types from these providers will be ingested when consumers do not
/// specify providers in `SuggestIngestionConstraints`.
pub(crate) const DEFAULT_INGEST_PROVIDERS: [SuggestionProvider; 6] = [
    SuggestionProvider::Amp,
    SuggestionProvider::Wikipedia,
    SuggestionProvider::Amo,
    SuggestionProvider::Yelp,
    SuggestionProvider::Mdn,
    SuggestionProvider::AmpMobile,
];

/// A provider is a source of search suggestions.
#[derive(Clone, Copy, Debug, Eq, PartialEq, Hash, uniffi::Enum)]
#[repr(u8)]
pub enum SuggestionProvider {
    Amp = 1,
    Wikipedia = 2,
    Amo = 3,
    Pocket = 4,
    Yelp = 5,
    Mdn = 6,
    Weather = 7,
    AmpMobile = 8,
    Fakespot = 9,
    Exposure = 10,
}

impl fmt::Display for SuggestionProvider {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Amp => write!(f, "amp"),
            Self::Wikipedia => write!(f, "wikipedia"),
            Self::Amo => write!(f, "amo"),
            Self::Pocket => write!(f, "pocket"),
            Self::Yelp => write!(f, "yelp"),
            Self::Mdn => write!(f, "mdn"),
            Self::Weather => write!(f, "weather"),
            Self::AmpMobile => write!(f, "ampmobile"),
            Self::Fakespot => write!(f, "fakespot"),
            Self::Exposure => write!(f, "exposure"),
        }
    }
}

impl FromSql for SuggestionProvider {
    fn column_result(value: ValueRef<'_>) -> FromSqlResult<Self> {
        let v = value.as_i64()?;
        u8::try_from(v)
            .ok()
            .and_then(SuggestionProvider::from_u8)
            .ok_or_else(|| FromSqlError::OutOfRange(v))
    }
}

impl SuggestionProvider {
    pub fn all() -> [Self; 10] {
        [
            Self::Amp,
            Self::Wikipedia,
            Self::Amo,
            Self::Pocket,
            Self::Yelp,
            Self::Mdn,
            Self::Weather,
            Self::AmpMobile,
            Self::Fakespot,
            Self::Exposure,
        ]
    }

    #[inline]
    pub(crate) fn from_u8(v: u8) -> Option<Self> {
        match v {
            1 => Some(Self::Amp),
            2 => Some(Self::Wikipedia),
            3 => Some(Self::Amo),
            4 => Some(Self::Pocket),
            5 => Some(Self::Yelp),
            6 => Some(Self::Mdn),
            7 => Some(Self::Weather),
            8 => Some(Self::AmpMobile),
            9 => Some(Self::Fakespot),
            10 => Some(Self::Exposure),
            _ => None,
        }
    }

    pub(crate) fn record_types(&self) -> Vec<SuggestRecordType> {
        match self {
            Self::Amp => vec![SuggestRecordType::AmpWikipedia],
            Self::Wikipedia => vec![SuggestRecordType::AmpWikipedia],
            Self::Amo => vec![SuggestRecordType::Amo],
            Self::Pocket => vec![SuggestRecordType::Pocket],
            Self::Yelp => vec![SuggestRecordType::Yelp, SuggestRecordType::Geonames],
            Self::Mdn => vec![SuggestRecordType::Mdn],
            Self::Weather => vec![SuggestRecordType::Weather, SuggestRecordType::Geonames],
            Self::AmpMobile => vec![SuggestRecordType::AmpMobile],
            Self::Fakespot => vec![SuggestRecordType::Fakespot],
            Self::Exposure => vec![SuggestRecordType::Exposure],
        }
    }
}

impl ToSql for SuggestionProvider {
    fn to_sql(&self) -> RusqliteResult<ToSqlOutput<'_>> {
        Ok(ToSqlOutput::from(*self as u8))
    }
}

/// Some providers manage multiple suggestion subtypes. Queries, ingests, and
/// other operations on those providers must be constrained to a desired subtype.
#[derive(Clone, Default, Debug, uniffi::Record)]
pub struct SuggestionProviderConstraints {
    /// `Exposure` provider - For each desired exposure suggestion type, this
    /// should contain the value of the `suggestion_type` field of its remote
    /// settings record(s).
    #[uniffi(default = None)]
    pub exposure_suggestion_types: Option<Vec<String>>,
}