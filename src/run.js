// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/* global desc, task, console, require, complete, fail, process, jake */
(function() {
	"use strict";

	var server = require("./server/server.js");

	var port = process.argv[2];

	server.start(port, "./src", function() {
		console.log("Server started on port " + port);
	});
}());