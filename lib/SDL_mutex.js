var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')


var voit = exports.voit = ref.types.void
var SDL_mutex = exports.SDL_mutex = Struct({
})
var SDL_mutex_ptr = exports.SDL_mutex_ptr = ref.refType(SDL_mutex)
var int32 = exports.int32 = ref.types.int32
var SDL_semaphore = exports.SDL_semaphore = Struct({
})
var SDL_sem = exports.SDL_sem = SDL_semaphore
var SDL_sem_ptr = exports.SDL_sem_ptr = ref.refType(SDL_sem)
var Uint32 = SDL_stdinc_lib.Uint32
var SDL_cond = exports.SDL_cond = Struct({
})
var SDL_cond_ptr = exports.SDL_cond_ptr = ref.refType(SDL_cond)

FFI.Library('libSDL2', {
	SDL_CreateMutex: [ SDL_mutex_ptr, [ ] ],
	SDL_LockMutex: [ int32, [ SDL_mutex_ptr, ] ],
	SDL_TryLockMutex: [ int32, [ SDL_mutex_ptr, ] ],
	SDL_UnlockMutex: [ int32, [ SDL_mutex_ptr, ] ],
	SDL_DestroyMutex: [ voit, [ SDL_mutex_ptr, ] ],
	SDL_CreateSemaphore: [ SDL_sem_ptr, [ Uint32, ] ],
	SDL_DestroySemaphore: [ voit, [ SDL_sem_ptr, ] ],
	SDL_SemWait: [ int32, [ SDL_sem_ptr, ] ],
	SDL_SemTryWait: [ int32, [ SDL_sem_ptr, ] ],
	SDL_SemWaitTimeout: [ int32, [ SDL_sem_ptr, Uint32, ] ],
	SDL_SemPost: [ int32, [ SDL_sem_ptr, ] ],
	SDL_SemValue: [ Uint32, [ SDL_sem_ptr, ] ],
	SDL_CreateCond: [ SDL_cond_ptr, [ ] ],
	SDL_DestroyCond: [ voit, [ SDL_cond_ptr, ] ],
	SDL_CondSignal: [ int32, [ SDL_cond_ptr, ] ],
	SDL_CondBroadcast: [ int32, [ SDL_cond_ptr, ] ],
	SDL_CondWait: [ int32, [ SDL_cond_ptr, SDL_mutex_ptr, ] ],
	SDL_CondWaitTimeout: [ int32, [ SDL_cond_ptr, SDL_mutex_ptr, Uint32, ] ],
}, exports)