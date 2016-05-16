var extend = require('extend-shallow');
var fs = require('fs');

// Retrieve the list of available modules.
var modules = fs.readdirSync(__dirname + '/lib/');

// Merge all the modules together.
var sdl = {};
for (var i in modules) {
	extend(sdl, require('./lib/' + modules[i]));
}

module.exports = sdl;
