var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var SDL_rect = require('./SDL_rect.js');
var SDL_surface = require('./SDL_surface.js');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var uint32 = ref.types.uint32;
var uint16 = ref.types.uint16;
var float = ref.types.float;
var string = ref.types.CString;

// basic pointer
var void_ptr = ref.refType(void_type);
var int_ptr = ref.refType(int);
var uint16_ptr = ref.refType(uint16);
var SDL_Rect_ptr = ref.refType(SDL_rect.SDL_Rect);
var SDL_Surface_ptr = ref.refType(SDL_surface.SDL_Surface);

// global define
var SDL_DisplayMode = Struct({
	format: uint32,
	w: int,
	h: int,
	refresh_rate: int,
	driverdata: void_ptr
});
var SDL_Window = void_type;
var SDL_WindowFlags = {
	SDL_WINDOW_FULLSCREEN: 0x00000001,
	SDL_WINDOW_OPENGL: 0x00000002,
	SDL_WINDOW_SHOWN: 0x00000004,
	SDL_WINDOW_HIDDEN: 0x00000008,
	SDL_WINDOW_BORDERLESS: 0x00000010,
	SDL_WINDOW_RESIZABLE: 0x00000020,
	SDL_WINDOW_MINIMIZED: 0x00000040,
	SDL_WINDOW_MAXIMIZED: 0x00000080,
	SDL_WINDOW_INPUT_GRABBED: 0x00000100,
	SDL_WINDOW_INPUT_FOCUS: 0x00000200,
	SDL_WINDOW_MOUSE_FOCUS: 0x00000400,
	SDL_WINDOW_FULLSCREEN_DESKTOP: ( 0x00000001 | 0x00001000 ),
	SDL_WINDOW_FOREIGN: 0x00000800,
	SDL_WINDOW_ALLOW_HIGHDPI: 0x00002000
};
var SDL_WINDOWPOS_UNDEFINED_MASK = 0x1FFF0000;
var SDL_WINDOWPOS_UNDEFINED_DISPLAY = function(X) {
	return (SDL_WINDOWPOS_UNDEFINED_MASK|(X))
};
var SDL_WINDOWPOS_UNDEFINED = SDL_WINDOWPOS_UNDEFINED_DISPLAY(0);
var SDL_WINDOWPOS_ISUNDEFINED = function(X) {
	return (((X)&0xFFFF0000) == SDL_WINDOWPOS_UNDEFINED_MASK)
};
var SDL_WINDOWPOS_CENTERED_MASK = 0x2FFF0000;
var SDL_WINDOWPOS_CENTERED_DISPLAY = function(X) {
	return (SDL_WINDOWPOS_CENTERED_MASK|(X))
};
var SDL_WINDOWPOS_CENTERED = SDL_WINDOWPOS_CENTERED_DISPLAY(0);
var SDL_WINDOWPOS_ISCENTERED = function(X) {
	return (((X)&0xFFFF0000) == SDL_WINDOWPOS_CENTERED_MASK);
};
var SDL_WindowEventID = {
	SDL_WINDOWEVENT_NONE: 0,
	SDL_WINDOWEVENT_SHOWN: 1,
	SDL_WINDOWEVENT_HIDDEN: 2,
	SDL_WINDOWEVENT_EXPOSED: 3,
	SDL_WINDOWEVENT_MOVED: 4,
	SDL_WINDOWEVENT_RESIZED: 5,
	SDL_WINDOWEVENT_SIZE_CHANGED: 6,
	SDL_WINDOWEVENT_MINIMIZED: 7,
	SDL_WINDOWEVENT_MAXIMIZED: 8,
	SDL_WINDOWEVENT_RESTORED: 9,
	SDL_WINDOWEVENT_ENTER: 10,
	SDL_WINDOWEVENT_LEAVE: 11,
	SDL_WINDOWEVENT_FOCUS_GAINED: 12,
	SDL_WINDOWEVENT_FOCUS_LOST: 13,
	SDL_WINDOWEVENT_CLOSE: 14
};
var SDL_GLContext = void_ptr;
var SDL_GLattr = {
	SDL_GL_RED_SIZE: 0,
	SDL_GL_GREEN_SIZE: 1,
	SDL_GL_BLUE_SIZE: 2,
	SDL_GL_ALPHA_SIZE: 3,
	SDL_GL_BUFFER_SIZE: 4,
	SDL_GL_DOUBLEBUFFER: 5,
	SDL_GL_DEPTH_SIZE: 6,
	SDL_GL_STENCIL_SIZE: 7,
	SDL_GL_ACCUM_RED_SIZE: 8,
	SDL_GL_ACCUM_GREEN_SIZE: 9,
	SDL_GL_ACCUM_BLUE_SIZE: 10,
	SDL_GL_ACCUM_ALPHA_SIZE: 11,
	SDL_GL_STEREO: 12,
	SDL_GL_MULTISAMPLEBUFFERS: 13,
	SDL_GL_MULTISAMPLESAMPLES: 14,
	SDL_GL_ACCELERATED_VISUAL: 15,
	SDL_GL_RETAINED_BACKING: 16,
	SDL_GL_CONTEXT_MAJOR_VERSION: 17,
	SDL_GL_CONTEXT_MINOR_VERSION: 18,
	SDL_GL_CONTEXT_EGL: 19,
	SDL_GL_CONTEXT_FLAGS: 20,
	SDL_GL_CONTEXT_PROFILE_MASK: 21,
	SDL_GL_SHARE_WITH_CURRENT_CONTEXT: 22,
	SDL_GL_FRAMEBUFFER_SRGB_CAPABLE: 23
};
var SDL_GLprofile = {
	SDL_GL_CONTEXT_PROFILE_CORE: 0x0001,
	SDL_GL_CONTEXT_PROFILE_COMPATIBILITY: 0x0002,
	SDL_GL_CONTEXT_PROFILE_ES: 0x0004
};
var SDL_GLcontextFlag = {
	SDL_GL_CONTEXT_DEBUG_FLAG: 0x0001,
	SDL_GL_CONTEXT_FORWARD_COMPATIBLE_FLAG: 0x0002,
	SDL_GL_CONTEXT_ROBUST_ACCESS_FLAG: 0x0004,
	SDL_GL_CONTEXT_RESET_ISOLATION_FLAG: 0x0008
};

