var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')

var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var Uint32 = SDL_stdinc_lib.Uint32
var Uint64 = SDL_stdinc_lib.Uint64
var uint32 = exports.uint32 = ref.types.uint32
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_TimerCallback = FFI.Function( uint32, [ uint32, voit_ptr, ] )
var int32 = exports.int32 = ref.types.int32
var SDL_TimerID = exports.SDL_TimerID = int32

FFI.Library(__dirname + '/SDL2', {
	SDL_GetTicks: [ Uint32, [ ] ],
	SDL_GetPerformanceCounter: [ Uint64, [ ] ],
	SDL_GetPerformanceFrequency: [ Uint64, [ ] ],
	SDL_Delay: [ voit, [ Uint32, ] ],
	SDL_AddTimer: [ SDL_TimerID, [ Uint32, SDL_TimerCallback, voit_ptr, ] ],
	SDL_RemoveTimer: [ uint32, [ SDL_TimerID, ] ],
}, exports)