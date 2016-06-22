var path = require('path')

function SDL2(name) {
	return require(path.join(__dirname, 'lib', name))
}

module.exports = SDL2