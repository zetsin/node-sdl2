var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var ArrayType = require('ref-array');
var SDL_video = require('./SDL_video.js');
var SDL_surface = require('./SDL_surface.js');
var SDL_rect = require('./SDL_rect.js');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var uint32 = ref.types.uint32;
var uint8 = ref.types.uint8;
var float = ref.types.float;
var double = ref.types.double;
var string = ref.types.CString;
var SDL_Window = SDL_video.SDL_Window;
var SDL_Surface = SDL_surface.SDL_Surface;
var SDL_BlendMode_enum = int;
var SDL_Rect = SDL_rect.SDL_Rect;
var SDL_Point = SDL_rect.SDL_Point;
var SDL_RendererFlip_enum = int;
var SDL_Point_array = ArrayType(SDL_Point);

// basic pointer
var void_ptr = ref.refType(void_type);
var void_ptr_ptr = ref.refType(void_ptr);
var int_ptr = ref.refType(int);
var uint32_ptr = ref.refType(uint32);
var uint8_ptr = ref.refType(uint8);
var float_ptr = ref.refType(float);
var SDL_Window_ptr = ref.refType(SDL_Window);
var SDL_Window_ptr_ptr = ref.refType(SDL_Window_ptr);
var SDL_Surface_ptr = ref.refType(SDL_Surface);
var SDL_BlendMode_enum_ptr = ref.refType(SDL_BlendMode_enum);
var SDL_Rect_ptr = ref.refType(SDL_Rect);
var SDL_Point_ptr = ref.refType(SDL_Point);

// global define
var SDL_RendererFlags = {
	SDL_RENDERER_SOFTWARE: 0x00000001,
	SDL_RENDERER_ACCELERATED: 0x00000002,
    SDL_RENDERER_PRESENTVSYNC: 0x00000004,
    SDL_RENDERER_TARGETTEXTURE: 0x00000008
};
var SDL_RendererInfo = Struct({
	name: string,
	flags: uint32,
	num_texture_formats: uint32,
	texture_formats: ArrayType(uint32, 16),
	max_texture_width: int,
	max_texture_height: int
});
var SDL_TextureAccess = {
	SDL_TEXTUREACCESS_STATIC: 0,
	SDL_TEXTUREACCESS_STREAMING: 1,
    SDL_TEXTUREACCESS_TARGET: 2
};
var SDL_TextureModulate = {
	SDL_TEXTUREMODULATE_NONE: 0x00000000,
	SDL_TEXTUREMODULATE_COLOR: 0x00000001,
    SDL_TEXTUREMODULATE_ALPHA: 0x00000002
};
var SDL_RendererFlip = {
	SDL_FLIP_NONE: 0x00000000,
	SDL_FLIP_HORIZONTAL: 0x00000001,
    SDL_FLIP_VERTICAL: 0x00000002
};
var SDL_Renderer = void_type;
var SDL_Texture = void_type;

