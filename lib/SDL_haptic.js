var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_joystick_lib = require('./SDL_joystick')


var voit = exports.voit = ref.types.void
var _SDL_Haptic = exports._SDL_Haptic = Struct({
})
var SDL_Haptic = exports.SDL_Haptic = _SDL_Haptic
var Uint8 = SDL_stdinc_lib.Uint8
var Sint32 = SDL_stdinc_lib.Sint32
var c__S_SDL_HapticDirection_FI_dir_arr = ArrayType(Sint32, 3)
var SDL_HapticDirection = exports.SDL_HapticDirection = Struct({
	type: Uint8,
	dir: c__S_SDL_HapticDirection_FI_dir_arr,
})
var Uint16 = SDL_stdinc_lib.Uint16
var Uint32 = SDL_stdinc_lib.Uint32
var Sint16 = SDL_stdinc_lib.Sint16
var SDL_HapticConstant = exports.SDL_HapticConstant = Struct({
	type: Uint16,
	direction: SDL_HapticDirection,
	length: Uint32,
	delay: Uint16,
	button: Uint16,
	interval: Uint16,
	level: Sint16,
	attack_length: Uint16,
	attack_level: Uint16,
	fade_length: Uint16,
	fade_level: Uint16,
})
var SDL_HapticPeriodic = exports.SDL_HapticPeriodic = Struct({
	type: Uint16,
	direction: SDL_HapticDirection,
	length: Uint32,
	delay: Uint16,
	button: Uint16,
	interval: Uint16,
	period: Uint16,
	magnitude: Sint16,
	offset: Sint16,
	phase: Uint16,
	attack_length: Uint16,
	attack_level: Uint16,
	fade_length: Uint16,
	fade_level: Uint16,
})
var c__S_SDL_HapticCondition_FI_right_sat_arr = ArrayType(Uint16, 3)
var c__S_SDL_HapticCondition_FI_left_sat_arr = ArrayType(Uint16, 3)
var c__S_SDL_HapticCondition_FI_right_coeff_arr = ArrayType(Sint16, 3)
var c__S_SDL_HapticCondition_FI_left_coeff_arr = ArrayType(Sint16, 3)
var c__S_SDL_HapticCondition_FI_deadband_arr = ArrayType(Uint16, 3)
var c__S_SDL_HapticCondition_FI_center_arr = ArrayType(Sint16, 3)
var SDL_HapticCondition = exports.SDL_HapticCondition = Struct({
	type: Uint16,
	direction: SDL_HapticDirection,
	length: Uint32,
	delay: Uint16,
	button: Uint16,
	interval: Uint16,
	right_sat: c__S_SDL_HapticCondition_FI_right_sat_arr,
	left_sat: c__S_SDL_HapticCondition_FI_left_sat_arr,
	right_coeff: c__S_SDL_HapticCondition_FI_right_coeff_arr,
	left_coeff: c__S_SDL_HapticCondition_FI_left_coeff_arr,
	deadband: c__S_SDL_HapticCondition_FI_deadband_arr,
	center: c__S_SDL_HapticCondition_FI_center_arr,
})
var SDL_HapticRamp = exports.SDL_HapticRamp = Struct({
	type: Uint16,
	direction: SDL_HapticDirection,
	length: Uint32,
	delay: Uint16,
	button: Uint16,
	interval: Uint16,
	start: Sint16,
	end: Sint16,
	attack_length: Uint16,
	attack_level: Uint16,
	fade_length: Uint16,
	fade_level: Uint16,
})
var SDL_HapticLeftRight = exports.SDL_HapticLeftRight = Struct({
	type: Uint16,
	length: Uint32,
	large_magnitude: Uint16,
	small_magnitude: Uint16,
})
var Uint16_ptr = exports.Uint16_ptr = ref.refType(Uint16)
var SDL_HapticCustom = exports.SDL_HapticCustom = Struct({
	type: Uint16,
	direction: SDL_HapticDirection,
	length: Uint32,
	delay: Uint16,
	button: Uint16,
	interval: Uint16,
	channels: Uint8,
	period: Uint16,
	samples: Uint16,
	data: Uint16_ptr,
	attack_length: Uint16,
	attack_level: Uint16,
	fade_length: Uint16,
	fade_level: Uint16,
})
var SDL_HapticEffect = exports.SDL_HapticEffect = Union({
	type: Uint16,
	constant: SDL_HapticConstant,
	periodic: SDL_HapticPeriodic,
	condition: SDL_HapticCondition,
	ramp: SDL_HapticRamp,
	leftright: SDL_HapticLeftRight,
	custom: SDL_HapticCustom,
})
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var SDL_Haptic_ptr = exports.SDL_Haptic_ptr = ref.refType(SDL_Haptic)
var SDL_Joystick = SDL_joystick_lib.SDL_Joystick
var SDL_Joystick_ptr = exports.SDL_Joystick_ptr = ref.refType(SDL_Joystick)
var uint32 = exports.uint32 = ref.types.uint32
var SDL_HapticEffect_ptr = exports.SDL_HapticEffect_ptr = ref.refType(SDL_HapticEffect)
var float = exports.float = ref.types.float

FFI.Library('libSDL2', {
	SDL_NumHaptics: [ int32, [ ] ],
	SDL_HapticName: [ string, [ int32, ] ],
	SDL_HapticOpen: [ SDL_Haptic_ptr, [ int32, ] ],
	SDL_HapticOpened: [ int32, [ int32, ] ],
	SDL_HapticIndex: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_MouseIsHaptic: [ int32, [ ] ],
	SDL_HapticOpenFromMouse: [ SDL_Haptic_ptr, [ ] ],
	SDL_JoystickIsHaptic: [ int32, [ SDL_Joystick_ptr, ] ],
	SDL_HapticOpenFromJoystick: [ SDL_Haptic_ptr, [ SDL_Joystick_ptr, ] ],
	SDL_HapticClose: [ voit, [ SDL_Haptic_ptr, ] ],
	SDL_HapticNumEffects: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticNumEffectsPlaying: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticQuery: [ uint32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticNumAxes: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticEffectSupported: [ int32, [ SDL_Haptic_ptr, SDL_HapticEffect_ptr, ] ],
	SDL_HapticNewEffect: [ int32, [ SDL_Haptic_ptr, SDL_HapticEffect_ptr, ] ],
	SDL_HapticUpdateEffect: [ int32, [ SDL_Haptic_ptr, int32, SDL_HapticEffect_ptr, ] ],
	SDL_HapticRunEffect: [ int32, [ SDL_Haptic_ptr, int32, Uint32, ] ],
	SDL_HapticStopEffect: [ int32, [ SDL_Haptic_ptr, int32, ] ],
	SDL_HapticDestroyEffect: [ voit, [ SDL_Haptic_ptr, int32, ] ],
	SDL_HapticGetEffectStatus: [ int32, [ SDL_Haptic_ptr, int32, ] ],
	SDL_HapticSetGain: [ int32, [ SDL_Haptic_ptr, int32, ] ],
	SDL_HapticSetAutocenter: [ int32, [ SDL_Haptic_ptr, int32, ] ],
	SDL_HapticPause: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticUnpause: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticStopAll: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticRumbleSupported: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticRumbleInit: [ int32, [ SDL_Haptic_ptr, ] ],
	SDL_HapticRumblePlay: [ int32, [ SDL_Haptic_ptr, float, Uint32, ] ],
	SDL_HapticRumbleStop: [ int32, [ SDL_Haptic_ptr, ] ],
}, exports)