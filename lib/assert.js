#!/usr/bin/env node
var shell = require('shelljs');
var colors = require('./console.js');



exports.assertEquals = function(expected, actual, message) {
	if(expected == actual) {
		return;
	}
	
	if(message) {
		console.error(message.error);
	}
	
	shell.exit(1);
};

exports.assertTrue = function(condition, message) {
	if(condition) {
		return;
	}
	
	if(message) {
		console.error(message.error);
	}
	
	shell.exit(1);
};

exports.assertFalse = function(condition, message) {
	if(!condition) {
		return;
	}
	
	if(message) {
		console.error(message.error);
	}
	
	shell.exit(1);
};

