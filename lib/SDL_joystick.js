var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var ArrayType = require('ref-array');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var int32 = ref.types.int32;
var int16 = ref.types.int16;
var uint8 = ref.types.uint8;
var string = ref.types.CString;

// basic pointer
var void_ptr = ref.refType(void_type);
var int_ptr = ref.refType(int);

// global define
var SDL_Joystick = void_type;
var SDL_JoystickGUID = Struct({
	data: ArrayType(uint8, 16)
});
var SDL_JoystickID = int32;
var SDL_HAT_CENTERED = 0x00;
var SDL_HAT_UP = 0x01;
var SDL_HAT_RIGHT = 0x02;
var SDL_HAT_DOWN = 0x04;
var SDL_HAT_LEFT = 0x08;
var SDL_HAT_RIGHTUP = (SDL_HAT_RIGHT|SDL_HAT_UP);
var SDL_HAT_RIGHTDOWN = (SDL_HAT_RIGHT|SDL_HAT_DOWN);
var SDL_HAT_LEFTUP = (SDL_HAT_LEFT|SDL_HAT_UP);
var SDL_HAT_LEFTDOWN = (SDL_HAT_LEFT|SDL_HAT_DOWN);

// help pointer
var SDL_Joystick_ptr = ref.refType(SDL_Joystick);

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_joystick = ffi.Library(libraryFile, {
	SDL_NumJoysticks: [ int, [ void_type ] ],
	SDL_JoystickNameForIndex: [ string, [ int ] ],
	SDL_JoystickOpen: [ SDL_Joystick_ptr, [ int ] ],
	SDL_JoystickName: [ string, [ SDL_Joystick_ptr ] ],
	SDL_JoystickGetDeviceGUID: [ SDL_JoystickGUID, [ int ] ],
	SDL_JoystickGetGUID: [ SDL_JoystickGUID, [ SDL_Joystick_ptr ] ],
	SDL_JoystickGetGUIDString: [ void_type, [ SDL_JoystickGUID, string, int ] ],
	SDL_JoystickGetAttached: [ bool, [ SDL_Joystick_ptr ] ],
	SDL_JoystickInstanceID: [ SDL_JoystickID, [ SDL_Joystick_ptr ] ],
	SDL_JoystickNumAxes: [ int, [ SDL_Joystick_ptr ] ],
	SDL_JoystickNumBalls: [ int, [ SDL_Joystick_ptr ] ],
	SDL_JoystickNumHats: [ int, [ SDL_Joystick_ptr ] ],
	SDL_JoystickUpdate: [ void_type, [] ],
	SDL_JoystickEventState: [ int, [ int ] ],
	SDL_JoystickGetAxis: [ int16, [ SDL_Joystick_ptr, int ] ],
	SDL_JoystickGetHat: [ uint8, [ SDL_Joystick_ptr, int ] ],
	SDL_JoystickGetBall: [ int, [ SDL_Joystick_ptr, int, int_ptr, int_ptr ] ],
	SDL_JoystickGetButton: [ uint8, [ SDL_Joystick_ptr, int ] ],
	SDL_JoystickClose: [ void_type, [ SDL_Joystick_ptr ] ]
});

// export global
SDL_joystick.SDL_Joystick = SDL_Joystick;
SDL_joystick.SDL_JoystickGUID = SDL_JoystickGUID;
SDL_joystick.SDL_JoystickID = SDL_JoystickID;
SDL_joystick.SDL_HAT_CENTERED = SDL_HAT_CENTERED;
SDL_joystick.SDL_HAT_UP = SDL_HAT_UP;
SDL_joystick.SDL_HAT_RIGHT = SDL_HAT_RIGHT;
SDL_joystick.SDL_HAT_DOWN = SDL_HAT_DOWN;
SDL_joystick.SDL_HAT_LEFT = SDL_HAT_LEFT;
SDL_joystick.SDL_HAT_RIGHTUP = SDL_HAT_RIGHTUP;
SDL_joystick.SDL_HAT_RIGHTDOWN = SDL_HAT_RIGHTDOWN;
SDL_joystick.SDL_HAT_LEFTUP = SDL_HAT_LEFTUP;
SDL_joystick.SDL_HAT_LEFTDOWN = SDL_HAT_LEFTDOWN;

module.exports = SDL_joystick;