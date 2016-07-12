/* global desc, task, console, require, complete, fail, process, jake */

(function () {
    'use strict';

    var jshint = require("simplebuild-jshint");
    var jshintConfig = require("../config/jshint.conf.js");

    var startTime = Date.now();
    desc("Lint and test");

    task("default", [ "version", "lintNode", "lintClient" ], function () {
        var elapsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\nBuild Ok + (" + elapsedSeconds.toFixed(2) + "s)");
    });
    desc("Linting Node.js code:");
    task("lintNode", function () {
        process.stdout.write("Linting Node.js code: .");
        jshint.checkFiles({
            files: [ "build/**/*.js" ],
            options: {
                node: jshintConfig.nodeOptions
            },
            globals: jshintConfig.nodeGlobals
        }, complete, fail );
    }, {async: true});

    desc("Linting client code:");
    task("lintClient", function () {
        process.stdout.write("Linting browser code: .");
        jshint.checkFiles({
            files: [ "src/**/*.js" ],
            options: {
                node: jshintConfig.clientOptions
            },
            globals: jshintConfig.clientGlobals
        }, complete, fail );
    }, {async: true});

    desc("Start server (for manual testing)");
    task("run", function() {
        console.log("Starting server. Press Ctrl-C to exit.");
        jake.exec("node src/run.js 5000", { interactive: true }, complete);
    }, { async: true });


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
