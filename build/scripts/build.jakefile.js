(function () {
    'use strict';

    var startTime = Date.now();

    desc("Lint and test")
    task("default", [ "version", "lint" ], function () {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\nBuild Ok + (" + elapsedSeconds.toFixed(2) + "s)");
    });

    desc("Linting");
    task("lint", function () {
        console.log("Linting: .");
    });

    desc("Check version");
    task("version", function () {
        console.log("Checking node version: .");
        var version = require("./../util/version_checker.js");
        version.check({
            name: "Node",
            expected: require("./../../package.json").engines.node,
            actual: process.version,
            strict: true
        }, complete, fail);
    }, {async: true});

}());