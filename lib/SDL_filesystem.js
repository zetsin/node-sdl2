var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var string = exports.string = ref.types.CString

FFI.Library(__dirname + '/libSDL2', {
	SDL_GetBasePath: [ string, [ ] ],
	SDL_GetPrefPath: [ string, [ string, string, ] ],
}, exports)