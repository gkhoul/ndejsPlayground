/* global desc, task, console, require, complete, fail, process */

(function () {
    'use strict';

    var startTime = Date.now();

    desc("Lint and test");
    task("default", [ "version", "lint" ], function () {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\nBuild Ok + (" + elapsedSeconds.toFixed(2) + "s)");
    });

    desc("Linting");
    task("lint", function () {
        var jshint = require("simplebuild-jshint");
        var jshintConfig = require("../config/jshint.conf.js");
        process.stdout.write("Linting: .");
        jshint.checkFiles({
            files: [ "build/**/*.js" ],
            options: {
                node: jshintConfig.clientOptions,
            },
            globals: jshintConfig.nodeGlobals
        }, complete, fail );
    }, {async: true});

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