// help pointer
var SDL_RendererInfo_ptr = ref.refType(SDL_RendererInfo);
var SDL_Renderer_ptr = ref.refType(SDL_Renderer);
var SDL_Renderer_ptr_ptr = ref.refType(SDL_Renderer_ptr);
var SDL_Texture_ptr = ref.refType(SDL_Texture);

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_renderer = ffi.Library(libraryFile, {
	SDL_GetNumRenderDrivers: [ int, [] ],
	SDL_GetRenderDriverInfo: [ int, [ int, SDL_RendererInfo_ptr ] ],
	SDL_CreateWindowAndRenderer: [ int, [ int, int, uint32, SDL_Window_ptr_ptr, SDL_RendererInfo_ptr ] ],
	SDL_CreateRenderer: [ SDL_Renderer_ptr, [ SDL_Window_ptr, int, uint32 ] ],
	SDL_CreateSoftwareRenderer:  [ SDL_Renderer_ptr, [ SDL_Surface_ptr ] ],
	SDL_GetRenderer: [ SDL_Renderer_ptr, [ SDL_Window_ptr ] ],
	SDL_GetRendererInfo: [ int, [ SDL_Renderer_ptr, SDL_RendererInfo_ptr ] ],
	SDL_GetRendererOutputSize: [ int, [ SDL_Renderer_ptr, int_ptr, int_ptr ] ],
	SDL_CreateTexture: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, uint32, int, int, int ] ],
	SDL_CreateTextureFromSurface: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, SDL_Surface_ptr ] ],
	SDL_QueryTexture: [ int, [SDL_Texture_ptr, uint32_ptr, int_ptr, int_ptr, int_ptr ] ],
	SDL_SetTextureColorMod: [ int, [ SDL_Texture_ptr, uint8, uint8, uint8 ] ],
	SDL_GetTextureColorMod: [ int, [ SDL_Texture_ptr, uint8_ptr, uint8_ptr, uint8_ptr ] ],
	SDL_SetTextureAlphaMod: [ int, [ SDL_Texture_ptr, uint8 ] ],
	SDL_GetTextureAlphaMod: [ int, [ SDL_Texture_ptr, uint8_ptr ] ],
	SDL_SetTextureBlendMode: [ int, [ SDL_Texture_ptr, SDL_BlendMode_enum ] ],
	SDL_GetTextureBlendMode: [ int, [ SDL_Texture_ptr, SDL_BlendMode_enum_ptr ] ],
	SDL_UpdateTexture: [ int, [ SDL_Texture_ptr, SDL_Rect_ptr, void_ptr, int ] ],
	SDL_UpdateYUVTexture: [ int, [ SDL_Texture_ptr, SDL_Rect_ptr, uint8_ptr, int, uint8_ptr, int, uint8_ptr, int ] ],
	SDL_LockTexture: [ int, [ SDL_Texture_ptr, SDL_Rect_ptr, void_ptr_ptr, int_ptr ] ],
	SDL_UnlockTexture: [ void_type, [ SDL_Texture_ptr ] ],
	SDL_RenderTargetSupported: [ bool, [ SDL_Renderer_ptr ] ],
	SDL_SetRenderTarget: [ int, [ SDL_Renderer_ptr, SDL_Texture_ptr ] ],
	SDL_GetRenderTarget: [ SDL_Texture_ptr, [ SDL_Renderer_ptr ] ],
	SDL_RenderSetLogicalSize: [ int, [ SDL_Renderer_ptr, int, int ] ],
	SDL_RenderGetLogicalSize: [ void_type, [ SDL_Renderer_ptr, int_ptr, int_ptr ] ],
	SDL_RenderSetViewport: [ int, [ SDL_Renderer_ptr, SDL_Rect_ptr ] ],
	SDL_RenderGetViewport: [ void_type, [ SDL_Renderer_ptr, SDL_Rect_ptr ] ],
	SDL_RenderSetClipRect: [ int, [ SDL_Renderer_ptr, SDL_Rect_ptr ] ],
	SDL_RenderGetClipRect: [ void_type, [ SDL_Renderer_ptr, SDL_Rect_ptr ] ],
	SDL_RenderSetScale: [ int, [ SDL_Renderer_ptr, float, float ] ],
	SDL_RenderGetScale: [ void_type, [ SDL_Renderer_ptr, float_ptr, float_ptr ] ],
	SDL_SetRenderDrawColor: [ int, [ SDL_Renderer_ptr, uint8, uint8, uint8, uint8 ] ],
	SDL_GetRenderDrawColor: [ int, [ SDL_Renderer_ptr, uint8_ptr, uint8_ptr, uint8_ptr, uint8_ptr ] ],
	SDL_SetRenderDrawBlendMode: [ int, [ SDL_Renderer_ptr, SDL_BlendMode_enum ] ],
	SDL_GetRenderDrawBlendMode: [ int, [ SDL_Renderer_ptr, SDL_BlendMode_enum_ptr ] ],
	SDL_RenderClear: [ int, [ SDL_Renderer_ptr ] ],
	SDL_RenderDrawPoint: [ int, [ SDL_Renderer_ptr, int, int ] ],
	SDL_RenderDrawPoints: [ int, [ SDL_Renderer_ptr, SDL_Point_ptr, int ] ],
	SDL_RenderDrawLine: [ int, [ SDL_Renderer_ptr, int, int, int, int ] ],
	SDL_RenderDrawLines: [ int, [ SDL_Renderer_ptr, SDL_Point_ptr, int ] ],
	SDL_RenderDrawRect: [ int, [ SDL_Renderer_ptr, SDL_Rect_ptr ] ],
	SDL_RenderDrawRects: [ int, [ SDL_Renderer_ptr, SDL_Rect_ptr, int ] ],
	SDL_RenderFillRect: [ int, [ SDL_Renderer_ptr, SDL_Rect_ptr ] ],
	SDL_RenderFillRects: [ int, [ SDL_Renderer_ptr, SDL_Rect_ptr, int ] ],
	SDL_RenderCopy: [ int, [ SDL_Renderer_ptr, SDL_Texture_ptr, SDL_Rect_ptr, SDL_Rect_ptr ] ],
	SDL_RenderCopyEx: [ int, [ SDL_Renderer_ptr, SDL_Texture_ptr, SDL_Rect_ptr, SDL_Rect_ptr, double, SDL_Point_ptr, SDL_RendererFlip_enum ] ],
	SDL_RenderReadPixels: [ int, [ SDL_Renderer_ptr, SDL_Rect_ptr, uint32, void_ptr, int ] ],
	SDL_RenderPresent: [ void_type, [ SDL_Renderer_ptr ] ],
	SDL_DestroyTexture: [ void_type, [ SDL_Texture_ptr ] ],
	SDL_DestroyRenderer: [ void_type, [ SDL_Renderer_ptr ] ],
	SDL_GL_BindTexture: [ int, [ SDL_Texture_ptr, float_ptr, float_ptr ] ],
	SDL_GL_UnbindTexture: [ int, [ SDL_Texture_ptr ] ]
});

// export global
SDL_renderer.SDL_RendererFlags = SDL_RendererFlags;
SDL_renderer.SDL_RendererInfo = SDL_RendererInfo;
SDL_renderer.SDL_TextureAccess = SDL_TextureAccess;
SDL_renderer.SDL_TextureModulate = SDL_TextureModulate;
SDL_renderer.SDL_RendererFlip = SDL_RendererFlip;
SDL_renderer.SDL_Renderer = SDL_Renderer;
SDL_renderer.SDL_Texture = SDL_Texture;

module.exports = SDL_renderer;