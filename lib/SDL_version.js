var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var Union = require('ref-union');
var SDL_video = require('./SDL_video.js');

// basic type
var void_type = ref.types.void;
var int = ref.types.int;
var uint8 = ref.types.uint8;
var string = ref.types.CString;

// global define
var SDL_Version = Struct({
	major: uint8,
	minor: uint8,
	patch: uint8
});
var SDL_MAJOR_VERSION = 2;
var SDL_MINOR_VERSION = 0;
var SDL_PATCHLEVEL = 3;
var SDL_VERSION = function(x) {
	x.deref().major = SDL_MAJOR_VERSION;
	x.deref().minor = SDL_MINOR_VERSION;
	x.deref().patch = SDL_PATCHLEVEL;
};
var SDL_VERSIONNUM = function(X, Y, Z) {
	return ((X)*1000 + (Y)*100 + (Z));
};
var SDL_COMPILEDVERSION = SDL_VERSIONNUM(SDL_MAJOR_VERSION, SDL_MINOR_VERSION, SDL_PATCHLEVEL);
var SDL_VERSION_ATLEAST = function(X, Y, Z) {
	return (SDL_COMPILEDVERSION >= SDL_VERSIONNUM(X, Y, Z))
};

// help pointer
var SDL_Version_ptr = ref.refType(SDL_Version);

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_version = ffi.Library(libraryFile, {
	SDL_GetVersion: [ void_type, [ SDL_Version_ptr ] ],
	SDL_GetRevision: [ string, [] ],
	SDL_GetRevisionNumber: [ int, [] ]
});

// export global
SDL_version.SDL_Version = SDL_Version;
SDL_version.SDL_MAJOR_VERSION = SDL_MAJOR_VERSION;
SDL_version.SDL_MINOR_VERSION = SDL_MINOR_VERSION;
SDL_version.SDL_PATCHLEVEL = SDL_PATCHLEVEL;
SDL_version.SDL_VERSION = SDL_VERSION;
SDL_version.SDL_VERSIONNUM = SDL_VERSIONNUM;
SDL_version.SDL_COMPILEDVERSION = SDL_COMPILEDVERSION;
SDL_version.SDL_VERSION_ATLEAST = SDL_VERSION_ATLEAST;

module.exports = SDL_version;