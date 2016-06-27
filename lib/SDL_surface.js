var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_pixels_lib = require('./SDL_pixels')
var SDL_rect_lib = require('./SDL_rect')
var SDL_rwops_lib = require('./SDL_rwops')

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
var Uint32 = SDL_stdinc_lib.Uint32
var SDL_PixelFormat = SDL_pixels_lib.SDL_PixelFormat
var SDL_PixelFormat_ptr = exports.SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat)
var int32 = exports.int32 = ref.types.int32
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_Rect = SDL_rect_lib.SDL_Rect
var SDL_BlitMap = exports.SDL_BlitMap = Struct({
})
var SDL_BlitMap_ptr = exports.SDL_BlitMap_ptr = ref.refType(SDL_BlitMap)
var SDL_Surface = exports.SDL_Surface = Struct({
	flags: Uint32,
	format: SDL_PixelFormat_ptr,
	w: int32,
	h: int32,
	pitch: int32,
	pixels: voit_ptr,
	userdata: voit_ptr,
	locked: int32,
	lock_data: voit_ptr,
	clip_rect: SDL_Rect,
	map: SDL_BlitMap_ptr,
	refcount: int32,
})
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)
var SDL_Rect_ptr = exports.SDL_Rect_ptr = ref.refType(SDL_Rect)
var SDL_blit = exports.SDL_blit = FFI.Function( int32, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr, ] )
var SDL_Palette = SDL_pixels_lib.SDL_Palette
var SDL_Palette_ptr = exports.SDL_Palette_ptr = ref.refType(SDL_Palette)
var SDL_RWops = SDL_rwops_lib.SDL_RWops
var SDL_RWops_ptr = exports.SDL_RWops_ptr = ref.refType(SDL_RWops)
var Uint32_ptr = exports.Uint32_ptr = ref.refType(Uint32)
var Uint8 = SDL_stdinc_lib.Uint8
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var uint32 = exports.uint32 = ref.types.uint32
var uint32_ptr = exports.uint32_ptr = ref.refType(uint32)

FFI.Library(__dirname + '/libSDL2', {
	SDL_CreateRGBSurface: [ SDL_Surface_ptr, [ Uint32, int32, int32, int32, Uint32, Uint32, Uint32, Uint32, ] ],
	SDL_CreateRGBSurfaceFrom: [ SDL_Surface_ptr, [ voit_ptr, int32, int32, int32, int32, Uint32, Uint32, Uint32, Uint32, ] ],
	SDL_FreeSurface: [ voit, [ SDL_Surface_ptr, ] ],
	SDL_SetSurfacePalette: [ int32, [ SDL_Surface_ptr, SDL_Palette_ptr, ] ],
	SDL_LockSurface: [ int32, [ SDL_Surface_ptr, ] ],
	SDL_UnlockSurface: [ voit, [ SDL_Surface_ptr, ] ],
	SDL_LoadBMP_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, int32, ] ],
	SDL_SaveBMP_RW: [ int32, [ SDL_Surface_ptr, SDL_RWops_ptr, int32, ] ],
	SDL_SetSurfaceRLE: [ int32, [ SDL_Surface_ptr, int32, ] ],
	SDL_SetColorKey: [ int32, [ SDL_Surface_ptr, int32, Uint32, ] ],
	SDL_GetColorKey: [ int32, [ SDL_Surface_ptr, Uint32_ptr, ] ],
	SDL_SetSurfaceColorMod: [ int32, [ SDL_Surface_ptr, Uint8, Uint8, Uint8, ] ],
	SDL_GetSurfaceColorMod: [ int32, [ SDL_Surface_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, ] ],
	SDL_SetSurfaceAlphaMod: [ int32, [ SDL_Surface_ptr, Uint8, ] ],
	SDL_GetSurfaceAlphaMod: [ int32, [ SDL_Surface_ptr, Uint8_ptr, ] ],
	SDL_SetSurfaceBlendMode: [ int32, [ SDL_Surface_ptr, uint32, ] ],
	SDL_GetSurfaceBlendMode: [ int32, [ SDL_Surface_ptr, uint32_ptr, ] ],
	SDL_SetClipRect: [ uint32, [ SDL_Surface_ptr, SDL_Rect_ptr, ] ],
	SDL_GetClipRect: [ voit, [ SDL_Surface_ptr, SDL_Rect_ptr, ] ],
	SDL_ConvertSurface: [ SDL_Surface_ptr, [ SDL_Surface_ptr, SDL_PixelFormat_ptr, Uint32, ] ],
	SDL_ConvertSurfaceFormat: [ SDL_Surface_ptr, [ SDL_Surface_ptr, Uint32, Uint32, ] ],
	SDL_ConvertPixels: [ int32, [ int32, int32, Uint32, voit_ptr, int32, Uint32, voit_ptr, int32, ] ],
	SDL_FillRect: [ int32, [ SDL_Surface_ptr, SDL_Rect_ptr, Uint32, ] ],
	SDL_FillRects: [ int32, [ SDL_Surface_ptr, SDL_Rect_ptr, int32, Uint32, ] ],
	SDL_UpperBlit: [ int32, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr, ] ],
	SDL_LowerBlit: [ int32, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr, ] ],
	SDL_SoftStretch: [ int32, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr, ] ],
	SDL_UpperBlitScaled: [ int32, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr, ] ],
	SDL_LowerBlitScaled: [ int32, [ SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr, ] ],
}, exports)