var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var Union = require('ref-union');
var SDL_video = require('./SDL_video.js');
var SDL_version = require('./SDL_version.js');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var uint = ref.types.uint;
var SDL_SYSWM_TYPE_enum = int;
var HWND = int;

// basic pointer
var void_ptr = ref.refType(void_type);
var uint_ptr = ref.refType(uint);

// global define
var SDL_SYSWM_TYPE = {
	SDL_SYSWM_UNKNOWN: 0,
    SDL_SYSWM_WINDOWS: 1,
    SDL_SYSWM_X11: 2,
    SDL_SYSWM_DIRECTFB: 3,
    SDL_SYSWM_COCOA: 4,
    SDL_SYSWM_UIKIT: 5,
    SDL_SYSWM_WAYLAND: 6,
    SDL_SYSWM_MIR: 7,
    SDL_SYSWM_WINRT: 8
};
var SDL_SysWMmsg = Struct({
	version: SDL_version.SDL_Version,
	subsystem: SDL_SYSWM_TYPE_enum,
	msg: Union({
		win: Struct({
			hwnd: HWND,
			msg: uint,
			wParam: uint_ptr,
			lParam: uint_ptr
		}),
		x11: Struct({
			event: void_ptr
		}),
		dfb: Struct({
			event: void_ptr
		}),
		cocoa: Struct({}),
		uikit: Struct({}),
		dummy: int
	})
});
var SDL_SysWMinfo = Struct({
	version: SDL_version.SDL_Version,
	subsystem: SDL_SYSWM_TYPE_enum,
	info: Union({
		win: Struct({
			window: HWND
		}),
		winrt: Struct({
			window: void_ptr
		}),
		x11: Struct({
			display: void_ptr,
			window: HWND
		}),
		dfb: Struct({
			dfb: void_ptr,
			window: void_ptr,
			surface: void_ptr
		}),
		cocoa: Struct({
			window: void_ptr
		}),
		uikit: Struct({
			window: void_ptr
		}),
		wl: Struct({
			display: void_ptr,
			surface: void_ptr,
			shell_surface: void_ptr
		}),
		mir: Struct({
			connection: void_ptr,
			surface: void_ptr
		}),
		dummy: int
	})
});


// help pointer
var SDL_Window_ptr = ref.refType(SDL_video.SDL_Window);
var SDL_SysWMinfo_ptr = ref.refType(SDL_SysWMinfo);

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_syswm = ffi.Library(libraryFile, {
	SDL_GetWindowWMInfo: [ bool, [ SDL_Window_ptr, SDL_SysWMinfo_ptr ] ]
});

// export global
SDL_syswm.SDL_SYSWM_TYPE = SDL_SYSWM_TYPE;
SDL_syswm.SDL_SysWMmsg = SDL_SysWMmsg;
SDL_syswm.SDL_SysWMinfo = SDL_SysWMinfo;

module.exports = SDL_syswm;