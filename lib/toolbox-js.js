/*
 * toolbox-js
 * https://github.com/andromedarabbit/toolbox-js
 *
 * Copyright (c) 2013 CHOI, Jaehoon
 * Licensed under the MIT license.
 */

require('es6-shim');

var shell = require('./shell.js');
exports.executeCmdAsync = shell.executeCmdAsync;
exports.executeCmdSync = shell.executeCmdSync;
exports.whoami = shell.whoami;
exports.getHomeDir = shell.getHomeDir;


var assert = require('./assert.js');
exports.assertEquals = assert.assertEquals;
exports.assertTrue= assert.assertTrue;
exports.assertFalse= assert.assertFalse;

var filesystem = require('./filesystem.js');
exports.copyDirWithoutFilesSyncRecursive = filesystem.copyDirWithoutFilesSyncRecursive;
exports.emtpyDirSyncRecursive = filesystem.emtpyDirSyncRecursive;
exports.copyOrMoveFilesSyncRecursive = filesystem.copyOrMoveFilesSyncRecursive;
exports.copyFilesSyncRecursive = filesystem.copyFilesSyncRecursive;
exports.moveFilesSyncRecursive = filesystem.moveFilesSyncRecursive;