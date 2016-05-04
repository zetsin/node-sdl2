var ref = require('ref');
var ffi = require('ffi');

// basic type
var bool = ref.types.bool;
var void_type = ref.types.void;
var int = ref.types.int;
var uint32 = ref.types.uint32;
var uint64 = ref.types.uint64;
var SDL_TimerID = int;

// global function
var libraryFile = require('node-sdl2-prebuilt');
var SDL_timer = ffi.Library(libraryFile, {
	SDL_GetTicks: [uint32, []],
	SDL_GetPerformanceCounter: [uint64, []],
	SDL_GetPerformanceFrequency: [uint64, []],
	SDL_Delay: [void_type, [uint32]],
	SDL_RemoveTimer: [bool, [SDL_TimerID]]
});

// export global
SDL_timer.SDL_TimerID = SDL_TimerID;

module.exports = SDL_timer;
