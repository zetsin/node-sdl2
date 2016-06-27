var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_touch_lib = require('./SDL_touch')
var SDL_rwops_lib = require('./SDL_rwops')


var voit = exports.voit = ref.types.void
var longlong = exports.longlong = ref.types.longlong
var SDL_GestureID = exports.SDL_GestureID = longlong
var int32 = exports.int32 = ref.types.int32
var SDL_TouchID = SDL_touch_lib.SDL_TouchID
var SDL_RWops = SDL_rwops_lib.SDL_RWops
var SDL_RWops_ptr = exports.SDL_RWops_ptr = ref.refType(SDL_RWops)

FFI.Library(__dirname + '/libSDL2', {
	SDL_RecordGesture: [ int32, [ SDL_TouchID, ] ],
	SDL_SaveAllDollarTemplates: [ int32, [ SDL_RWops_ptr, ] ],
	SDL_SaveDollarTemplate: [ int32, [ SDL_GestureID, SDL_RWops_ptr, ] ],
	SDL_LoadDollarTemplates: [ int32, [ SDL_TouchID, SDL_RWops_ptr, ] ],
}, exports)