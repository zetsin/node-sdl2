var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_video_lib = require('./SDL_video')
var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_pixels_lib = require('./SDL_pixels')
var SDL_surface_lib = require('./SDL_surface')

var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}
var WindowShapeMode = exports.WindowShapeMode = {
	ShapeModeDefault: 0,
	ShapeModeBinarizeAlpha: 1,
	ShapeModeReverseBinarizeAlpha: 2,
	ShapeModeColorKey: 3,
}

var voit = exports.voit = ref.types.void
var SDL_Window = SDL_video_lib.SDL_Window
var SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window)
var string = exports.string = ref.types.CString
var uint32 = exports.uint32 = ref.types.uint32
var Uint32 = SDL_stdinc_lib.Uint32
var Uint8 = SDL_stdinc_lib.Uint8
var SDL_Color = SDL_pixels_lib.SDL_Color
var c__UA_SDL_WindowShapeParams = exports.c__UA_SDL_WindowShapeParams = Union({
	binarizationCutoff: Uint8,
	colorKey: SDL_Color,
})
var SDL_WindowShapeParams = exports.SDL_WindowShapeParams = c__UA_SDL_WindowShapeParams
var SDL_WindowShapeMode = exports.SDL_WindowShapeMode = Struct({
	mode: uint32,
	parameters: SDL_WindowShapeParams,
})
var int32 = exports.int32 = ref.types.int32
var SDL_Surface = SDL_surface_lib.SDL_Surface
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)
var SDL_WindowShapeMode_ptr = exports.SDL_WindowShapeMode_ptr = ref.refType(SDL_WindowShapeMode)

FFI.Library(__dirname + '/SDL2', {
	SDL_CreateShapedWindow: [ SDL_Window_ptr, [ string, uint32, uint32, uint32, uint32, Uint32, ] ],
	SDL_IsShapedWindow: [ uint32, [ SDL_Window_ptr, ] ],
	SDL_SetWindowShape: [ int32, [ SDL_Window_ptr, SDL_Surface_ptr, SDL_WindowShapeMode_ptr, ] ],
	SDL_GetShapedWindowMode: [ int32, [ SDL_Window_ptr, SDL_WindowShapeMode_ptr, ] ],
}, exports)