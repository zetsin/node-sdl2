var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var longlong = exports.longlong = ref.types.longlong
var SDL_TouchID = exports.SDL_TouchID = longlong
var SDL_FingerID = exports.SDL_FingerID = longlong
var float = exports.float = ref.types.float
var SDL_Finger = exports.SDL_Finger = Struct({
	id: SDL_FingerID,
	x: float,
	y: float,
	pressure: float,
})
var int32 = exports.int32 = ref.types.int32
var SDL_Finger_ptr = exports.SDL_Finger_ptr = ref.refType(SDL_Finger)

FFI.Library(__dirname + '/libSDL2', {
	SDL_GetNumTouchDevices: [ int32, [ ] ],
	SDL_GetTouchDevice: [ SDL_TouchID, [ int32, ] ],
	SDL_GetNumTouchFingers: [ int32, [ SDL_TouchID, ] ],
	SDL_GetTouchFinger: [ SDL_Finger_ptr, [ SDL_TouchID, int32, ] ],
}, exports)