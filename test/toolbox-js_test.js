var toolbox_js = require('../lib/toolbox-js.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['executeCmdAsync'] = {
  'no args': function(test) {
	test.expect(1);
	var output = toolbox_js.executeCmdSync('ls');
    test.ok(output.length > 0);
    test.done();
  }
};


exports.console = function(test) {
	toolbox_js.assertTrue(true, "A message should not be printed in red.");
	test.done();
}