var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var c__F_SDL_main_arr = ArrayType(string, 0)

FFI.Library(__dirname + '/SDL2', {
	SDL_main: [ int32, [ int32, c__F_SDL_main_arr, ] ],
	SDL_SetMainReady: [ voit, [ ] ],
}, exports)