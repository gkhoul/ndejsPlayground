/*global describe, it, require */

(function () {
    'use strict';

    // var assert = require("chai").assert;

    var addition = require("./addition.js");

    describe("Addition", function () {

        it("adds numbers", function () {
            assertEqual(addition.add(4, 5), 9);
        });

    });

    function assertEqual(actual, expected) {
        if (actual != expected) throw new Error("Expected " + expected + ", but got " + actual);
    }


}());