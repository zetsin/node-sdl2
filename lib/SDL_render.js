var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_video_lib = require('./SDL_video')
var SDL_surface_lib = require('./SDL_surface')
var SDL_rect_lib = require('./SDL_rect')

var SDL_RendererFlags = exports.SDL_RendererFlags = {
	SDL_RENDERER_SOFTWARE: 1,
	SDL_RENDERER_ACCELERATED: 2,
	SDL_RENDERER_PRESENTVSYNC: 4,
	SDL_RENDERER_TARGETTEXTURE: 8,
}
var SDL_TextureAccess = exports.SDL_TextureAccess = {
	SDL_TEXTUREACCESS_STATIC: 0,
	SDL_TEXTUREACCESS_STREAMING: 1,
	SDL_TEXTUREACCESS_TARGET: 2,
}
var SDL_TextureModulate = exports.SDL_TextureModulate = {
	SDL_TEXTUREMODULATE_NONE: 0,
	SDL_TEXTUREMODULATE_COLOR: 1,
	SDL_TEXTUREMODULATE_ALPHA: 2,
}
var SDL_RendererFlip = exports.SDL_RendererFlip = {
	SDL_FLIP_NONE: 0,
	SDL_FLIP_HORIZONTAL: 1,
	SDL_FLIP_VERTICAL: 2,
}
var SDL_BlendMode = exports.SDL_BlendMode = {
	SDL_BLENDMODE_NONE: 0,
	SDL_BLENDMODE_BLEND: 1,
	SDL_BLENDMODE_ADD: 2,
	SDL_BLENDMODE_MOD: 4,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var string = exports.string = ref.types.CString
var Uint32 = SDL_stdinc_lib.Uint32
var c__S_SDL_RendererInfo_FI_texture_formats_arr = ArrayType(Uint32, 16)
var int32 = exports.int32 = ref.types.int32
var SDL_RendererInfo = exports.SDL_RendererInfo = Struct({
	name: string,
	flags: Uint32,
	num_texture_formats: Uint32,
	texture_formats: c__S_SDL_RendererInfo_FI_texture_formats_arr,
	max_texture_width: int32,
	max_texture_height: int32,
})
var SDL_Renderer = exports.SDL_Renderer = Struct({
})
var SDL_Texture = exports.SDL_Texture = Struct({
})
var SDL_RendererInfo_ptr = exports.SDL_RendererInfo_ptr = ref.refType(SDL_RendererInfo)
var SDL_Window = SDL_video_lib.SDL_Window
var SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window)
var SDL_Window_ptr_ptr = exports.SDL_Window_ptr_ptr = ref.refType(SDL_Window_ptr)
var SDL_Renderer_ptr = exports.SDL_Renderer_ptr = ref.refType(SDL_Renderer)
var SDL_Renderer_ptr_ptr = exports.SDL_Renderer_ptr_ptr = ref.refType(SDL_Renderer_ptr)
var SDL_Surface = SDL_surface_lib.SDL_Surface
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var SDL_Texture_ptr = exports.SDL_Texture_ptr = ref.refType(SDL_Texture)
var Uint32_ptr = exports.Uint32_ptr = ref.refType(Uint32)
var Uint8 = SDL_stdinc_lib.Uint8
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var uint32_ptr = exports.uint32_ptr = ref.refType(uint32)
var SDL_Rect = SDL_rect_lib.SDL_Rect
var SDL_Rect_ptr = exports.SDL_Rect_ptr = ref.refType(SDL_Rect)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var voit_ptr_ptr = exports.voit_ptr_ptr = ref.refType(voit_ptr)
var float = exports.float = ref.types.float
var float_ptr = exports.float_ptr = ref.refType(float)
var SDL_Point = SDL_rect_lib.SDL_Point
var SDL_Point_ptr = exports.SDL_Point_ptr = ref.refType(SDL_Point)
var double = exports.double = ref.types.double

