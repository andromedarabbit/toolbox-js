/*
 * toolbox-js
 * https://github.com/andromedarabbit/toolbox-js
 *
 * Copyright (c) 2013 CHOI, Jaehoon
 * Licensed under the MIT license.
 */
var shell = require('./shell.js');
require('es6-shim');

exports.executeCmdAsync = shell.executeCmdAsync;
exports.executeCmdSync = shell.executeCmdSync;
exports.whoami = shell.whoami;
exports.getHomeDir = shell.getHomeDir;


var assert = require('./assert.js');
exports.assertEquals = assert.assertEquals;
exports.assertTrue= assert.assertTrue;
exports.assertFalse= assert.assertFalse;