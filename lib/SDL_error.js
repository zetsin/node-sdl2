var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var string = ref.types.CString;
var SDL_errorcode_enum = int;

// basic pointer
var void_ptr = ref.refType(void_type);
var int_ptr = ref.refType(int);

// global define
var SDL_errorcode = {
	SDL_ENOMEM: 0,
	SDL_EFREAD: 1,
	SDL_EFWRITE: 2,
	SDL_EFSEEK: 3,
	SDL_UNSUPPORTED: 4,
	SDL_LASTERROR: 5 
};

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_error = ffi.Library(libraryFile, {
	SDL_SetError: [ int, [ string ] ],
	SDL_GetError: [ string, [] ],
	SDL_ClearError: [ void_type, [] ],
	SDL_Error: [ int, [ SDL_errorcode_enum ] ],
});

// inline function
SDL_error.SDL_OutOfMemory = function() {
	SDL_error.SDL_Error(SDL_errorcode.SDL_ENOMEM);
};
SDL_error.SDL_Unsupported = function() {
	SDL_error.SDL_Error(SDL_errorcode.SDL_UNSUPPORTED);
};
SDL_error.SDL_InvalidParamError = function(param) {
	SDL_error.SDL_Error(SDL_errorcode.SDL_SetError('Parameter "' + param + '" is invalid'));
};

// export global
SDL_error.SDL_errorcode = SDL_errorcode;

module.exports = SDL_error;