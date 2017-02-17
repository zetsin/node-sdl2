var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_video_lib = require('./SDL_video')
var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_surface_lib = require('./SDL_surface')

var SDL_SystemCursor = exports.SDL_SystemCursor = {
	SDL_SYSTEM_CURSOR_ARROW: 0,
	SDL_SYSTEM_CURSOR_IBEAM: 1,
	SDL_SYSTEM_CURSOR_WAIT: 2,
	SDL_SYSTEM_CURSOR_CROSSHAIR: 3,
	SDL_SYSTEM_CURSOR_WAITARROW: 4,
	SDL_SYSTEM_CURSOR_SIZENWSE: 5,
	SDL_SYSTEM_CURSOR_SIZENESW: 6,
	SDL_SYSTEM_CURSOR_SIZEWE: 7,
	SDL_SYSTEM_CURSOR_SIZENS: 8,
	SDL_SYSTEM_CURSOR_SIZEALL: 9,
	SDL_SYSTEM_CURSOR_NO: 10,
	SDL_SYSTEM_CURSOR_HAND: 11,
	SDL_NUM_SYSTEM_CURSORS: 12,
}
var SDL_MouseWheelDirection = exports.SDL_MouseWheelDirection = {
	SDL_MOUSEWHEEL_NORMAL: 0,
	SDL_MOUSEWHEEL_FLIPPED: 1,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var SDL_Cursor = exports.SDL_Cursor = voit
var uint32 = exports.uint32 = ref.types.uint32
var SDL_Window = SDL_video_lib.SDL_Window
var SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window)
var Uint32 = SDL_stdinc_lib.Uint32
var int32 = exports.int32 = ref.types.int32
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var SDL_Cursor_ptr = exports.SDL_Cursor_ptr = ref.refType(SDL_Cursor)
var Uint8 = SDL_stdinc_lib.Uint8
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var SDL_Surface = SDL_surface_lib.SDL_Surface
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_GetMouseFocus: [ SDL_Window_ptr, [ ] ],
	SDL_GetMouseState: [ Uint32, [ int32_ptr, int32_ptr, ] ],
	SDL_GetGlobalMouseState: [ Uint32, [ int32_ptr, int32_ptr, ] ],
	SDL_GetRelativeMouseState: [ Uint32, [ int32_ptr, int32_ptr, ] ],
	SDL_WarpMouseInWindow: [ voit, [ SDL_Window_ptr, int32, int32, ] ],
	SDL_WarpMouseGlobal: [ int32, [ int32, int32, ] ],
	SDL_SetRelativeMouseMode: [ int32, [ uint32, ] ],
	SDL_CaptureMouse: [ int32, [ uint32, ] ],
	SDL_GetRelativeMouseMode: [ uint32, [ ] ],
	SDL_CreateCursor: [ SDL_Cursor_ptr, [ Uint8_ptr, Uint8_ptr, int32, int32, int32, int32, ] ],
	SDL_CreateColorCursor: [ SDL_Cursor_ptr, [ SDL_Surface_ptr, int32, int32, ] ],
	SDL_CreateSystemCursor: [ SDL_Cursor_ptr, [ uint32, ] ],
	SDL_SetCursor: [ voit, [ SDL_Cursor_ptr, ] ],
	SDL_GetCursor: [ SDL_Cursor_ptr, [ ] ],
	SDL_GetDefaultCursor: [ SDL_Cursor_ptr, [ ] ],
	SDL_FreeCursor: [ voit, [ SDL_Cursor_ptr, ] ],
	SDL_ShowCursor: [ int32, [ int32, ] ],
}, exports)