FFI.Library(__dirname + '/libSDL2', {
	SDL_GetNumRenderDrivers: [ int32, [ ] ],
	SDL_GetRenderDriverInfo: [ int32, [ int32, SDL_RendererInfo_ptr, ] ],
	SDL_CreateWindowAndRenderer: [ int32, [ int32, int32, Uint32, SDL_Window_ptr_ptr, SDL_Renderer_ptr_ptr, ] ],
	SDL_CreateRenderer: [ SDL_Renderer_ptr, [ SDL_Window_ptr, int32, Uint32, ] ],
	SDL_CreateSoftwareRenderer: [ SDL_Renderer_ptr, [ SDL_Surface_ptr, ] ],
	SDL_GetRenderer: [ SDL_Renderer_ptr, [ SDL_Window_ptr, ] ],
	SDL_GetRendererInfo: [ int32, [ SDL_Renderer_ptr, SDL_RendererInfo_ptr, ] ],
	SDL_GetRendererOutputSize: [ int32, [ SDL_Renderer_ptr, int32_ptr, int32_ptr, ] ],
	SDL_CreateTexture: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, Uint32, int32, int32, int32, ] ],
	SDL_CreateTextureFromSurface: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, SDL_Surface_ptr, ] ],
	SDL_QueryTexture: [ int32, [ SDL_Texture_ptr, Uint32_ptr, int32_ptr, int32_ptr, int32_ptr, ] ],
	SDL_SetTextureColorMod: [ int32, [ SDL_Texture_ptr, Uint8, Uint8, Uint8, ] ],
	SDL_GetTextureColorMod: [ int32, [ SDL_Texture_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, ] ],
	SDL_SetTextureAlphaMod: [ int32, [ SDL_Texture_ptr, Uint8, ] ],
	SDL_GetTextureAlphaMod: [ int32, [ SDL_Texture_ptr, Uint8_ptr, ] ],
	SDL_SetTextureBlendMode: [ int32, [ SDL_Texture_ptr, uint32, ] ],
	SDL_GetTextureBlendMode: [ int32, [ SDL_Texture_ptr, uint32_ptr, ] ],
	SDL_UpdateTexture: [ int32, [ SDL_Texture_ptr, SDL_Rect_ptr, voit_ptr, int32, ] ],
	SDL_UpdateYUVTexture: [ int32, [ SDL_Texture_ptr, SDL_Rect_ptr, Uint8_ptr, int32, Uint8_ptr, int32, Uint8_ptr, int32, ] ],
	SDL_LockTexture: [ int32, [ SDL_Texture_ptr, SDL_Rect_ptr, voit_ptr_ptr, int32_ptr, ] ],
	SDL_UnlockTexture: [ voit, [ SDL_Texture_ptr, ] ],
	SDL_RenderTargetSupported: [ uint32, [ SDL_Renderer_ptr, ] ],
	SDL_SetRenderTarget: [ int32, [ SDL_Renderer_ptr, SDL_Texture_ptr, ] ],
	SDL_GetRenderTarget: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, ] ],
	SDL_RenderSetLogicalSize: [ int32, [ SDL_Renderer_ptr, int32, int32, ] ],
	SDL_RenderGetLogicalSize: [ voit, [ SDL_Renderer_ptr, int32_ptr, int32_ptr, ] ],
	SDL_RenderSetViewport: [ int32, [ SDL_Renderer_ptr, SDL_Rect_ptr, ] ],
	SDL_RenderGetViewport: [ voit, [ SDL_Renderer_ptr, SDL_Rect_ptr, ] ],
	SDL_RenderSetClipRect: [ int32, [ SDL_Renderer_ptr, SDL_Rect_ptr, ] ],
	SDL_RenderGetClipRect: [ voit, [ SDL_Renderer_ptr, SDL_Rect_ptr, ] ],
	SDL_RenderIsClipEnabled: [ uint32, [ SDL_Renderer_ptr, ] ],
	SDL_RenderSetScale: [ int32, [ SDL_Renderer_ptr, float, float, ] ],
	SDL_RenderGetScale: [ voit, [ SDL_Renderer_ptr, float_ptr, float_ptr, ] ],
	SDL_SetRenderDrawColor: [ int32, [ SDL_Renderer_ptr, Uint8, Uint8, Uint8, Uint8, ] ],
	SDL_GetRenderDrawColor: [ int32, [ SDL_Renderer_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, ] ],
	SDL_SetRenderDrawBlendMode: [ int32, [ SDL_Renderer_ptr, uint32, ] ],
	SDL_GetRenderDrawBlendMode: [ int32, [ SDL_Renderer_ptr, uint32_ptr, ] ],
	SDL_RenderClear: [ int32, [ SDL_Renderer_ptr, ] ],
	SDL_RenderDrawPoint: [ int32, [ SDL_Renderer_ptr, int32, int32, ] ],
	SDL_RenderDrawPoints: [ int32, [ SDL_Renderer_ptr, SDL_Point_ptr, int32, ] ],
	SDL_RenderDrawLine: [ int32, [ SDL_Renderer_ptr, int32, int32, int32, int32, ] ],
	SDL_RenderDrawLines: [ int32, [ SDL_Renderer_ptr, SDL_Point_ptr, int32, ] ],
	SDL_RenderDrawRect: [ int32, [ SDL_Renderer_ptr, SDL_Rect_ptr, ] ],
	SDL_RenderDrawRects: [ int32, [ SDL_Renderer_ptr, SDL_Rect_ptr, int32, ] ],
	SDL_RenderFillRect: [ int32, [ SDL_Renderer_ptr, SDL_Rect_ptr, ] ],
	SDL_RenderFillRects: [ int32, [ SDL_Renderer_ptr, SDL_Rect_ptr, int32, ] ],
	SDL_RenderCopy: [ int32, [ SDL_Renderer_ptr, SDL_Texture_ptr, SDL_Rect_ptr, SDL_Rect_ptr, ] ],
	SDL_RenderCopyEx: [ int32, [ SDL_Renderer_ptr, SDL_Texture_ptr, SDL_Rect_ptr, SDL_Rect_ptr, double, SDL_Point_ptr, uint32, ] ],
	SDL_RenderReadPixels: [ int32, [ SDL_Renderer_ptr, SDL_Rect_ptr, Uint32, voit_ptr, int32, ] ],
	SDL_RenderPresent: [ voit, [ SDL_Renderer_ptr, ] ],
	SDL_DestroyTexture: [ voit, [ SDL_Texture_ptr, ] ],
	SDL_DestroyRenderer: [ voit, [ SDL_Renderer_ptr, ] ],
	SDL_GL_BindTexture: [ int32, [ SDL_Texture_ptr, float_ptr, float_ptr, ] ],
	SDL_GL_UnbindTexture: [ int32, [ SDL_Texture_ptr, ] ],
}, exports)