var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var SDL_touch = require('./SDL_touch.js');
var SDL_rwops = require('./SDL_rwops.js');

// basic type
var int = ref.types.int;
var int64 = ref.types.int64;
var float = ref.types.float;

// global define
var SDL_GestureID = int64;

// help pointer
var SDL_RWops_ptr = ref.refType(SDL_rwops.SDL_RWops);

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_gesture = ffi.Library(libraryFile, {
	SDL_RecordGesture: [ int, [ SDL_touch.SDL_TouchID ] ],
	SDL_SaveAllDollarTemplates: [ int, [ SDL_RWops_ptr ] ],
	SDL_SaveDollarTemplate: [ int, [ SDL_GestureID, SDL_RWops_ptr ] ],
	SDL_SaveAllDollarTemplates: [ int, [ SDL_touch.SDL_TouchID, SDL_RWops_ptr ] ]
});

// export global
SDL_gesture.SDL_GestureID = SDL_GestureID;

module.exports = SDL_gesture;
