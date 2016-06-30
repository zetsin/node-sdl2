var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_HintPriority = exports.SDL_HintPriority = {
	SDL_HINT_DEFAULT: 0,
	SDL_HINT_NORMAL: 1,
	SDL_HINT_OVERRIDE: 2,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var string = exports.string = ref.types.CString
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_HintCallback = exports.SDL_HintCallback = FFI.Function( voit, [ voit_ptr, string, string, string, ] )

FFI.Library('libSDL2', {
	SDL_SetHintWithPriority: [ uint32, [ string, string, uint32, ] ],
	SDL_SetHint: [ uint32, [ string, string, ] ],
	SDL_GetHint: [ string, [ string, ] ],
	SDL_AddHintCallback: [ voit, [ string, SDL_HintCallback, voit_ptr, ] ],
	SDL_DelHintCallback: [ voit, [ string, SDL_HintCallback, voit_ptr, ] ],
	SDL_ClearHints: [ voit, [ ] ],
}, exports)