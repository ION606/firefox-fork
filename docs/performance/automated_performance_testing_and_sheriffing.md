# Automated performance testing and sheriffing

We have several test harnesses that test Firefox for various performance
characteristics (page load time, startup time, etc.). We also generate
some metrics as part of the build process (like installer size) that are
interesting to track over time. Currently we aggregate this information
in the [Perfherder web
application](https://wiki.mozilla.org/Auto-tools/Projects/Perfherder)
where performance sheriffs watch for significant regressions, filing
bugs as appropriate.

Current list of automated systems we are tracking (at least to some
degree):

-   [Talos](https://wiki.mozilla.org/TestEngineering/Performance/Talos): The main
    performance system, run on virtually every check-in to an
    integration branch
-   [build_metrics](/setup/configuring_build_options.rst):
    A grab bag of performance metrics generated by the build system
-   [AreWeFastYet](https://arewefastyet.com/): A generic JavaScript and
    Web benchmarking system
    tool
-   [Platform microbenchmarks](platform_microbenchmarks/platform_microbenchmarks.md)
-   [Build Metrics](build_metrics/build_metrics.md)