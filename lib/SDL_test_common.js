var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_video_lib = require('./SDL_video')
var SDL_render_lib = require('./SDL_render')
var SDL_audio_lib = require('./SDL_audio')
var SDL_events_lib = require('./SDL_events')

var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var string = exports.string = ref.types.CString
var string_ptr = exports.string_ptr = ref.refType(string)
var Uint32 = SDL_stdinc_lib.Uint32
var int32 = exports.int32 = ref.types.int32
var float = exports.float = ref.types.float
var SDL_Window = SDL_video_lib.SDL_Window
var SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window)
var SDL_Window_ptr_ptr = exports.SDL_Window_ptr_ptr = ref.refType(SDL_Window_ptr)
var uint32 = exports.uint32 = ref.types.uint32
var SDL_Renderer = SDL_render_lib.SDL_Renderer
var SDL_Renderer_ptr = exports.SDL_Renderer_ptr = ref.refType(SDL_Renderer)
var SDL_Renderer_ptr_ptr = exports.SDL_Renderer_ptr_ptr = ref.refType(SDL_Renderer_ptr)
var SDL_Texture = SDL_render_lib.SDL_Texture
var SDL_Texture_ptr = exports.SDL_Texture_ptr = ref.refType(SDL_Texture)
var SDL_Texture_ptr_ptr = exports.SDL_Texture_ptr_ptr = ref.refType(SDL_Texture_ptr)
var SDL_AudioSpec = SDL_audio_lib.SDL_AudioSpec
var c__SA_SDLTest_CommonState = exports.c__SA_SDLTest_CommonState = Struct({
	argv: string_ptr,
	flags: Uint32,
	verbose: Uint32,
	videodriver: string,
	display: int32,
	window_title: string,
	window_icon: string,
	window_flags: Uint32,
	window_x: int32,
	window_y: int32,
	window_w: int32,
	window_h: int32,
	window_minW: int32,
	window_minH: int32,
	window_maxW: int32,
	window_maxH: int32,
	logical_w: int32,
	logical_h: int32,
	scale: float,
	depth: int32,
	refresh_rate: int32,
	num_windows: int32,
	windows: SDL_Window_ptr_ptr,
	renderdriver: string,
	render_flags: Uint32,
	skip_renderer: uint32,
	renderers: SDL_Renderer_ptr_ptr,
	targets: SDL_Texture_ptr_ptr,
	audiodriver: string,
	audiospec: SDL_AudioSpec,
	gl_red_size: int32,
	gl_green_size: int32,
	gl_blue_size: int32,
	gl_alpha_size: int32,
	gl_buffer_size: int32,
	gl_depth_size: int32,
	gl_stencil_size: int32,
	gl_double_buffer: int32,
	gl_accum_red_size: int32,
	gl_accum_green_size: int32,
	gl_accum_blue_size: int32,
	gl_accum_alpha_size: int32,
	gl_stereo: int32,
	gl_multisamplebuffers: int32,
	gl_multisamplesamples: int32,
	gl_retained_backing: int32,
	gl_accelerated: int32,
	gl_major_version: int32,
	gl_minor_version: int32,
	gl_debug: int32,
	gl_profile_mask: int32,
})
var SDLTest_CommonState = exports.SDLTest_CommonState = c__SA_SDLTest_CommonState
var SDLTest_CommonState_ptr = exports.SDLTest_CommonState_ptr = ref.refType(SDLTest_CommonState)
var SDL_Event = SDL_events_lib.SDL_Event
var SDL_Event_ptr = exports.SDL_Event_ptr = ref.refType(SDL_Event)
var int32_ptr = exports.int32_ptr = ref.refType(int32)

FFI.Library('libSDL2', {
	SDLTest_CommonCreateState: [ SDLTest_CommonState_ptr, [ string_ptr, Uint32, ] ],
	SDLTest_CommonArg: [ int32, [ SDLTest_CommonState_ptr, int32, ] ],
	SDLTest_CommonUsage: [ string, [ SDLTest_CommonState_ptr, ] ],
	SDLTest_CommonInit: [ uint32, [ SDLTest_CommonState_ptr, ] ],
	SDLTest_CommonEvent: [ voit, [ SDLTest_CommonState_ptr, SDL_Event_ptr, int32_ptr, ] ],
	SDLTest_CommonQuit: [ voit, [ SDLTest_CommonState_ptr, ] ],
}, exports)