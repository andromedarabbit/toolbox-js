#!/usr/bin/env node
var shell = require('shelljs');
var fs = require('fs');
var path = require('path');

exports.copyDirWithoutFilesSyncRecursive = function(srcDir, dstDir) {
	if(!shell.test('-e', srcDir)) {
		throw new Error("srcDir Not Found!");
	}
	
	if(!shell.test('-e', dstDir)) {
		shell.mkdir('-p', dstDir);
	}
	
	var folders = shell.find(srcDir).filter(function(file) { 
		if( !fs.statSync(file).isDirectory() ) {
			return false;
		}
	
		var fileRelativePath = path.relative(srcDir, file);
		var targetDir = path.join(dstDir, fileRelativePath);
		
	
		shell.mkdir('-p', targetDir);
		return true;
	});
};


exports.emtpyDirSyncRecursive = function(dir) {
	if(!shell.test('-e', dir)) {
		throw new Error("dir Not Found!");
	}
	
	var itemsDeleted = shell.ls(dir).filter(function(file) {
		var filePath = path.join(dir, file);

		if( fs.statSync(filePath).isDirectory() ) {
			shell.rm('-rf', filePath);
			return true;
		}
		
		shell.rm('-f', filePath);
		return true;
	});
};


function copyOrMoveFilesSyncRecursive(srcDir, dstDir, action) {
	if(!shell.test('-e', srcDir)) {
		throw new Error("srcDir Not Found!");
	}
	
	if(!shell.test('-e', dstDir)) {
		shell.mkdir('-p', dstDir);
	}
	
	var folders = shell.find(srcDir).filter(function(file) { 
		if( fs.statSync(file).isDirectory() ) {
			return false;
		}
	
		var fileRelativePath = path.relative(srcDir, file);
		var targetPath = path.join(dstDir, fileRelativePath);
		var targetDir = path.dirname(targetPath);
	
		if(!shell.test('-e', targetDir)) {
			shell.mkdir('-p', targetDir);
		}
			
		action('-f', file, targetPath);
		return true;
	});	
};


exports.copyFilesSyncRecursive = function(srcDir, dstDir) {
	return copyOrMoveFilesSyncRecursive(srcDir, dstDir, shell.cp);
};

exports.moveFilesSyncRecursive = function(srcDir, dstDir) {
	return copyOrMoveFilesSyncRecursive(srcDir, dstDir, shell.mv);
};