// help type
var SDL_GLattr_enum = int;

// help pointer
var SDL_DisplayMode_ptr = ref.refType(SDL_DisplayMode);
var SDL_Window_ptr = ref.refType(SDL_Window);

// global function
var libraryFile = require('node-sdl2-prebuilt');
var SDL_video = ffi.Library(libraryFile, {
	SDL_GetNumVideoDrivers: [ int, [] ],
	SDL_GetVideoDriver: [ string, [ int ] ],
	SDL_VideoInit: [ int, [ string ] ],
	SDL_VideoQuit: [ void_type, [] ],
	SDL_GetCurrentVideoDriver: [ string, [] ],
	SDL_GetNumVideoDisplays: [ int, [] ],
	SDL_GetDisplayName: [ string, [ int ] ],
	SDL_GetDisplayBounds: [ int, [ int, SDL_Rect_ptr ] ],
	SDL_GetNumDisplayModes: [ int, [ int ] ],
	SDL_GetDisplayMode: [ int, [ int, int, SDL_DisplayMode_ptr ] ],
	SDL_GetDesktopDisplayMode: [ int, [ int, SDL_DisplayMode_ptr ] ],
	SDL_GetCurrentDisplayMode: [ int, [ int, SDL_DisplayMode_ptr ] ],
	SDL_GetClosestDisplayMode: [ SDL_DisplayMode_ptr, [ int, SDL_DisplayMode_ptr, SDL_DisplayMode_ptr ] ],
	SDL_GetWindowDisplayIndex: [ int, [ SDL_Window_ptr ] ],
	SDL_SetWindowDisplayMode: [ int, [ SDL_Window_ptr, SDL_DisplayMode_ptr ] ],
	SDL_GetWindowDisplayMode: [ int, [ SDL_Window_ptr, SDL_DisplayMode_ptr ] ],
	SDL_GetWindowPixelFormat: [ uint32, [ SDL_Window_ptr ] ],
	SDL_CreateWindow: [ SDL_Window_ptr, [ string, int, int, int, int, uint32 ] ],
	SDL_CreateWindowFrom: [ SDL_Window_ptr, [ void_ptr ] ],
	SDL_GetWindowID: [ uint32, [ SDL_Window_ptr ] ],
	SDL_GetWindowFromID: [ SDL_Window_ptr, [ uint32 ] ],
	SDL_GetWindowFlags: [ uint32, [ SDL_Window_ptr ] ],
	SDL_SetWindowTitle: [ void_type, [ SDL_Window_ptr, string ] ],
	SDL_GetWindowTitle: [ string, [ SDL_Window_ptr ] ],
	SDL_SetWindowIcon: [ void_type, [ SDL_Window_ptr, SDL_Surface_ptr ] ],
	SDL_SetWindowData: [ void_ptr, [ SDL_Window_ptr, string, void_ptr ] ],
	SDL_GetWindowData: [ void_ptr, [ SDL_Window_ptr, string ] ],
	SDL_SetWindowPosition: [ void_type, [ SDL_Window_ptr, int, int ] ],
	SDL_GetWindowPosition: [ void_type, [ SDL_Window_ptr, int_ptr, int_ptr ] ],
	SDL_SetWindowSize: [ void_type, [ SDL_Window_ptr, int, int ] ],
	SDL_GetWindowSize: [ void_type, [ SDL_Window_ptr, int_ptr, int_ptr ] ],
	SDL_SetWindowMinimumSize: [ void_type, [ SDL_Window_ptr, int, int ] ],
	SDL_GetWindowMinimumSize: [ void_type, [ SDL_Window_ptr, int_ptr, int_ptr ] ],
	SDL_SetWindowMaximumSize: [ void_type, [ SDL_Window_ptr, int, int ] ],
	SDL_GetWindowMaximumSize: [ void_type, [ SDL_Window_ptr, int_ptr, int_ptr ] ],
	SDL_SetWindowBordered: [ void_type, [ SDL_Window_ptr, bool ] ],
	SDL_ShowWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_HideWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_RaiseWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_MaximizeWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_MinimizeWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_RestoreWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_SetWindowFullscreen: [ int, [ SDL_Window_ptr, uint32 ] ],
	SDL_GetWindowSurface: [ SDL_Surface_ptr, [ SDL_Window_ptr ] ],
	SDL_UpdateWindowSurface: [ int, [ SDL_Window_ptr ] ],
	SDL_UpdateWindowSurfaceRects: [ int, [ SDL_Window_ptr, SDL_Rect_ptr, int ] ],
	SDL_SetWindowGrab: [ void_type, [ SDL_Window_ptr, bool ] ],
	SDL_GetWindowGrab: [ bool, [ SDL_Window_ptr ] ],
	SDL_SetWindowBrightness: [ int, [ SDL_Window_ptr, float ] ],
	SDL_GetWindowBrightness: [ float, [ SDL_Window_ptr ] ],
	SDL_SetWindowGammaRamp: [ int, [ SDL_Window_ptr, uint16_ptr, uint16_ptr, uint16_ptr ] ],
	SDL_GetWindowGammaRamp: [ int, [ SDL_Window_ptr, uint16_ptr, uint16_ptr, uint16_ptr ] ],
	SDL_DestroyWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_IsScreenSaverEnabled: [ bool, [] ],
	SDL_EnableScreenSaver: [ void_type, [] ],
	SDL_DisableScreenSaver: [ bool, [] ],
	SDL_GL_LoadLibrary: [ int, [ string ] ],
	SDL_GL_GetProcAddress: [ void_ptr, [ string ] ],
	SDL_GL_UnloadLibrary: [ void_type, [] ],
	SDL_GL_ExtensionSupported: [ bool, [ string ] ],
	SDL_GL_ResetAttributes: [ void_type, [] ],
	SDL_GL_SetAttribute: [ SDL_GLattr_enum, [ int, int ] ],
	SDL_GL_GetAttribute: [ SDL_GLattr_enum, [ int, int ] ],
	SDL_GL_CreateContext: [ SDL_GLContext, [ SDL_Window_ptr ] ],
	SDL_GL_MakeCurrent: [ int, [ SDL_Window_ptr, SDL_GLContext ] ],
	SDL_GL_GetCurrentWindow: [ SDL_Window_ptr, [] ],
	SDL_GL_GetCurrentContext: [ SDL_GLContext, [] ],
	SDL_GL_GetDrawableSize: [ void_type, [ SDL_Window_ptr, int_ptr, int_ptr ] ],
	SDL_GL_SetSwapInterval: [ int, [ int ] ],
	SDL_GL_GetSwapInterval: [ int, [] ],
	SDL_GL_SwapWindow: [ void_type, [ SDL_Window_ptr ] ],
	SDL_GL_DeleteContext: [ void_type, [ SDL_GLContext ] ]
});

