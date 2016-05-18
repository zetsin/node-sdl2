var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');

// basic type
var int = ref.types.int;
var int64 = ref.types.int64;
var float = ref.types.float;

// global define
var SDL_TouchID = int64;
var SDL_FingerID = int64;
var SDL_Finger = Struct({
	id: SDL_FingerID,
	x: float,
	y: float,
	pressure: float
});
var SDL_TOUCH_MOUSEID = -1;

// help pointer
var SDL_Finger_ptr = ref.refType(SDL_Finger);

// global function
var libraryFile = require('node-sdl2-prebuilt');
var SDL_touch = ffi.Library(libraryFile, {
	SDL_GetNumTouchDevices: [ int, [] ],
	SDL_GetTouchDevice: [ SDL_TouchID, [ int ] ],
	SDL_GetNumTouchFingers: [ int, [ SDL_TouchID ] ],
	SDL_GetTouchFinger: [ SDL_Finger_ptr, [ SDL_TouchID, int ] ]
});

// export global
SDL_touch.SDL_TouchID = SDL_TouchID;
SDL_touch.SDL_FingerID = SDL_FingerID;
SDL_touch.SDL_Finger = SDL_Finger;
SDL_touch.SDL_TOUCH_MOUSEID = SDL_TOUCH_MOUSEID;

module.exports = SDL_touch;
