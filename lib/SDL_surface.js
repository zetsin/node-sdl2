var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var SDL_pixels = require('./SDL_pixels.js');
var SDL_rect = require('./SDL_rect.js');
var SDL_rwops = require('./SDL_rwops.js');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;
var uint32 = ref.types.uint32;
var uint8 = ref.types.uint8;
var SDL_BlendMode_enum = int;

// basic pointer
var void_ptr = ref.refType(void_type);
var int_ptr = ref.refType(int);
var uint32_ptr = ref.refType(uint32);
var uint8_ptr = ref.refType(uint8);
var SDL_PixelFormat_ptr = ref.refType(SDL_pixels.SDL_PixelFormat);
var SDL_Palette_ptr = ref.refType(SDL_pixels.SDL_Palette);
var SDL_RWops_ptr = ref.refType(SDL_rwops.SDL_RWops);
var SDL_Rect_ptr = ref.refType(SDL_rect.SDL_Rect);
var SDL_BlendMode_enum_ptr = ref.refType(SDL_BlendMode_enum);

// global define
var SDL_SWSURFACE = 0;
var SDL_PREALLOC = 0x00000001;
var SDL_RLEACCEL = 0x00000002;
var SDL_DONTFREE = 0x00000004;
var SDL_MUSTLOCK = function(S) {
	return ((S.deref().flags & SDL_RLEACCEL) != 0);
};
var SDL_Surface = Struct({
	flags: uint32,
	format: SDL_PixelFormat_ptr,
	w: int,
	h: int,
	pitch: int,
	pixels: void_ptr,
	userdata: void_ptr,
	locked: int,
	lock_data: void_ptr,
	clip_rect: SDL_rect.SDL_Rect,
	map: void_ptr,
	refcount: int
});
var SDL_blit = void_ptr;

// help pointer
var SDL_Surface_ptr = ref.refType(SDL_Surface);

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_surface = ffi.Library(libraryFile, {
	SDL_CreateRGBSurface: [ SDL_Surface_ptr, [ uint32, int, int, int, uint32, uint32, uint32, uint32 ] ],
	SDL_CreateRGBSurfaceFrom: [ SDL_Surface_ptr, [ void_ptr, int, int, int, int, uint32, uint32, uint32, uint32 ] ],
	SDL_FreeSurface: [ void_type, [ SDL_Surface_ptr ] ],
	SDL_SetSurfacePalette: [ int, [ SDL_Surface_ptr, SDL_Palette_ptr ] ],
	SDL_LockSurface: [ int, [ SDL_Surface_ptr ] ],
	SDL_UnlockSurface: [ void_type, [ SDL_Surface_ptr ] ],
	SDL_LoadBMP_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, int ] ],
	SDL_SaveBMP_RW: [ int, [ SDL_Surface_ptr, SDL_RWops_ptr, int ] ],
	SDL_SetSurfaceRLE: [ int, [ SDL_Surface_ptr, int ] ],
	SDL_SetColorKey: [ int, [ SDL_Surface_ptr, int, uint32 ] ],
	SDL_GetColorKey: [ int, [ SDL_Surface_ptr, uint32_ptr ] ],
	SDL_SetSurfaceColorMod: [ int, [ SDL_Surface_ptr, uint8, uint8, uint8 ] ],
	SDL_GetSurfaceColorMod: [ int, [ SDL_Surface_ptr, uint8_ptr, uint8_ptr, uint8_ptr ] ],
	SDL_SetSurfaceAlphaMod: [ int, [ SDL_Surface_ptr, uint8 ] ],
	SDL_GetSurfaceAlphaMod: [ int, [ SDL_Surface_ptr, uint8_ptr ] ],
	SDL_SetSurfaceBlendMode: [ int, [ SDL_Surface_ptr, SDL_BlendMode_enum ] ],
	SDL_GetSurfaceBlendMode: [ int, [ SDL_Surface_ptr, SDL_BlendMode_enum_ptr ] ],
	SDL_SetClipRect: [ bool, [ SDL_Surface_ptr, SDL_Rect_ptr ] ],
	SDL_GetClipRect: [ void_type, [ SDL_Surface_ptr, SDL_Rect_ptr ] ],
	SDL_ConvertSurface: [ SDL_Surface_ptr, [ SDL_Surface_ptr, SDL_PixelFormat_ptr, uint32 ] ],
	SDL_ConvertSurfaceFormat: [ SDL_Surface_ptr, [ SDL_Surface_ptr, uint32, uint32 ] ],
	SDL_ConvertPixels: [ int, [ int, int, uint32, void_ptr, int, uint32, void_ptr, int ] ],
	SDL_FillRect: [ int, [ SDL_Surface_ptr, SDL_Rect_ptr, uint32 ] ],
	SDL_FillRects: [ int, [ SDL_Surface_ptr, SDL_Rect_ptr, int, uint32 ] ],
	SDL_UpperBlit: [ int, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr ] ],
	SDL_LowerBlit: [ int, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr ] ],
	SDL_SoftStretch: [ int, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr ] ],
	SDL_UpperBlitScaled: [ int, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr ] ],
	SDL_LowerBlitScaled: [ int, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr ] ]
});

// inline function
SDL_surface.SDL_LoadBMP = function(file) {
	return SDL_surface.SDL_LoadBMP_RW(SDL_rwops.SDL_RWFromFile(file, 'rb'), 1);
};
SDL_surface.SDL_SaveBMP = function(surface, file) {
	return SDL_surface.SDL_SaveBMP_RW(surface, SDL_rwops.SDL_RWFromFile(file, 'wb'), 1)
};
SDL_surface.SDL_BlitSurface = SDL_surface.SDL_UpperBlit;
SDL_surface.SDL_BlitScaled = SDL_Surface.SDL_UpperBlitScaled;

// export global
SDL_surface.SDL_Surface = SDL_Surface;

module.exports = SDL_surface;