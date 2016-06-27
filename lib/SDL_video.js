var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_rect_lib = require('./SDL_rect')
var SDL_surface_lib = require('./SDL_surface')

var SDL_WindowFlags = exports.SDL_WindowFlags = {
	SDL_WINDOW_FULLSCREEN: 1,
	SDL_WINDOW_OPENGL: 2,
	SDL_WINDOW_SHOWN: 4,
	SDL_WINDOW_HIDDEN: 8,
	SDL_WINDOW_BORDERLESS: 16,
	SDL_WINDOW_RESIZABLE: 32,
	SDL_WINDOW_MINIMIZED: 64,
	SDL_WINDOW_MAXIMIZED: 128,
	SDL_WINDOW_INPUT_GRABBED: 256,
	SDL_WINDOW_INPUT_FOCUS: 512,
	SDL_WINDOW_MOUSE_FOCUS: 1024,
	SDL_WINDOW_FULLSCREEN_DESKTOP: 4097,
	SDL_WINDOW_FOREIGN: 2048,
	SDL_WINDOW_ALLOW_HIGHDPI: 8192,
	SDL_WINDOW_MOUSE_CAPTURE: 16384,
}
var SDL_WindowEventID = exports.SDL_WindowEventID = {
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
	SDL_WINDOWEVENT_CLOSE: 14,
}
var SDL_GLattr = exports.SDL_GLattr = {
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
	SDL_GL_FRAMEBUFFER_SRGB_CAPABLE: 23,
	SDL_GL_CONTEXT_RELEASE_BEHAVIOR: 24,
}
var SDL_GLprofile = exports.SDL_GLprofile = {
	SDL_GL_CONTEXT_PROFILE_CORE: 1,
	SDL_GL_CONTEXT_PROFILE_COMPATIBILITY: 2,
	SDL_GL_CONTEXT_PROFILE_ES: 4,
}
var SDL_GLcontextFlag = exports.SDL_GLcontextFlag = {
	SDL_GL_CONTEXT_DEBUG_FLAG: 1,
	SDL_GL_CONTEXT_FORWARD_COMPATIBLE_FLAG: 2,
	SDL_GL_CONTEXT_ROBUST_ACCESS_FLAG: 4,
	SDL_GL_CONTEXT_RESET_ISOLATION_FLAG: 8,
}
var SDL_GLcontextReleaseFlag = exports.SDL_GLcontextReleaseFlag = {
	SDL_GL_CONTEXT_RELEASE_BEHAVIOR_NONE: 0,
	SDL_GL_CONTEXT_RELEASE_BEHAVIOR_FLUSH: 1,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}
var SDL_HitTestResult = exports.SDL_HitTestResult = {
	SDL_HITTEST_NORMAL: 0,
	SDL_HITTEST_DRAGGABLE: 1,
	SDL_HITTEST_RESIZE_TOPLEFT: 2,
	SDL_HITTEST_RESIZE_TOP: 3,
	SDL_HITTEST_RESIZE_TOPRIGHT: 4,
	SDL_HITTEST_RESIZE_RIGHT: 5,
	SDL_HITTEST_RESIZE_BOTTOMRIGHT: 6,
	SDL_HITTEST_RESIZE_BOTTOM: 7,
	SDL_HITTEST_RESIZE_BOTTOMLEFT: 8,
	SDL_HITTEST_RESIZE_LEFT: 9,
}
var c__EA_SDL_HitTestResult = exports.c__EA_SDL_HitTestResult = {
	SDL_HITTEST_NORMAL: 0,
	SDL_HITTEST_DRAGGABLE: 1,
	SDL_HITTEST_RESIZE_TOPLEFT: 2,
	SDL_HITTEST_RESIZE_TOP: 3,
	SDL_HITTEST_RESIZE_TOPRIGHT: 4,
	SDL_HITTEST_RESIZE_RIGHT: 5,
	SDL_HITTEST_RESIZE_BOTTOMRIGHT: 6,
	SDL_HITTEST_RESIZE_BOTTOM: 7,
	SDL_HITTEST_RESIZE_BOTTOMLEFT: 8,
	SDL_HITTEST_RESIZE_LEFT: 9,
}

