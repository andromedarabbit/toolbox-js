#!/usr/bin/env node
var shell = require('shelljs');

function executeCmdAsync(cmd, callback) {
	console.log(cmd);
	
	var executable = shell.exec( cmd, {async:true, silent:true}, function(code, output) {
  
		if(code != 0) {
			console.error('error occurs with an exit code ' + code);
			console.log();
			
			console.error('Program output:');
			console.error(output);
			
			shell.exit(code);
		}
		
		if(callback) {
			callback();
		}
	});
}



function executeCmdSync(cmd) {
	console.log(cmd);

	var executable = shell.exec( cmd, {async:false, silent:true} );
	var code = executable.code;
	var output = executable.output;
	
	console.log('Exit code:', code);
	console.log('Program output:', output);
  
	if(code != 0) {
		console.error('error occurs: exit code ' + code);
		shell.exit(code);
	}
	
	return output;
}


exports.executeCmdAsync = executeCmdAsync;
exports.executeCmdSync = executeCmdSync;
