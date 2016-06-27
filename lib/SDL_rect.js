var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var SDL_Point = exports.SDL_Point = Struct({
	x: int32,
	y: int32,
})
var SDL_Rect = exports.SDL_Rect = Struct({
	x: int32,
	y: int32,
	w: int32,
	h: int32,
})
var uint32 = exports.uint32 = ref.types.uint32
var SDL_Rect_ptr = exports.SDL_Rect_ptr = ref.refType(SDL_Rect)
var SDL_Point_ptr = exports.SDL_Point_ptr = ref.refType(SDL_Point)
var int32_ptr = exports.int32_ptr = ref.refType(int32)

FFI.Library(__dirname + '/libSDL2', {
	SDL_HasIntersection: [ uint32, [ SDL_Rect_ptr, SDL_Rect_ptr, ] ],
	SDL_IntersectRect: [ uint32, [ SDL_Rect_ptr, SDL_Rect_ptr, SDL_Rect_ptr, ] ],
	SDL_UnionRect: [ voit, [ SDL_Rect_ptr, SDL_Rect_ptr, SDL_Rect_ptr, ] ],
	SDL_EnclosePoints: [ uint32, [ SDL_Point_ptr, int32, SDL_Rect_ptr, SDL_Rect_ptr, ] ],
	SDL_IntersectRectAndLine: [ uint32, [ SDL_Rect_ptr, int32_ptr, int32_ptr, int32_ptr, int32_ptr, ] ],
}, exports)