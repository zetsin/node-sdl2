var ref = require('ref');
var ffi = require('ffi');

// basic type
var void_type = ref.types.void;
var int = ref.types.int;
var uint32 = ref.types.uint32;

// global define
var SDL_INIT_TIMER = 0x00000001;
var SDL_INIT_AUDIO = 0x00000010;
var SDL_INIT_VIDEO = 0x00000020;
var SDL_INIT_JOYSTICK = 0x00000200;
var SDL_INIT_HAPTIC = 0x00001000;
var SDL_INIT_GAMECONTROLLER = 0x00002000;
var SDL_INIT_EVENTS = 0x00004000;
var SDL_INIT_NOPARACHUTE = 0x00100000;
var SDL_INIT_EVERYTHING = SDL_INIT_TIMER | SDL_INIT_AUDIO | SDL_INIT_VIDEO | SDL_INIT_JOYSTICK | SDL_INIT_HAPTIC | SDL_INIT_GAMECONTROLLER | SDL_INIT_EVENTS;

// global function
var libraryFile = require('node-sdl2-prebuilt');
var SDL = ffi.Library(libraryFile, {
	SDL_Init: [ int, [ uint32 ] ],
	SDL_InitSubSystem: [ int, [ uint32 ] ],
	SDL_QuitSubSystem: [ void_type, [ uint32 ] ],
	SDL_WasInit: [ int, [ uint32 ] ],
	SDL_Quit: [ void_type, [] ]
});

// export global
SDL.SDL_INIT_TIMER = SDL_INIT_TIMER;
SDL.SDL_INIT_AUDIO = SDL_INIT_AUDIO;
SDL.SDL_INIT_VIDEO = SDL_INIT_VIDEO;
SDL.SDL_INIT_JOYSTICK = SDL_INIT_JOYSTICK;
SDL.SDL_INIT_HAPTIC = SDL_INIT_HAPTIC;
SDL.SDL_INIT_GAMECONTROLLER = SDL_INIT_GAMECONTROLLER;
SDL.SDL_INIT_EVENTS = SDL_INIT_EVENTS;
SDL.SDL_INIT_NOPARACHUTE = SDL_INIT_NOPARACHUTE;
SDL.SDL_INITSDL_INIT_EVERYTHING_TIMER = SDL_INIT_EVERYTHING;

module.exports = SDL;