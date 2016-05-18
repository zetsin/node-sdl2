var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var int = ref.types.int;

// basic pointer
var int_ptr = ref.refType(int);

// global define
var SDL_Point = Struct({
	x: int,
	y: int
});
var SDL_Rect = Struct({
	x: int,
	y: int,
	w: int,
	h: int
});

// help pointer
var SDL_Point_ptr = ref.refType(SDL_Point);
var SDL_Rect_ptr = ref.refType(SDL_Rect);

// global function
var libraryFile = require('node-sdl2-prebuilt');
var SDL_rect = ffi.Library(libraryFile, {
	SDL_HasIntersection: [ bool, [ SDL_Rect_ptr, SDL_Rect_ptr ] ],
	SDL_IntersectRect: [ bool, [ SDL_Rect_ptr, SDL_Rect_ptr, SDL_Rect_ptr ] ],
	SDL_UnionRect: [ bool, [ SDL_Rect_ptr, SDL_Rect_ptr, SDL_Rect_ptr ] ],
	SDL_EnclosePoints: [ bool, [ SDL_Point_ptr, int, SDL_Rect_ptr, SDL_Rect_ptr ] ],
	SDL_IntersectRectAndLine: [ bool, [ SDL_Rect_ptr, int_ptr, int_ptr, int_ptr, int_ptr ] ]
});

// inline function
SDL_rect.SDL_RectEmpty = function(r) {
	return ((!r) || (r.w <= 0) || (r.h <= 0)) ? true : false;
};
SDL_rect.SDL_RectEquals = function(a, b) {
	return (a && b && (a.x == b.x) && (a.y == b.y) && (a.w == b.w) && (a.h == b.h)) ? true : false;
};

// export global
SDL_rect.SDL_Point = SDL_Point;
SDL_rect.SDL_Rect = SDL_Rect;


module.exports = SDL_rect;