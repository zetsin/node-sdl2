var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library('libSDL2', {
	SDL_GetCPUCount: [ int32, [ ] ],
	SDL_GetCPUCacheLineSize: [ int32, [ ] ],
	SDL_HasRDTSC: [ uint32, [ ] ],
	SDL_HasAltiVec: [ uint32, [ ] ],
	SDL_HasMMX: [ uint32, [ ] ],
	SDL_Has3DNow: [ uint32, [ ] ],
	SDL_HasSSE: [ uint32, [ ] ],
	SDL_HasSSE2: [ uint32, [ ] ],
	SDL_HasSSE3: [ uint32, [ ] ],
	SDL_HasSSE41: [ uint32, [ ] ],
	SDL_HasSSE42: [ uint32, [ ] ],
	SDL_HasAVX: [ uint32, [ ] ],
	SDL_HasAVX2: [ uint32, [ ] ],
	SDL_GetSystemRAM: [ int32, [ ] ],
}, exports)