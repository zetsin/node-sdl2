var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var ArrayType = require('ref-array');
var Union = require('ref-union');
var SDL_keyboard = require('./SDL_keyboard.js');
var SDL_joystick = require('./SDL_joystick.js');
var SDL_touch = require('./SDL_touch.js');
var SDL_gesture = require('./SDL_gesture.js');
var SDL_syswm = require('./SDL_syswm.js');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var int64 = ref.types.int64;
var int32 = ref.types.int32;
var uint32 = ref.types.uint32;
var int16 = ref.types.int16;
var uint16 = ref.types.uint16;
var uint8 = ref.types.uint8;
var float = ref.types.float;
var char = ref.types.char;
var string = ref.types.CString;
var SDL_SysWMmsg = SDL_syswm.SDL_SysWMmsg;

// basic pointer
var void_ptr = ref.refType(void_type);
var void_ptr_ptr = ref.refType(void_ptr);
var int_ptr = ref.refType(int);
var uint16_ptr = ref.refType(uint16);

// global define
var SDL_RELEASED = 0;
var SDL_PRESSED = 1;
var SDL_EventType = {
	SDL_FIRSTEVENT: 0,
    SDL_QUIT: 0x100,
	SDL_APP_TERMINATING: 0x101,
    SDL_APP_LOWMEMORY: 0x102,
    SDL_APP_WILLENTERBACKGROUND: 0x103,
    SDL_APP_DIDENTERBACKGROUND: 0x104,
    SDL_APP_WILLENTERFOREGROUND: 0x105,
    SDL_APP_DIDENTERFOREGROUND: 0x106,
    SDL_WINDOWEVENT: 0x200,
    SDL_KEYDOWN: 0x300,
    SDL_KEYUP: 0x301,
    SDL_TEXTEDITING: 0x302,
    SDL_TEXTINPUT: 0x303,
    SDL_MOUSEMOTION: 0x400,
    SDL_MOUSEBUTTONDOWN: 0x401,
    SDL_MOUSEBUTTONUP: 0x402,
    SDL_MOUSEWHEEL: 0x403,
    SDL_JOYAXISMOTION: 0x600,
    SDL_JOYBALLMOTION: 0x601,
    SDL_JOYHATMOTION: 0x602,
    SDL_JOYBUTTONDOWN: 0x603,
    SDL_JOYBUTTONUP: 0x604,
    SDL_JOYDEVICEADDED: 0x605,
    SDL_JOYDEVICEREMOVED: 0x606,
    SDL_CONTROLLERAXISMOTION: 0x650,
    SDL_CONTROLLERBUTTONDOWN: 0x651,
    SDL_CONTROLLERBUTTONUP: 0x652,
    SDL_CONTROLLERDEVICEADDED: 0x653,
    SDL_CONTROLLERDEVICEREMOVED: 0x654,
    SDL_CONTROLLERDEVICEREMAPPED: 0x655,
    SDL_FINGERDOWN: 0x700,
    SDL_FINGERUP: 0x701,
    SDL_FINGERMOTION: 0x702,
    SDL_DOLLARGESTURE: 0x800,
    SDL_DOLLARRECORD: 0x801,
    SDL_MULTIGESTURE: 0x802,
    SDL_CLIPBOARDUPDATE: 0x900,
    SDL_DROPFILE: 0x1000,
    SDL_RENDER_TARGETS_RESET: 0x2000,
    SDL_USEREVENT: 0x8000,
    SDL_LASTEVENT: 0xFFFF
};
var SDL_CommonEvent = Struct({
	type: uint32,
	timestamp: uint32
});
var SDL_WindowEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	event: uint8,
	padding1: uint8,
	padding2: uint8,
	padding3: uint8,
	data1: int32,
	data2: int32
});
var SDL_KeyboardEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	state: uint8,
	repeat: uint8,
	padding2: uint8,
	padding3: uint8,
	keysym: SDL_keyboard.SDL_Keysym,
});
var SDL_TEXTEDITINGEVENT_TEXT_SIZE = 32;
var SDL_TextEditingEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	text: ArrayType(char, SDL_TEXTEDITINGEVENT_TEXT_SIZE),
	start: int32,
	length: int32
});
var SDL_TEXTINPUTEVENT_TEXT_SIZE = 32;
var SDL_TextInputEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	text: ArrayType(char, SDL_TEXTINPUTEVENT_TEXT_SIZE)
});
var SDL_MouseMotionEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	which: uint32,
	state: uint32,
	x: int32,
	y: int32,
	xrel: int32,
	yrel: int32
});
var SDL_MouseButtonEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	which: uint32,
	button: uint8,
	state: uint8,
	clicks: uint8,
	padding1: uint8,
	x: int32,
	y: int32
});
var SDL_MouseWheelEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	which: uint32,
	x: int32,
	y: int32
});
var SDL_JoyAxisEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: SDL_joystick.SDL_JoystickID,
	axis: uint8,
	padding1: uint8,
	padding2: uint8,
	padding3: uint8,
	value: int16,
	padding4: uint16
});
var SDL_JoyBallEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: SDL_joystick.SDL_JoystickID,
	ball: uint8,
	padding1: uint8,
	padding2: uint8,
	padding3: uint8,
	xrel: int16,
	yrel: int16
});
var SDL_JoyHatEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: SDL_joystick.SDL_JoystickID,
	hat: uint8,
	value: uint8,
	padding1: uint8,
	padding2: uint8
});
var SDL_JoyButtonEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: SDL_joystick.SDL_JoystickID,
	button: uint8,
	state: uint8,
	padding1: uint8,
	padding2: uint8
});
var SDL_JoyDeviceEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: int32
});
var SDL_ControllerAxisEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: SDL_joystick.SDL_JoystickID,
	axis: uint8,
	padding1: uint8,
	padding2: uint8,
	padding3: uint8,
	value: int16,
	padding4: uint16
});
var SDL_ControllerButtonEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: SDL_joystick.SDL_JoystickID,
	button: uint8,
	state: uint8,
	padding1: uint8,
	padding2: uint8
});
var SDL_ControllerDeviceEvent = Struct({
	type: uint32,
	timestamp: uint32,
	which: int32
});
var SDL_TouchFingerEvent = Struct({
	type: uint32,
	timestamp: uint32,
	touchId: SDL_touch.SDL_TouchID,
	fingerId: int64,
	x: float,
	y: float,
	dx: float,
	dy: float,
	pressure: float
});
var SDL_MultiGestureEvent = Struct({
	type: uint32,
	timestamp: uint32,
	touchId: SDL_touch.SDL_TouchID,
	dTheta: float,
	dDist: float,
	x: float,
	y: float,
	numFingers: uint16,
	padding: uint16
});
var SDL_DollarGestureEvent = Struct({
	type: uint32,
	timestamp: uint32,
	touchId: SDL_touch.SDL_TouchID,
	gestureId: SDL_gesture.SDL_GestureID,
	numFingers: uint32,
	error: float,
	x: float,
	y: float
});
var SDL_DropEvent = Struct({
	type: uint32,
	timestamp: uint32,
	file: string
});
var SDL_QuitEvent = Struct({
	type: uint32,
	timestamp: uint32
});
var SDL_OSEvent = Struct({
	type: uint32,
	timestamp: uint32
});
var SDL_UserEvent = Struct({
	type: uint32,
	timestamp: uint32,
	windowID: uint32,
	code: int32,
	data1: void_ptr,
	data2: void_ptr
});
var SDL_SysWMmsg_ptr = ref.refType(SDL_SysWMmsg);
var SDL_SysWMEvent = Struct({
	type: uint32,
	timestamp: uint32,
	msg: SDL_SysWMmsg_ptr
});
var SDL_Event = new Union({
	type: uint32,
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
	quit: SDL_QuitEvent,
	user: SDL_UserEvent,
	syswm: SDL_SysWMEvent,
	tfinger: SDL_TouchFingerEvent,
	mgesture: SDL_MultiGestureEvent,
	dgesture: SDL_DollarGestureEvent,
	drop: SDL_DropEvent,
	padding: ArrayType(uint8, 56)
});
var SDL_eventaction = {
	SDL_ADDEVENT: 0,
	SDL_PEEKEVENT: 1,
	SDL_GETEVENT: 2
};
var SDL_QUERY = -1;
var SDL_IGNORE = 0;
var SDL_DISABLE = 0;
var SDL_ENABLE = 1;

