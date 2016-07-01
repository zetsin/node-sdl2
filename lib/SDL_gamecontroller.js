var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_rwops_lib = require('./SDL_rwops')
var SDL_joystick_lib = require('./SDL_joystick')
var SDL_stdinc_lib = require('./SDL_stdinc')

var SDL_GameControllerBindType = exports.SDL_GameControllerBindType = {
	SDL_CONTROLLER_BINDTYPE_NONE: 0,
	SDL_CONTROLLER_BINDTYPE_BUTTON: 1,
	SDL_CONTROLLER_BINDTYPE_AXIS: 2,
	SDL_CONTROLLER_BINDTYPE_HAT: 3,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}
var SDL_GameControllerAxis = exports.SDL_GameControllerAxis = {
	SDL_CONTROLLER_AXIS_INVALID: -1,
	SDL_CONTROLLER_AXIS_LEFTX: 0,
	SDL_CONTROLLER_AXIS_LEFTY: 1,
	SDL_CONTROLLER_AXIS_RIGHTX: 2,
	SDL_CONTROLLER_AXIS_RIGHTY: 3,
	SDL_CONTROLLER_AXIS_TRIGGERLEFT: 4,
	SDL_CONTROLLER_AXIS_TRIGGERRIGHT: 5,
	SDL_CONTROLLER_AXIS_MAX: 6,
}
var SDL_GameControllerButton = exports.SDL_GameControllerButton = {
	SDL_CONTROLLER_BUTTON_INVALID: -1,
	SDL_CONTROLLER_BUTTON_A: 0,
	SDL_CONTROLLER_BUTTON_B: 1,
	SDL_CONTROLLER_BUTTON_X: 2,
	SDL_CONTROLLER_BUTTON_Y: 3,
	SDL_CONTROLLER_BUTTON_BACK: 4,
	SDL_CONTROLLER_BUTTON_GUIDE: 5,
	SDL_CONTROLLER_BUTTON_START: 6,
	SDL_CONTROLLER_BUTTON_LEFTSTICK: 7,
	SDL_CONTROLLER_BUTTON_RIGHTSTICK: 8,
	SDL_CONTROLLER_BUTTON_LEFTSHOULDER: 9,
	SDL_CONTROLLER_BUTTON_RIGHTSHOULDER: 10,
	SDL_CONTROLLER_BUTTON_DPAD_UP: 11,
	SDL_CONTROLLER_BUTTON_DPAD_DOWN: 12,
	SDL_CONTROLLER_BUTTON_DPAD_LEFT: 13,
	SDL_CONTROLLER_BUTTON_DPAD_RIGHT: 14,
	SDL_CONTROLLER_BUTTON_MAX: 15,
}

var voit = exports.voit = ref.types.void
var _SDL_GameController = exports._SDL_GameController = Struct({
})
var SDL_GameController = exports.SDL_GameController = _SDL_GameController
var uint32 = exports.uint32 = ref.types.uint32
var int32 = exports.int32 = ref.types.int32
var c__S_SDL_GameControllerButtonBind_U_SDL_gamecontroller_h_2306_S_SDL_gamecontroller_h_2364 = exports.c__S_SDL_GameControllerButtonBind_U_SDL_gamecontroller_h_2306_S_SDL_gamecontroller_h_2364 = Struct({
	hat: int32,
	hat_mask: int32,
})
var c__S_SDL_GameControllerButtonBind_U_SDL_gamecontroller_h_2306 = exports.c__S_SDL_GameControllerButtonBind_U_SDL_gamecontroller_h_2306 = Union({
	button: int32,
	axis: int32,
	hat: c__S_SDL_GameControllerButtonBind_U_SDL_gamecontroller_h_2306_S_SDL_gamecontroller_h_2364,
})
var SDL_GameControllerButtonBind = exports.SDL_GameControllerButtonBind = Struct({
	bindType: uint32,
	value: c__S_SDL_GameControllerButtonBind_U_SDL_gamecontroller_h_2306,
})
var SDL_RWops = SDL_rwops_lib.SDL_RWops
var SDL_RWops_ptr = exports.SDL_RWops_ptr = ref.refType(SDL_RWops)
var string = exports.string = ref.types.CString
var SDL_JoystickGUID = SDL_joystick_lib.SDL_JoystickGUID
var SDL_GameController_ptr = exports.SDL_GameController_ptr = ref.refType(SDL_GameController)
var SDL_JoystickID = SDL_joystick_lib.SDL_JoystickID
var SDL_Joystick = SDL_joystick_lib.SDL_Joystick
var SDL_Joystick_ptr = exports.SDL_Joystick_ptr = ref.refType(SDL_Joystick)
var Sint16 = SDL_stdinc_lib.Sint16
var Uint8 = SDL_stdinc_lib.Uint8

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_GameControllerAddMappingsFromRW: [ int32, [ SDL_RWops_ptr, int32, ] ],
	SDL_GameControllerAddMapping: [ int32, [ string, ] ],
	SDL_GameControllerMappingForGUID: [ string, [ SDL_JoystickGUID, ] ],
	SDL_GameControllerMapping: [ string, [ SDL_GameController_ptr, ] ],
	SDL_IsGameController: [ uint32, [ int32, ] ],
	SDL_GameControllerNameForIndex: [ string, [ int32, ] ],
	SDL_GameControllerOpen: [ SDL_GameController_ptr, [ int32, ] ],
	SDL_GameControllerFromInstanceID: [ SDL_GameController_ptr, [ SDL_JoystickID, ] ],
	SDL_GameControllerName: [ string, [ SDL_GameController_ptr, ] ],
	SDL_GameControllerGetAttached: [ uint32, [ SDL_GameController_ptr, ] ],
	SDL_GameControllerGetJoystick: [ SDL_Joystick_ptr, [ SDL_GameController_ptr, ] ],
	SDL_GameControllerEventState: [ int32, [ int32, ] ],
	SDL_GameControllerUpdate: [ voit, [ ] ],
	SDL_GameControllerGetAxisFromString: [ int32, [ string, ] ],
	SDL_GameControllerGetStringForAxis: [ string, [ int32, ] ],
	SDL_GameControllerGetBindForAxis: [ SDL_GameControllerButtonBind, [ SDL_GameController_ptr, int32, ] ],
	SDL_GameControllerGetAxis: [ Sint16, [ SDL_GameController_ptr, int32, ] ],
	SDL_GameControllerGetButtonFromString: [ int32, [ string, ] ],
	SDL_GameControllerGetStringForButton: [ string, [ int32, ] ],
	SDL_GameControllerGetBindForButton: [ SDL_GameControllerButtonBind, [ SDL_GameController_ptr, int32, ] ],
	SDL_GameControllerGetButton: [ Uint8, [ SDL_GameController_ptr, int32, ] ],
	SDL_GameControllerClose: [ voit, [ SDL_GameController_ptr, ] ],
}, exports)