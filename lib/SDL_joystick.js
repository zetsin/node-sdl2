var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')

var SDL_JoystickPowerLevel = exports.SDL_JoystickPowerLevel = {
	SDL_JOYSTICK_POWER_UNKNOWN: -1,
	SDL_JOYSTICK_POWER_EMPTY: 0,
	SDL_JOYSTICK_POWER_LOW: 1,
	SDL_JOYSTICK_POWER_MEDIUM: 2,
	SDL_JOYSTICK_POWER_FULL: 3,
	SDL_JOYSTICK_POWER_WIRED: 4,
	SDL_JOYSTICK_POWER_MAX: 5,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var _SDL_Joystick = exports._SDL_Joystick = Struct({
})
var SDL_Joystick = exports.SDL_Joystick = _SDL_Joystick
var Uint8 = SDL_stdinc_lib.Uint8
var c__SA_SDL_JoystickGUID_FI_data_arr = ArrayType(Uint8, 16)
var c__SA_SDL_JoystickGUID = exports.c__SA_SDL_JoystickGUID = Struct({
	data: c__SA_SDL_JoystickGUID_FI_data_arr,
})
var SDL_JoystickGUID = exports.SDL_JoystickGUID = c__SA_SDL_JoystickGUID
var int32 = exports.int32 = ref.types.int32
var SDL_JoystickID = exports.SDL_JoystickID = int32
var string = exports.string = ref.types.CString
var SDL_Joystick_ptr = exports.SDL_Joystick_ptr = ref.refType(SDL_Joystick)
var uint32 = exports.uint32 = ref.types.uint32
var Sint16 = SDL_stdinc_lib.Sint16
var int32_ptr = exports.int32_ptr = ref.refType(int32)

FFI.Library(__dirname + '/SDL2', {
	SDL_NumJoysticks: [ int32, [ ] ],
	SDL_JoystickNameForIndex: [ string, [ int32, ] ],
	SDL_JoystickOpen: [ SDL_Joystick_ptr, [ int32, ] ],
	SDL_JoystickFromInstanceID: [ SDL_Joystick_ptr, [ SDL_JoystickID, ] ],
	SDL_JoystickName: [ string, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickGetDeviceGUID: [ SDL_JoystickGUID, [ int32, ] ],
	SDL_JoystickGetGUID: [ SDL_JoystickGUID, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickGetGUIDString: [ voit, [ SDL_JoystickGUID, string, int32, ] ],
	SDL_JoystickGetGUIDFromString: [ SDL_JoystickGUID, [ string, ] ],
	SDL_JoystickGetAttached: [ uint32, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickInstanceID: [ SDL_JoystickID, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickNumAxes: [ int32, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickNumBalls: [ int32, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickNumHats: [ int32, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickNumButtons: [ int32, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickUpdate: [ voit, [ ] ],
	SDL_JoystickEventState: [ int32, [ int32, ] ],
	SDL_JoystickGetAxis: [ Sint16, [ SDL_Joystick_ptr, int32, ] ],
	SDL_JoystickGetHat: [ Uint8, [ SDL_Joystick_ptr, int32, ] ],
	SDL_JoystickGetBall: [ int32, [ SDL_Joystick_ptr, int32, int32_ptr, int32_ptr, ] ],
	SDL_JoystickGetButton: [ Uint8, [ SDL_Joystick_ptr, int32, ] ],
	SDL_JoystickClose: [ voit, [ SDL_Joystick_ptr, ] ],
	SDL_JoystickCurrentPowerLevel: [ int32, [ SDL_Joystick_ptr, ] ],
}, exports)