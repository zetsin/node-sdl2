var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')

var c_SDL_pixels_h_Ea = exports.c_SDL_pixels_h_Ea = {
	SDL_PIXELTYPE_UNKNOWN: 0,
	SDL_PIXELTYPE_INDEX1: 1,
	SDL_PIXELTYPE_INDEX4: 2,
	SDL_PIXELTYPE_INDEX8: 3,
	SDL_PIXELTYPE_PACKED8: 4,
	SDL_PIXELTYPE_PACKED16: 5,
	SDL_PIXELTYPE_PACKED32: 6,
	SDL_PIXELTYPE_ARRAYU8: 7,
	SDL_PIXELTYPE_ARRAYU16: 8,
	SDL_PIXELTYPE_ARRAYU32: 9,
	SDL_PIXELTYPE_ARRAYF16: 10,
	SDL_PIXELTYPE_ARRAYF32: 11,
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var Uint8 = SDL_stdinc_lib.Uint8
var SDL_Color = exports.SDL_Color = Struct({
	r: Uint8,
	g: Uint8,
	b: Uint8,
	a: Uint8,
})
var int32 = exports.int32 = ref.types.int32
var SDL_Color_ptr = exports.SDL_Color_ptr = ref.refType(SDL_Color)
var Uint32 = SDL_stdinc_lib.Uint32
var SDL_Palette = exports.SDL_Palette = Struct({
	ncolors: int32,
	colors: SDL_Color_ptr,
	version: Uint32,
	refcount: int32,
})
var SDL_Palette_ptr = exports.SDL_Palette_ptr = ref.refType(SDL_Palette)
var c__S_SDL_PixelFormat_FI_padding_arr = ArrayType(Uint8, 2)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_PixelFormat = exports.SDL_PixelFormat = Struct({
	format: Uint32,
	palette: SDL_Palette_ptr,
	BitsPerPixel: Uint8,
	BytesPerPixel: Uint8,
	padding: c__S_SDL_PixelFormat_FI_padding_arr,
	Rmask: Uint32,
	Gmask: Uint32,
	Bmask: Uint32,
	Amask: Uint32,
	Rloss: Uint8,
	Gloss: Uint8,
	Bloss: Uint8,
	Aloss: Uint8,
	Rshift: Uint8,
	Gshift: Uint8,
	Bshift: Uint8,
	Ashift: Uint8,
	refcount: int32,
	next: voit_ptr,
})
var string = exports.string = ref.types.CString
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var Uint32_ptr = exports.Uint32_ptr = ref.refType(Uint32)
var SDL_PixelFormat_ptr = exports.SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat)
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var float = exports.float = ref.types.float
var Uint16 = SDL_stdinc_lib.Uint16
var Uint16_ptr = exports.Uint16_ptr = ref.refType(Uint16)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_GetPixelFormatName: [ string, [ Uint32, ] ],
	SDL_PixelFormatEnumToMasks: [ uint32, [ Uint32, int32_ptr, Uint32_ptr, Uint32_ptr, Uint32_ptr, Uint32_ptr, ] ],
	SDL_MasksToPixelFormatEnum: [ Uint32, [ int32, Uint32, Uint32, Uint32, Uint32, ] ],
	SDL_AllocFormat: [ SDL_PixelFormat_ptr, [ Uint32, ] ],
	SDL_FreeFormat: [ voit, [ SDL_PixelFormat_ptr, ] ],
	SDL_AllocPalette: [ SDL_Palette_ptr, [ int32, ] ],
	SDL_SetPixelFormatPalette: [ int32, [ SDL_PixelFormat_ptr, SDL_Palette_ptr, ] ],
	SDL_SetPaletteColors: [ int32, [ SDL_Palette_ptr, SDL_Color_ptr, int32, int32, ] ],
	SDL_FreePalette: [ voit, [ SDL_Palette_ptr, ] ],
	SDL_MapRGB: [ Uint32, [ SDL_PixelFormat_ptr, Uint8, Uint8, Uint8, ] ],
	SDL_MapRGBA: [ Uint32, [ SDL_PixelFormat_ptr, Uint8, Uint8, Uint8, Uint8, ] ],
	SDL_GetRGB: [ voit, [ Uint32, SDL_PixelFormat_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, ] ],
	SDL_GetRGBA: [ voit, [ Uint32, SDL_PixelFormat_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, ] ],
	SDL_CalculateGammaRamp: [ voit, [ float, Uint16_ptr, ] ],
}, exports)