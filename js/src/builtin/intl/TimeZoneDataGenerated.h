// Generated by make_intl_data.py. DO NOT EDIT.
// tzdata version = 2024b

#ifndef builtin_intl_TimeZoneDataGenerated_h
#define builtin_intl_TimeZoneDataGenerated_h

namespace js {
namespace timezone {

// Format:
// "ZoneName" // ICU-Name [time zone file]
const char* const ianaZonesTreatedAsLinksByICU[] = {
    "Africa/Asmara", // Africa/Asmera [backward]
    "America/Argentina/Buenos_Aires", // America/Buenos_Aires [southamerica]
    "America/Argentina/Catamarca", // America/Catamarca [southamerica]
    "America/Argentina/Cordoba", // America/Cordoba [southamerica]
    "America/Argentina/Jujuy", // America/Jujuy [southamerica]
    "America/Argentina/Mendoza", // America/Mendoza [southamerica]
    "America/Atikokan", // America/Coral_Harbour [backward]
    "America/Indiana/Indianapolis", // America/Indianapolis [northamerica]
    "America/Kentucky/Louisville", // America/Louisville [northamerica]
    "America/Nuuk", // America/Godthab [europe]
    "Asia/Ho_Chi_Minh", // Asia/Saigon [asia]
    "Asia/Kathmandu", // Asia/Katmandu [asia]
    "Asia/Kolkata", // Asia/Calcutta [asia]
    "Asia/Yangon", // Asia/Rangoon [asia]
    "Atlantic/Faroe", // Atlantic/Faeroe [europe]
    "Europe/Kyiv", // Europe/Kiev [europe]
    "Pacific/Chuuk", // Pacific/Truk [backward]
    "Pacific/Kanton", // Pacific/Enderbury [australasia]
    "Pacific/Pohnpei", // Pacific/Ponape [backward]
    "UTC", // Etc/UTC [backward]
};

// Format:
// "LinkName", "Target" // ICU-Target [time zone file]
struct LinkAndTarget
{
    const char* const link;
    const char* const target;
};

const LinkAndTarget ianaLinksCanonicalizedDifferentlyByICU[] = {
    { "Africa/Asmera", "Africa/Asmara" }, // Africa/Asmera [backward]
    { "America/Argentina/ComodRivadavia", "America/Argentina/Catamarca" }, // America/Catamarca [backward]
    { "America/Buenos_Aires", "America/Argentina/Buenos_Aires" }, // America/Buenos_Aires [backward]
    { "America/Catamarca", "America/Argentina/Catamarca" }, // America/Catamarca [backward]
    { "America/Coral_Harbour", "America/Atikokan" }, // America/Coral_Harbour [backward]
    { "America/Cordoba", "America/Argentina/Cordoba" }, // America/Cordoba [backward]
    { "America/Fort_Wayne", "America/Indiana/Indianapolis" }, // America/Indianapolis [backward]
    { "America/Godthab", "America/Nuuk" }, // America/Godthab [backward]
    { "America/Indianapolis", "America/Indiana/Indianapolis" }, // America/Indianapolis [backward]
    { "America/Jujuy", "America/Argentina/Jujuy" }, // America/Jujuy [backward]
    { "America/Louisville", "America/Kentucky/Louisville" }, // America/Louisville [backward]
    { "America/Mendoza", "America/Argentina/Mendoza" }, // America/Mendoza [backward]
    { "America/Rosario", "America/Argentina/Cordoba" }, // America/Cordoba [backward]
    { "Antarctica/South_Pole", "Antarctica/McMurdo" }, // Pacific/Auckland [backward]
    { "Asia/Calcutta", "Asia/Kolkata" }, // Asia/Calcutta [backward]
    { "Asia/Katmandu", "Asia/Kathmandu" }, // Asia/Katmandu [backward]
    { "Asia/Rangoon", "Asia/Yangon" }, // Asia/Rangoon [backward]
    { "Asia/Saigon", "Asia/Ho_Chi_Minh" }, // Asia/Saigon [backward]
    { "Atlantic/Faeroe", "Atlantic/Faroe" }, // Atlantic/Faeroe [backward]
    { "Etc/GMT", "UTC" }, // Etc/GMT [etcetera]
    { "Etc/GMT+0", "UTC" }, // Etc/GMT [backward]
    { "Etc/GMT-0", "UTC" }, // Etc/GMT [backward]
    { "Etc/GMT0", "UTC" }, // Etc/GMT [backward]
    { "Etc/Greenwich", "UTC" }, // Etc/GMT [backward]
    { "Etc/UCT", "UTC" }, // Etc/UTC [backward]
    { "Etc/UTC", "UTC" }, // Etc/UTC [etcetera]
    { "Etc/Universal", "UTC" }, // Etc/UTC [backward]
    { "Etc/Zulu", "UTC" }, // Etc/UTC [backward]
    { "Europe/Kiev", "Europe/Kyiv" }, // Europe/Kiev [backward]
    { "Europe/Uzhgorod", "Europe/Kyiv" }, // Europe/Kiev [backward]
    { "Europe/Zaporozhye", "Europe/Kyiv" }, // Europe/Kiev [backward]
    { "GMT", "UTC" }, // Etc/GMT [etcetera]
    { "GMT+0", "UTC" }, // Etc/GMT [backward]
    { "GMT-0", "UTC" }, // Etc/GMT [backward]
    { "GMT0", "UTC" }, // Etc/GMT [backward]
    { "Greenwich", "UTC" }, // Etc/GMT [backward]
    { "Pacific/Enderbury", "Pacific/Kanton" }, // Pacific/Enderbury [backward]
    { "Pacific/Ponape", "Pacific/Pohnpei" }, // Pacific/Ponape [backward]
    { "Pacific/Truk", "Pacific/Chuuk" }, // Pacific/Truk [backward]
    { "Pacific/Yap", "Pacific/Chuuk" }, // Pacific/Truk [backward]
    { "UCT", "UTC" }, // Etc/UTC [backward]
    { "US/East-Indiana", "America/Indiana/Indianapolis" }, // America/Indianapolis [backward]
    { "Universal", "UTC" }, // Etc/UTC [backward]
    { "Zulu", "UTC" }, // Etc/UTC [backward]
};

// Legacy ICU time zones, these are not valid IANA time zone names. We also
// disallow the old and deprecated System V time zones.
// https://ssl.icu-project.org/repos/icu/trunk/icu4c/source/tools/tzcode/icuzones
const char* const legacyICUTimeZones[] = {
    "ACT",
    "AET",
    "AGT",
    "ART",
    "AST",
    "BET",
    "BST",
    "CAT",
    "CNT",
    "CST",
    "CTT",
    "Canada/East-Saskatchewan",
    "EAT",
    "ECT",
    "IET",
    "IST",
    "JST",
    "MIT",
    "NET",
    "NST",
    "PLT",
    "PNT",
    "PRT",
    "PST",
    "SST",
    "US/Pacific-New",
    "VST",
    "Factory",
    "SystemV/AST4",
    "SystemV/AST4ADT",
    "SystemV/CST6",
    "SystemV/CST6CDT",
    "SystemV/EST5",
    "SystemV/EST5EDT",
    "SystemV/HST10",
    "SystemV/MST7",
    "SystemV/MST7MDT",
    "SystemV/PST8",
    "SystemV/PST8PDT",
    "SystemV/YST9",
    "SystemV/YST9YDT",
};

} // namespace timezone
} // namespace js

#endif /* builtin_intl_TimeZoneDataGenerated_h */