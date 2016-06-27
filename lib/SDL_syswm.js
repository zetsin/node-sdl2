var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_version_lib = require('./SDL_version')
var SDL_video_lib = require('./SDL_video')

var SDL_SYSWM_TYPE = exports.SDL_SYSWM_TYPE = {
	SDL_SYSWM_UNKNOWN: 0,
	SDL_SYSWM_WINDOWS: 1,
	SDL_SYSWM_X11: 2,
	SDL_SYSWM_DIRECTFB: 3,
	SDL_SYSWM_COCOA: 4,
	SDL_SYSWM_UIKIT: 5,
	SDL_SYSWM_WAYLAND: 6,
	SDL_SYSWM_MIR: 7,
	SDL_SYSWM_WINRT: 8,
	SDL_SYSWM_ANDROID: 9,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var SDL_version = SDL_version_lib.SDL_version
var int32 = exports.int32 = ref.types.int32
var c__S_SDL_SysWMmsg_U_SDL_syswm_h_3210_S_SDL_syswm_h_3268 = exports.c__S_SDL_SysWMmsg_U_SDL_syswm_h_3210_S_SDL_syswm_h_3268 = Struct({
	hwnd: int32,
	msg: int32,
	wParam: int32,
	lParam: int32,
})
var c__S_SDL_SysWMmsg_U_SDL_syswm_h_3210 = exports.c__S_SDL_SysWMmsg_U_SDL_syswm_h_3210 = Union({
	win: c__S_SDL_SysWMmsg_U_SDL_syswm_h_3210_S_SDL_syswm_h_3268,
	dummy: int32,
})
var SDL_SysWMmsg = exports.SDL_SysWMmsg = Struct({
	version: SDL_version,
	subsystem: uint32,
	msg: c__S_SDL_SysWMmsg_U_SDL_syswm_h_3210,
})
var c__S_SDL_SysWMinfo_U_SDL_syswm_h_4626_S_SDL_syswm_h_4684 = exports.c__S_SDL_SysWMinfo_U_SDL_syswm_h_4626_S_SDL_syswm_h_4684 = Struct({
	window: int32,
	hdc: int32,
})
var c__S_SDL_SysWMinfo_U_SDL_syswm_h_4626 = exports.c__S_SDL_SysWMinfo_U_SDL_syswm_h_4626 = Union({
	win: c__S_SDL_SysWMinfo_U_SDL_syswm_h_4626_S_SDL_syswm_h_4684,
	dummy: int32,
})
var SDL_SysWMinfo = exports.SDL_SysWMinfo = Struct({
	version: SDL_version,
	subsystem: uint32,
	info: c__S_SDL_SysWMinfo_U_SDL_syswm_h_4626,
})
var SDL_Window = SDL_video_lib.SDL_Window
var SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window)
var SDL_SysWMinfo_ptr = exports.SDL_SysWMinfo_ptr = ref.refType(SDL_SysWMinfo)

FFI.Library(__dirname + '/libSDL2', {
	SDL_GetWindowWMInfo: [ uint32, [ SDL_Window_ptr, SDL_SysWMinfo_ptr, ] ],
}, exports)