// help type
var SDL_eventaction_enum = int;

// help pointer
var SDL_Event_ptr = ref.refType(SDL_Event);
var SDL_EventFilter = void_ptr; // int SDL_EventFilter(void *userdata, SDL_Event * event);
var SDL_EventFilter_ptr = ref.refType(SDL_EventFilter);

// global function
var libraryFile = require('node-sdl2-prebuilt');
var SDL_events = ffi.Library(libraryFile, {
	SDL_PumpEvents: [ void_type, [] ],
	SDL_PeepEvents: [ int, [ SDL_Event_ptr, int, SDL_eventaction_enum, uint32, uint32 ] ],
	SDL_HasEvent: [ bool, [ uint32 ] ],
	SDL_HasEvents: [ bool, [ uint32, uint32 ] ],
	SDL_FlushEvent: [ void_type, [ uint32 ] ],
	SDL_FlushEvents: [ void_type, [ uint32, uint32 ] ],
	SDL_PollEvent: [ int, [ SDL_Event_ptr ] ],
	SDL_WaitEvent: [ int, [ SDL_Event_ptr ] ],
	SDL_WaitEventTimeout: [ int, [ SDL_Event_ptr, int ] ],
	SDL_PushEvent: [ int, [ SDL_Event_ptr ] ],
	SDL_SetEventFilter: [ void_type, [ SDL_EventFilter, void_ptr ] ],
	SDL_GetEventFilter: [ bool, [ SDL_EventFilter_ptr, void_ptr_ptr] ],
	SDL_AddEventWatch: [ void_type, [ SDL_EventFilter, void_ptr ] ],
	SDL_DelEventWatch: [ void_type, [ SDL_EventFilter, void_ptr ] ],
	SDL_FilterEvents: [ void_type, [ SDL_EventFilter, void_ptr ] ],
	SDL_EventState: [ uint8, [ uint8, int ] ],
	SDL_RegisterEvents: [ uint32, [ int ] ]
});