// export global
SDL_video.SDL_DisplayMode = SDL_DisplayMode;
SDL_video.SDL_Window = SDL_Window;
SDL_video.SDL_WindowFlags = SDL_WindowFlags;
SDL_video.SDL_WINDOWPOS_UNDEFINED_MASK = SDL_WINDOWPOS_UNDEFINED_MASK;
SDL_video.SDL_WINDOWPOS_UNDEFINED_DISPLAY = SDL_WINDOWPOS_UNDEFINED_DISPLAY;
SDL_video.SDL_WINDOWPOS_UNDEFINED = SDL_WINDOWPOS_UNDEFINED;
SDL_video.SDL_WINDOWPOS_ISUNDEFINED = SDL_WINDOWPOS_ISUNDEFINED;
SDL_video.SDL_WINDOWPOS_CENTERED_MASK = SDL_WINDOWPOS_CENTERED_MASK;
SDL_video.SDL_WINDOWPOS_CENTERED_DISPLAY = SDL_WINDOWPOS_CENTERED_DISPLAY;
SDL_video.SDL_WINDOWPOS_CENTERED = SDL_WINDOWPOS_CENTERED;
SDL_video.SDL_WINDOWPOS_ISCENTERED = SDL_WINDOWPOS_ISCENTERED;
SDL_video.SDL_WindowEventID = SDL_WindowEventID;
SDL_video.SDL_GLContext = SDL_GLContext;
SDL_video.SDL_GLattr = SDL_GLattr;
SDL_video.SDL_GLprofile = SDL_GLprofile;
SDL_video.SDL_GLcontextFlag = SDL_GLcontextFlag;

module.exports = SDL_video;