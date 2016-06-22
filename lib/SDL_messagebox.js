var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_video_lib = require('./SDL_video')

var SDL_MessageBoxFlags = exports.SDL_MessageBoxFlags = {
	SDL_MESSAGEBOX_ERROR: 16,
	SDL_MESSAGEBOX_WARNING: 32,
	SDL_MESSAGEBOX_INFORMATION: 64,
}
var SDL_MessageBoxButtonFlags = exports.SDL_MessageBoxButtonFlags = {
	SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT: 1,
	SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT: 2,
}
var SDL_MessageBoxColorType = exports.SDL_MessageBoxColorType = {
	SDL_MESSAGEBOX_COLOR_BACKGROUND: 0,
	SDL_MESSAGEBOX_COLOR_TEXT: 1,
	SDL_MESSAGEBOX_COLOR_BUTTON_BORDER: 2,
	SDL_MESSAGEBOX_COLOR_BUTTON_BACKGROUND: 3,
	SDL_MESSAGEBOX_COLOR_BUTTON_SELECTED: 4,
	SDL_MESSAGEBOX_COLOR_MAX: 5,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var Uint32 = SDL_stdinc_lib.Uint32
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var c__SA_SDL_MessageBoxButtonData = exports.c__SA_SDL_MessageBoxButtonData = Struct({
	flags: Uint32,
	buttonid: int32,
	text: string,
})
var SDL_MessageBoxButtonData = exports.SDL_MessageBoxButtonData = c__SA_SDL_MessageBoxButtonData
var Uint8 = SDL_stdinc_lib.Uint8
var c__SA_SDL_MessageBoxColor = exports.c__SA_SDL_MessageBoxColor = Struct({
	r: Uint8,
	g: Uint8,
	b: Uint8,
})
var SDL_MessageBoxColor = exports.SDL_MessageBoxColor = c__SA_SDL_MessageBoxColor
var c__SA_SDL_MessageBoxColorScheme_FI_colors_arr = ArrayType(SDL_MessageBoxColor, 5)
var c__SA_SDL_MessageBoxColorScheme = exports.c__SA_SDL_MessageBoxColorScheme = Struct({
	colors: c__SA_SDL_MessageBoxColorScheme_FI_colors_arr,
})
var SDL_MessageBoxColorScheme = exports.SDL_MessageBoxColorScheme = c__SA_SDL_MessageBoxColorScheme
var SDL_Window = SDL_video_lib.SDL_Window
var SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window)
var SDL_MessageBoxButtonData_ptr = exports.SDL_MessageBoxButtonData_ptr = ref.refType(SDL_MessageBoxButtonData)
var SDL_MessageBoxColorScheme_ptr = exports.SDL_MessageBoxColorScheme_ptr = ref.refType(SDL_MessageBoxColorScheme)
var c__SA_SDL_MessageBoxData = exports.c__SA_SDL_MessageBoxData = Struct({
	flags: Uint32,
	window: SDL_Window_ptr,
	title: string,
	message: string,
	numbuttons: int32,
	buttons: SDL_MessageBoxButtonData_ptr,
	colorScheme: SDL_MessageBoxColorScheme_ptr,
})
var SDL_MessageBoxData = exports.SDL_MessageBoxData = c__SA_SDL_MessageBoxData
var SDL_MessageBoxData_ptr = exports.SDL_MessageBoxData_ptr = ref.refType(SDL_MessageBoxData)
var int32_ptr = exports.int32_ptr = ref.refType(int32)

FFI.Library(__dirname + '/SDL2', {
	SDL_ShowMessageBox: [ int32, [ SDL_MessageBoxData_ptr, int32_ptr, ] ],
	SDL_ShowSimpleMessageBox: [ int32, [ Uint32, string, string, SDL_Window_ptr, ] ],
}, exports)