/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

use std::{env, path::Path};

fn main() {
    windows_manifest();
    crash_ping_annotations();
    set_mock_cfg();
    set_glean_metrics_file();
}

fn windows_manifest() {
    use embed_manifest::{embed_manifest, manifest, new_manifest};

    if std::env::var_os("CARGO_CFG_WINDOWS").is_none() {
        return;
    }

    // See https://docs.rs/embed-manifest/1.4.0/embed_manifest/fn.new_manifest.html for what the
    // default manifest includes. The defaults include almost all of the settings used in the old
    // crash reporter.
    let manifest = new_manifest("CrashReporter")
        // Use legacy active code page because GDI doesn't support per-process UTF8 (and older
        // win10 may not support this setting anyway).
        .active_code_page(manifest::ActiveCodePage::Legacy)
        // We support WM_DPICHANGED for scaling, but need to set our DPI awareness to receive the
        // messages.
        .dpi_awareness(manifest::DpiAwareness::PerMonitorV2);

    embed_manifest(manifest).expect("unable to embed windows manifest file");

    println!("cargo:rerun-if-changed=build.rs");
}

/// Generate crash ping annotation information from the yaml definition file.
fn crash_ping_annotations() {
    use std::fs::File;
    use std::io::{BufWriter, Write};
    use yaml_rust::{Yaml, YamlLoader};

    let crash_annotations = Path::new("../../CrashAnnotations.yaml")
        .canonicalize()
        .unwrap();
    println!("cargo:rerun-if-changed={}", crash_annotations.display());

    let crash_ping_file = Path::new(&env::var("OUT_DIR").unwrap()).join("ping_annotations.rs");

    let yaml = std::fs::read_to_string(crash_annotations).unwrap();
    let Yaml::Hash(entries) = YamlLoader::load_from_str(&yaml)
        .unwrap()
        .into_iter()
        .next()
        .unwrap()
    else {
        panic!("unexpected crash annotations root type");
    };

    let ping_annotations = entries.into_iter().filter_map(|(k, v)| {
        v["ping"]
            .as_bool()
            .unwrap_or(false)
            .then(|| k.into_string().unwrap())
    });

    let mut phf_set = phf_codegen::Set::new();
    for annotation in ping_annotations {
        phf_set.entry(annotation);
    }

    let mut file = BufWriter::new(File::create(&crash_ping_file).unwrap());
    writeln!(
        &mut file,
        "static PING_ANNOTATIONS: phf::Set<&'static str> = {};",
        phf_set.build()
    )
    .unwrap();
}

/// Set the mock configuration option when tests are enabled or when the mock feature is enabled.
fn set_mock_cfg() {
    // Very inconveniently, there's no way to detect `cfg(test)` from build scripts. See
    // https://github.com/rust-lang/cargo/issues/4789. This seems like an arbitrary and pointless
    // limitation, and only complicates the evaluation of mock behavior. Because of this, we have a
    // `mock` feature which is activated by `toolkit/library/rust/moz.build`.
    println!("cargo:rustc-check-cfg=cfg(mock)");
    if env::var_os("CARGO_FEATURE_MOCK").is_some() || mozbuild::config::MOZ_CRASHREPORTER_MOCK {
        println!("cargo:rustc-cfg=mock");
    }
}

/// Set the GLEAN_METRICS_FILE environment variable to the location of the generated Glean metrics.
///
/// We do this here to avoid a hardcoded path in the source (just in case this crate's src dir
/// moves, not that it's likely).
fn set_glean_metrics_file() {
    let full_path = Path::new(env!("CARGO_MANIFEST_DIR"));
    let relative_path = full_path
        .strip_prefix(mozbuild::TOPSRCDIR)
        .expect("CARGO_MANIFEST_DIR not a child of TOPSRCDIR");
    let glean_metrics_path = {
        let mut p = mozbuild::TOPOBJDIR.join(relative_path);
        // Generated by generate_glean.py
        p.push("glean_metrics.rs");
        p
    };
    // We don't really need anything like `rerun-if-env-changed=CARGO_MANIFEST_DIR` because that
    // will inevitably mean the entire crate has moved or the srcdir has moved, which would result
    // in a rebuild anyway.
    println!(
        "cargo:rustc-env=GLEAN_METRICS_FILE={}",
        glean_metrics_path.display()
    );
}