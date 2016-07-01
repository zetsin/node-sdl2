var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_keyboard_lib = require('./SDL_keyboard')
var SDL_joystick_lib = require('./SDL_joystick')
var SDL_touch_lib = require('./SDL_touch')
var SDL_gesture_lib = require('./SDL_gesture')

var SDL_EventType = exports.SDL_EventType = {
	SDL_FIRSTEVENT: 0,
	SDL_QUIT: 256,
	SDL_APP_TERMINATING: 257,
	SDL_APP_LOWMEMORY: 258,
	SDL_APP_WILLENTERBACKGROUND: 259,
	SDL_APP_DIDENTERBACKGROUND: 260,
	SDL_APP_WILLENTERFOREGROUND: 261,
	SDL_APP_DIDENTERFOREGROUND: 262,
	SDL_WINDOWEVENT: 512,
	SDL_SYSWMEVENT: 513,
	SDL_KEYDOWN: 768,
	SDL_KEYUP: 769,
	SDL_TEXTEDITING: 770,
	SDL_TEXTINPUT: 771,
	SDL_KEYMAPCHANGED: 772,
	SDL_MOUSEMOTION: 1024,
	SDL_MOUSEBUTTONDOWN: 1025,
	SDL_MOUSEBUTTONUP: 1026,
	SDL_MOUSEWHEEL: 1027,
	SDL_JOYAXISMOTION: 1536,
	SDL_JOYBALLMOTION: 1537,
	SDL_JOYHATMOTION: 1538,
	SDL_JOYBUTTONDOWN: 1539,
	SDL_JOYBUTTONUP: 1540,
	SDL_JOYDEVICEADDED: 1541,
	SDL_JOYDEVICEREMOVED: 1542,
	SDL_CONTROLLERAXISMOTION: 1616,
	SDL_CONTROLLERBUTTONDOWN: 1617,
	SDL_CONTROLLERBUTTONUP: 1618,
	SDL_CONTROLLERDEVICEADDED: 1619,
	SDL_CONTROLLERDEVICEREMOVED: 1620,
	SDL_CONTROLLERDEVICEREMAPPED: 1621,
	SDL_FINGERDOWN: 1792,
	SDL_FINGERUP: 1793,
	SDL_FINGERMOTION: 1794,
	SDL_DOLLARGESTURE: 2048,
	SDL_DOLLARRECORD: 2049,
	SDL_MULTIGESTURE: 2050,
	SDL_CLIPBOARDUPDATE: 2304,
	SDL_DROPFILE: 4096,
	SDL_AUDIODEVICEADDED: 4352,
	SDL_AUDIODEVICEREMOVED: 4353,
	SDL_RENDER_TARGETS_RESET: 8192,
	SDL_RENDER_DEVICE_RESET: 8193,
	SDL_USEREVENT: 32768,
	SDL_LASTEVENT: 65535,
}
var SDL_eventaction = exports.SDL_eventaction = {
	SDL_ADDEVENT: 0,
	SDL_PEEKEVENT: 1,
	SDL_GETEVENT: 2,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var Uint32 = SDL_stdinc_lib.Uint32
var SDL_CommonEvent = exports.SDL_CommonEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
})
var Uint8 = SDL_stdinc_lib.Uint8
var Sint32 = SDL_stdinc_lib.Sint32
var SDL_WindowEvent = exports.SDL_WindowEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	event: Uint8,
	padding1: Uint8,
	padding2: Uint8,
	padding3: Uint8,
	data1: Sint32,
	data2: Sint32,
})
var SDL_Keysym = SDL_keyboard_lib.SDL_Keysym
var SDL_KeyboardEvent = exports.SDL_KeyboardEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	state: Uint8,
	repeat: Uint8,
	padding2: Uint8,
	padding3: Uint8,
	keysym: SDL_Keysym,
})
var char = exports.char = ref.types.char
var c__S_SDL_TextEditingEvent_FI_text_arr = ArrayType(char, 32)
var SDL_TextEditingEvent = exports.SDL_TextEditingEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	text: c__S_SDL_TextEditingEvent_FI_text_arr,
	start: Sint32,
	length: Sint32,
})
var c__S_SDL_TextInputEvent_FI_text_arr = ArrayType(char, 32)
var SDL_TextInputEvent = exports.SDL_TextInputEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	text: c__S_SDL_TextInputEvent_FI_text_arr,
})
var SDL_MouseMotionEvent = exports.SDL_MouseMotionEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	which: Uint32,
	state: Uint32,
	x: Sint32,
	y: Sint32,
	xrel: Sint32,
	yrel: Sint32,
})
var SDL_MouseButtonEvent = exports.SDL_MouseButtonEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	which: Uint32,
	button: Uint8,
	state: Uint8,
	clicks: Uint8,
	padding1: Uint8,
	x: Sint32,
	y: Sint32,
})
var SDL_MouseWheelEvent = exports.SDL_MouseWheelEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	which: Uint32,
	x: Sint32,
	y: Sint32,
	direction: Uint32,
})
var SDL_JoystickID = SDL_joystick_lib.SDL_JoystickID
var Sint16 = SDL_stdinc_lib.Sint16
var Uint16 = SDL_stdinc_lib.Uint16
var SDL_JoyAxisEvent = exports.SDL_JoyAxisEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: SDL_JoystickID,
	axis: Uint8,
	padding1: Uint8,
	padding2: Uint8,
	padding3: Uint8,
	value: Sint16,
	padding4: Uint16,
})
var SDL_JoyBallEvent = exports.SDL_JoyBallEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: SDL_JoystickID,
	ball: Uint8,
	padding1: Uint8,
	padding2: Uint8,
	padding3: Uint8,
	xrel: Sint16,
	yrel: Sint16,
})
var SDL_JoyHatEvent = exports.SDL_JoyHatEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: SDL_JoystickID,
	hat: Uint8,
	value: Uint8,
	padding1: Uint8,
	padding2: Uint8,
})
var SDL_JoyButtonEvent = exports.SDL_JoyButtonEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: SDL_JoystickID,
	button: Uint8,
	state: Uint8,
	padding1: Uint8,
	padding2: Uint8,
})
var SDL_JoyDeviceEvent = exports.SDL_JoyDeviceEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: Sint32,
})
var SDL_ControllerAxisEvent = exports.SDL_ControllerAxisEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: SDL_JoystickID,
	axis: Uint8,
	padding1: Uint8,
	padding2: Uint8,
	padding3: Uint8,
	value: Sint16,
	padding4: Uint16,
})
var SDL_ControllerButtonEvent = exports.SDL_ControllerButtonEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: SDL_JoystickID,
	button: Uint8,
	state: Uint8,
	padding1: Uint8,
	padding2: Uint8,
})
var SDL_ControllerDeviceEvent = exports.SDL_ControllerDeviceEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: Sint32,
})
var SDL_AudioDeviceEvent = exports.SDL_AudioDeviceEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	which: Uint32,
	iscapture: Uint8,
	padding1: Uint8,
	padding2: Uint8,
	padding3: Uint8,
})
var SDL_TouchID = SDL_touch_lib.SDL_TouchID
var SDL_FingerID = SDL_touch_lib.SDL_FingerID
var float = exports.float = ref.types.float
var SDL_TouchFingerEvent = exports.SDL_TouchFingerEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	touchId: SDL_TouchID,
	fingerId: SDL_FingerID,
	x: float,
	y: float,
	dx: float,
	dy: float,
	pressure: float,
})
var SDL_MultiGestureEvent = exports.SDL_MultiGestureEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	touchId: SDL_TouchID,
	dTheta: float,
	dDist: float,
	x: float,
	y: float,
	numFingers: Uint16,
	padding: Uint16,
})
var SDL_GestureID = SDL_gesture_lib.SDL_GestureID
var SDL_DollarGestureEvent = exports.SDL_DollarGestureEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	touchId: SDL_TouchID,
	gestureId: SDL_GestureID,
	numFingers: Uint32,
	error: float,
	x: float,
	y: float,
})
var string = exports.string = ref.types.CString
var SDL_DropEvent = exports.SDL_DropEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	file: string,
})
var SDL_QuitEvent = exports.SDL_QuitEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
})
var SDL_OSEvent = exports.SDL_OSEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
})
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_UserEvent = exports.SDL_UserEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	windowID: Uint32,
	code: Sint32,
	data1: voit_ptr,
	data2: voit_ptr,
})
var SDL_SysWMmsg = exports.SDL_SysWMmsg = Struct({
})
var SDL_SysWMmsg_ptr = exports.SDL_SysWMmsg_ptr = ref.refType(SDL_SysWMmsg)
var SDL_SysWMEvent = exports.SDL_SysWMEvent = Struct({
	type: Uint32,
	timestamp: Uint32,
	msg: SDL_SysWMmsg_ptr,
})
var c__U_SDL_Event_FI_padding_arr = ArrayType(Uint8, 56)
var SDL_Event = exports.SDL_Event = Union({
	type: Uint32,
	common: SDL_CommonEvent,
	window: SDL_WindowEvent,
	key: SDL_KeyboardEvent,
	edit: SDL_TextEditingEvent,
	text: SDL_TextInputEvent,
	motion: SDL_MouseMotionEvent,
	button: SDL_MouseButtonEvent,
	wheel: SDL_MouseWheelEvent,
	jaxis: SDL_JoyAxisEvent,
	jball: SDL_JoyBallEvent,
	jhat: SDL_JoyHatEvent,
	jbutton: SDL_JoyButtonEvent,
	jdevice: SDL_JoyDeviceEvent,
	caxis: SDL_ControllerAxisEvent,
	cbutton: SDL_ControllerButtonEvent,
	cdevice: SDL_ControllerDeviceEvent,
	adevice: SDL_AudioDeviceEvent,
	quit: SDL_QuitEvent,
	user: SDL_UserEvent,
	syswm: SDL_SysWMEvent,
	tfinger: SDL_TouchFingerEvent,
	mgesture: SDL_MultiGestureEvent,
	dgesture: SDL_DollarGestureEvent,
	drop: SDL_DropEvent,
	padding: c__U_SDL_Event_FI_padding_arr,
})
var int32 = exports.int32 = ref.types.int32
var SDL_Event_ptr = exports.SDL_Event_ptr = ref.refType(SDL_Event)
var SDL_EventFilter = exports.SDL_EventFilter = FFI.Function( int32, [ voit_ptr, SDL_Event_ptr, ] )
var SDL_EventFilter_ptr = exports.SDL_EventFilter_ptr = ref.refType(SDL_EventFilter)
var voit_ptr_ptr = exports.voit_ptr_ptr = ref.refType(voit_ptr)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_PumpEvents: [ voit, [ ] ],
	SDL_PeepEvents: [ int32, [ SDL_Event_ptr, int32, uint32, Uint32, Uint32, ] ],
	SDL_HasEvent: [ uint32, [ Uint32, ] ],
	SDL_HasEvents: [ uint32, [ Uint32, Uint32, ] ],
	SDL_FlushEvent: [ voit, [ Uint32, ] ],
	SDL_FlushEvents: [ voit, [ Uint32, Uint32, ] ],
	SDL_PollEvent: [ int32, [ SDL_Event_ptr, ] ],
	SDL_WaitEvent: [ int32, [ SDL_Event_ptr, ] ],
	SDL_WaitEventTimeout: [ int32, [ SDL_Event_ptr, int32, ] ],
	SDL_PushEvent: [ int32, [ SDL_Event_ptr, ] ],
	SDL_SetEventFilter: [ voit, [ SDL_EventFilter, voit_ptr, ] ],
	SDL_GetEventFilter: [ uint32, [ SDL_EventFilter_ptr, voit_ptr_ptr, ] ],
	SDL_AddEventWatch: [ voit, [ SDL_EventFilter, voit_ptr, ] ],
	SDL_DelEventWatch: [ voit, [ SDL_EventFilter, voit_ptr, ] ],
	SDL_FilterEvents: [ voit, [ SDL_EventFilter, voit_ptr, ] ],
	SDL_EventState: [ Uint8, [ Uint32, int32, ] ],
	SDL_RegisterEvents: [ Uint32, [ int32, ] ],
}, exports)