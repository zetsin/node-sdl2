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
var SDL_SpinLock = exports.SDL_SpinLock = int32
var uint32 = exports.uint32 = ref.types.uint32
var SDL_SpinLock_ptr = exports.SDL_SpinLock_ptr = ref.refType(SDL_SpinLock)
var c__SA_SDL_atomic_t = exports.c__SA_SDL_atomic_t = Struct({
	value: int32,
})
var SDL_atomic_t = exports.SDL_atomic_t = c__SA_SDL_atomic_t
var SDL_atomic_t_ptr = exports.SDL_atomic_t_ptr = ref.refType(SDL_atomic_t)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var voit_ptr_ptr = exports.voit_ptr_ptr = ref.refType(voit_ptr)

FFI.Library(__dirname + '/libSDL2', {
	SDL_AtomicTryLock: [ uint32, [ SDL_SpinLock_ptr, ] ],
	SDL_AtomicLock: [ voit, [ SDL_SpinLock_ptr, ] ],
	SDL_AtomicUnlock: [ voit, [ SDL_SpinLock_ptr, ] ],
	SDL_AtomicCAS: [ uint32, [ SDL_atomic_t_ptr, int32, int32, ] ],
	SDL_AtomicSet: [ int32, [ SDL_atomic_t_ptr, int32, ] ],
	SDL_AtomicGet: [ int32, [ SDL_atomic_t_ptr, ] ],
	SDL_AtomicAdd: [ int32, [ SDL_atomic_t_ptr, int32, ] ],
	SDL_AtomicCASPtr: [ uint32, [ voit_ptr_ptr, voit_ptr, voit_ptr, ] ],
	SDL_AtomicSetPtr: [ voit_ptr, [ voit_ptr_ptr, voit_ptr, ] ],
	SDL_AtomicGetPtr: [ voit_ptr, [ voit_ptr_ptr, ] ],
}, exports)