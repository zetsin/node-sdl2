var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_BlendMode = exports.SDL_BlendMode = {
	SDL_BLENDMODE_NONE: 0,
	SDL_BLENDMODE_BLEND: 1,
	SDL_BLENDMODE_ADD: 2,
	SDL_BLENDMODE_MOD: 4,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library('libSDL2', {
}, exports)