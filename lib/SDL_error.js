var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_errorcode = exports.SDL_errorcode = {
	SDL_ENOMEM: 0,
	SDL_EFREAD: 1,
	SDL_EFWRITE: 2,
	SDL_EFSEEK: 3,
	SDL_UNSUPPORTED: 4,
	SDL_LASTERROR: 5,
}

var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library(__dirname + '/libSDL2', {
	SDL_SetError: [ int32, [ string, ] ],
	SDL_GetError: [ string, [ ] ],
	SDL_ClearError: [ voit, [ ] ],
	SDL_Error: [ int32, [ uint32, ] ],
}, exports)