var path = require('path');
module.exports = function (name) {
	return require(path.join(__dirname, 'lib', name));
}