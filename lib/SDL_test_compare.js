var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_surface_lib = require('./SDL_surface')


var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var SDL_Surface = SDL_surface_lib.SDL_Surface
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDLTest_CompareSurfaces: [ int32, [ SDL_Surface_ptr, SDL_Surface_ptr, int32, ] ],
}, exports)