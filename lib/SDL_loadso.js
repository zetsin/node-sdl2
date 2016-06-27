var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var string = exports.string = ref.types.CString

FFI.Library(__dirname + '/libSDL2', {
	SDL_LoadObject: [ voit_ptr, [ string, ] ],
	SDL_LoadFunction: [ voit_ptr, [ voit_ptr, string, ] ],
	SDL_UnloadObject: [ voit, [ voit_ptr, ] ],
}, exports)