var voit = exports.voit = ref.types.void
var Uint32 = SDL_stdinc_lib.Uint32
var int32 = exports.int32 = ref.types.int32
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var c__SA_SDL_DisplayMode = exports.c__SA_SDL_DisplayMode = Struct({
	format: Uint32,
	w: int32,
	h: int32,
	refresh_rate: int32,
	driverdata: voit_ptr,
})
var SDL_DisplayMode = exports.SDL_DisplayMode = c__SA_SDL_DisplayMode
var SDL_Window = exports.SDL_Window = Struct({
})
var uint32 = exports.uint32 = ref.types.uint32
var SDL_GLContext = exports.SDL_GLContext = voit_ptr
var string = exports.string = ref.types.CString
var SDL_Rect = SDL_rect_lib.SDL_Rect
var SDL_Rect_ptr = exports.SDL_Rect_ptr = ref.refType(SDL_Rect)
var float = exports.float = ref.types.float
var float_ptr = exports.float_ptr = ref.refType(float)
var SDL_DisplayMode_ptr = exports.SDL_DisplayMode_ptr = ref.refType(SDL_DisplayMode)
var SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window)
var SDL_Surface = SDL_surface_lib.SDL_Surface
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var Uint16 = SDL_stdinc_lib.Uint16
var Uint16_ptr = exports.Uint16_ptr = ref.refType(Uint16)
var SDL_Point = SDL_rect_lib.SDL_Point
var SDL_Point_ptr = exports.SDL_Point_ptr = ref.refType(SDL_Point)
var SDL_HitTest = exports.SDL_HitTest = FFI.Function( uint32, [ SDL_Window_ptr, SDL_Point_ptr, voit_ptr, ] )

