var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')


var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var Uint32 = SDL_stdinc_lib.Uint32

FFI.Library('libSDL2', {
	SDL_Init: [ int32, [ Uint32, ] ],
	SDL_InitSubSystem: [ int32, [ Uint32, ] ],
	SDL_QuitSubSystem: [ voit, [ Uint32, ] ],
	SDL_WasInit: [ Uint32, [ Uint32, ] ],
	SDL_Quit: [ voit, [ ] ],
}, exports)