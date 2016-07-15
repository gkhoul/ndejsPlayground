/*global describe, it, require */

(function () {
    'use strict';

    // var assert = require("chai").assert;

    describe("Addition", function () {

        it("adds numbers", function () {
            assertEqual(add(4, 5), 9);
        });

        it("uses IEEE 754 floating point", function () {
            assertEqual(add(0.1, 0.2), 0.30000000000000004);
        });

    });

    function assertEqual(actual, expected) {
        if (actual != expected) throw new Error("Expected " + expected + ", but got" + actual);
    }

    function add(a, b) {
        return a + b;
    }

}());