FFI.Library(__dirname + '/libSDL2', {
	SDL_GetNumVideoDrivers: [ int32, [ ] ],
	SDL_GetVideoDriver: [ string, [ int32, ] ],
	SDL_VideoInit: [ int32, [ string, ] ],
	SDL_VideoQuit: [ voit, [ ] ],
	SDL_GetCurrentVideoDriver: [ string, [ ] ],
	SDL_GetNumVideoDisplays: [ int32, [ ] ],
	SDL_GetDisplayName: [ string, [ int32, ] ],
	SDL_GetDisplayBounds: [ int32, [ int32, SDL_Rect_ptr, ] ],
	SDL_GetDisplayDPI: [ int32, [ int32, float_ptr, float_ptr, float_ptr, ] ],
	SDL_GetNumDisplayModes: [ int32, [ int32, ] ],
	SDL_GetDisplayMode: [ int32, [ int32, int32, SDL_DisplayMode_ptr, ] ],
	SDL_GetDesktopDisplayMode: [ int32, [ int32, SDL_DisplayMode_ptr, ] ],
	SDL_GetCurrentDisplayMode: [ int32, [ int32, SDL_DisplayMode_ptr, ] ],
	SDL_GetClosestDisplayMode: [ SDL_DisplayMode_ptr, [ int32, SDL_DisplayMode_ptr, SDL_DisplayMode_ptr, ] ],
	SDL_GetWindowDisplayIndex: [ int32, [ SDL_Window_ptr, ] ],
	SDL_SetWindowDisplayMode: [ int32, [ SDL_Window_ptr, SDL_DisplayMode_ptr, ] ],
	SDL_GetWindowDisplayMode: [ int32, [ SDL_Window_ptr, SDL_DisplayMode_ptr, ] ],
	SDL_GetWindowPixelFormat: [ Uint32, [ SDL_Window_ptr, ] ],
	SDL_CreateWindow: [ SDL_Window_ptr, [ string, int32, int32, int32, int32, Uint32, ] ],
	SDL_CreateWindowFrom: [ SDL_Window_ptr, [ voit_ptr, ] ],
	SDL_GetWindowID: [ Uint32, [ SDL_Window_ptr, ] ],
	SDL_GetWindowFromID: [ SDL_Window_ptr, [ Uint32, ] ],
	SDL_GetWindowFlags: [ Uint32, [ SDL_Window_ptr, ] ],
	SDL_SetWindowTitle: [ voit, [ SDL_Window_ptr, string, ] ],
	SDL_GetWindowTitle: [ string, [ SDL_Window_ptr, ] ],
	SDL_SetWindowIcon: [ voit, [ SDL_Window_ptr, SDL_Surface_ptr, ] ],
	SDL_SetWindowData: [ voit_ptr, [ SDL_Window_ptr, string, voit_ptr, ] ],
	SDL_GetWindowData: [ voit_ptr, [ SDL_Window_ptr, string, ] ],
	SDL_SetWindowPosition: [ voit, [ SDL_Window_ptr, int32, int32, ] ],
	SDL_GetWindowPosition: [ voit, [ SDL_Window_ptr, int32_ptr, int32_ptr, ] ],
	SDL_SetWindowSize: [ voit, [ SDL_Window_ptr, int32, int32, ] ],
	SDL_GetWindowSize: [ voit, [ SDL_Window_ptr, int32_ptr, int32_ptr, ] ],
	SDL_SetWindowMinimumSize: [ voit, [ SDL_Window_ptr, int32, int32, ] ],
	SDL_GetWindowMinimumSize: [ voit, [ SDL_Window_ptr, int32_ptr, int32_ptr, ] ],
	SDL_SetWindowMaximumSize: [ voit, [ SDL_Window_ptr, int32, int32, ] ],
	SDL_GetWindowMaximumSize: [ voit, [ SDL_Window_ptr, int32_ptr, int32_ptr, ] ],
	SDL_SetWindowBordered: [ voit, [ SDL_Window_ptr, uint32, ] ],
	SDL_ShowWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_HideWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_RaiseWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_MaximizeWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_MinimizeWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_RestoreWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_SetWindowFullscreen: [ int32, [ SDL_Window_ptr, Uint32, ] ],
	SDL_GetWindowSurface: [ SDL_Surface_ptr, [ SDL_Window_ptr, ] ],
	SDL_UpdateWindowSurface: [ int32, [ SDL_Window_ptr, ] ],
	SDL_UpdateWindowSurfaceRects: [ int32, [ SDL_Window_ptr, SDL_Rect_ptr, int32, ] ],
	SDL_SetWindowGrab: [ voit, [ SDL_Window_ptr, uint32, ] ],
	SDL_GetWindowGrab: [ uint32, [ SDL_Window_ptr, ] ],
	SDL_GetGrabbedWindow: [ SDL_Window_ptr, [ ] ],
	SDL_SetWindowBrightness: [ int32, [ SDL_Window_ptr, float, ] ],
	SDL_GetWindowBrightness: [ float, [ SDL_Window_ptr, ] ],
	SDL_SetWindowGammaRamp: [ int32, [ SDL_Window_ptr, Uint16_ptr, Uint16_ptr, Uint16_ptr, ] ],
	SDL_GetWindowGammaRamp: [ int32, [ SDL_Window_ptr, Uint16_ptr, Uint16_ptr, Uint16_ptr, ] ],
	SDL_SetWindowHitTest: [ int32, [ SDL_Window_ptr, SDL_HitTest, voit_ptr, ] ],
	SDL_DestroyWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_IsScreenSaverEnabled: [ uint32, [ ] ],
	SDL_EnableScreenSaver: [ voit, [ ] ],
	SDL_DisableScreenSaver: [ voit, [ ] ],
	SDL_GL_LoadLibrary: [ int32, [ string, ] ],
	SDL_GL_GetProcAddress: [ voit_ptr, [ string, ] ],
	SDL_GL_UnloadLibrary: [ voit, [ ] ],
	SDL_GL_ExtensionSupported: [ uint32, [ string, ] ],
	SDL_GL_ResetAttributes: [ voit, [ ] ],
	SDL_GL_SetAttribute: [ int32, [ uint32, int32, ] ],
	SDL_GL_GetAttribute: [ int32, [ uint32, int32_ptr, ] ],
	SDL_GL_CreateContext: [ SDL_GLContext, [ SDL_Window_ptr, ] ],
	SDL_GL_MakeCurrent: [ int32, [ SDL_Window_ptr, SDL_GLContext, ] ],
	SDL_GL_GetCurrentWindow: [ SDL_Window_ptr, [ ] ],
	SDL_GL_GetCurrentContext: [ SDL_GLContext, [ ] ],
	SDL_GL_GetDrawableSize: [ voit, [ SDL_Window_ptr, int32_ptr, int32_ptr, ] ],
	SDL_GL_SetSwapInterval: [ int32, [ int32, ] ],
	SDL_GL_GetSwapInterval: [ int32, [ ] ],
	SDL_GL_SwapWindow: [ voit, [ SDL_Window_ptr, ] ],
	SDL_GL_DeleteContext: [ voit, [ SDL_GLContext, ] ],
}, exports)