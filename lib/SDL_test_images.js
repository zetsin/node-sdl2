var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_surface_lib = require('./SDL_surface')


var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var uint32 = exports.uint32 = ref.types.uint32
var string = exports.string = ref.types.CString
var SDLTest_SurfaceImage_s = exports.SDLTest_SurfaceImage_s = Struct({
	width: int32,
	height: int32,
	bytes_per_pixel: uint32,
	pixel_data: string,
})
var SDLTest_SurfaceImage_t = exports.SDLTest_SurfaceImage_t = SDLTest_SurfaceImage_s
var SDL_Surface = SDL_surface_lib.SDL_Surface
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)

FFI.Library(__dirname + '/libSDL2', {
	SDLTest_ImageBlit: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageBlitColor: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageBlitAlpha: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageBlitBlendAdd: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageBlitBlend: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageBlitBlendMod: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageBlitBlendNone: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageBlitBlendAll: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImageFace: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImagePrimitives: [ SDL_Surface_ptr, [ ] ],
	SDLTest_ImagePrimitivesBlend: [ SDL_Surface_ptr, [ ] ],
}, exports)