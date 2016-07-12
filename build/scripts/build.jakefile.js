(function () {
    'use strict';

    var startTime = Date.now();

    task("default", [ "version" ], function () {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\nBuild Ok + (" + elapsedSeconds.toFixed(2) + "s)");
    });

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