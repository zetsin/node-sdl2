var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var SDL_scancode = require('./SDL_scancode.js');
var SDL_keycode = require('./SDL_keycode.js');
var SDL_video = require('./SDL_video.js');
var SDL_rect = require('./SDL_rect.js');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var uint32 = ref.types.uint32;
var uint16 = ref.types.uint16;
var uint8 = ref.types.uint8;
var string = ref.types.CString;
var SDL_Rect = SDL_rect.SDL_Rect;
var SDL_Window = SDL_video.SDL_Window;
var SDL_Scancode_enum = int;
var SDL_Keymod_enum = int;

// basic pointer
var void_ptr = ref.refType(void_type);
var int_ptr = ref.refType(int);
var uint16_ptr = ref.refType(uint16);
var uint8_ptr = ref.refType(uint8);
var SDL_Rect_ptr = ref.refType(SDL_Rect);
var SDL_Window_ptr = ref.refType(SDL_Window);

// global define
var SDL_Keysym = Struct({
	scancode: SDL_Scancode_enum,
	SDL_Keycode: SDL_keycode.SDL_Keycode,
	mod: uint16,
	unused: uint32
});

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_keyboard = ffi.Library(libraryFile, {
	SDL_GetKeyboardFocus: [ SDL_video.SDL_Window, [] ],
	SDL_GetKeyboardState: [ uint8_ptr, [ int_ptr ] ],
	SDL_GetModState: [SDL_Keymod_enum, [] ],
	SDL_SetModState: [ void_type, [ SDL_Keymod_enum ] ],
	SDL_GetKeyFromScancode: [ SDL_keycode.SDL_Keycode, [ SDL_Scancode_enum ] ],
	SDL_GetScancodeFromKey: [ SDL_Scancode_enum, [ SDL_keycode.SDL_Keycode ] ],
	SDL_GetScancodeName: [ string, [ SDL_Scancode_enum ] ],
	SDL_GetScancodeFromName: [ SDL_Scancode_enum, [ string ] ],
	SDL_GetKeyName: [ string, [ SDL_keycode.SDL_Keycode ] ],
	SDL_StartTextInput: [ void_type, [] ],
	SDL_IsTextInputActive: [ bool, [] ],
	SDL_StopTextInput: [ void_type, [] ],
	SDL_SetTextInputRect: [ void_type, [ SDL_Rect_ptr ] ],
	SDL_HasScreenKeyboardSupport: [ bool, [] ],
	SDL_IsScreenKeyboardShown: [ bool, [ SDL_Window_ptr ] ]
});

// export global
SDL_keyboard.SDL_Keysym = SDL_Keysym;

module.exports = SDL_keyboard;