// inline function
SDL_events.SDL_GetEventState = function(type) {
	SDL_events.SDL_EventState(type, SDL_QUERY);
};

// export global
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var int64 = ref.types.int64;
var int32 = ref.types.int32;
var uint32 = ref.types.uint32;
var int16 = ref.types.int16;
var uint16 = ref.types.uint16;
var uint8 = ref.types.uint8;
var float = ref.types.float;
var char = ref.types.char;
var string = ref.types.CString;

// basic pointer
var void_ptr = ref.refType(void_type);
var void_ptr_ptr = ref.refType(void_ptr);
var int_ptr = ref.refType(int);
var uint16_ptr = ref.refType(uint16);

// global define
SDL_events.SDL_RELEASED = SDL_RELEASED;
SDL_events.SDL_PRESSED = SDL_PRESSED;
SDL_events.SDL_EventType = SDL_EventType;
SDL_events.SDL_CommonEvent = SDL_CommonEvent;
SDL_events.SDL_WindowEvent = SDL_WindowEvent;
SDL_events.SDL_KeyboardEvent = SDL_KeyboardEvent;
SDL_events.SDL_TEXTEDITINGEVENT_TEXT_SIZE = SDL_TEXTEDITINGEVENT_TEXT_SIZE;
SDL_events.SDL_TextEditingEvent = SDL_TextEditingEvent;
SDL_events.SDL_TEXTINPUTEVENT_TEXT_SIZE = SDL_TEXTINPUTEVENT_TEXT_SIZE;
SDL_events.SDL_TextInputEvent = SDL_TextInputEvent;
SDL_events.SDL_MouseMotionEvent = SDL_MouseMotionEvent;
SDL_events.SDL_MouseButtonEvent = SDL_MouseButtonEvent;
SDL_events.SDL_MouseWheelEvent = SDL_MouseWheelEvent;
SDL_events.SDL_JoyAxisEvent = SDL_JoyAxisEvent;
SDL_events.SDL_JoyBallEvent = SDL_JoyBallEvent;
SDL_events.SDL_JoyHatEvent = SDL_JoyHatEvent;
SDL_events.SDL_JoyButtonEvent = SDL_JoyButtonEvent;
SDL_events.SDL_JoyDeviceEvent = SDL_JoyDeviceEvent;
SDL_events.SDL_ControllerAxisEvent = SDL_ControllerAxisEvent;
SDL_events.SDL_ControllerButtonEvent = SDL_ControllerButtonEvent;
SDL_events.SDL_ControllerDeviceEvent = SDL_ControllerDeviceEvent;
SDL_events.SDL_TouchFingerEvent = SDL_TouchFingerEvent;
SDL_events.SDL_MultiGestureEvent = SDL_MultiGestureEvent;
SDL_events.SDL_DollarGestureEvent = SDL_DollarGestureEvent;
SDL_events.SDL_DropEvent = SDL_DropEvent;
SDL_events.SDL_QuitEvent = SDL_QuitEvent;
SDL_events.SDL_OSEvent = SDL_OSEvent;
SDL_events.SDL_UserEvent = SDL_UserEvent;
SDL_events.SDL_SysWMmsg = SDL_SysWMmsg;
SDL_events.SDL_SysWMEvent = SDL_SysWMEvent;
SDL_events.SDL_Event = SDL_Event;
SDL_events.SDL_eventaction = SDL_eventaction
SDL_events.SDL_QUERY = SDL_QUERY;
SDL_events.SDL_IGNORE = SDL_IGNORE;
SDL_events.SDL_DISABLE = SDL_DISABLE;
SDL_events.SDL_ENABLE = SDL_ENABLE;

module.exports = SDL_events;