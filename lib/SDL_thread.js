var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_ThreadPriority = exports.SDL_ThreadPriority = {
	SDL_THREAD_PRIORITY_LOW: 0,
	SDL_THREAD_PRIORITY_NORMAL: 1,
	SDL_THREAD_PRIORITY_HIGH: 2,
}

var voit = exports.voit = ref.types.void
var SDL_Thread = exports.SDL_Thread = Struct({
})
var ulong = exports.ulong = ref.types.ulong
var SDL_threadID = exports.SDL_threadID = ulong
var uint32 = exports.uint32 = ref.types.uint32
var SDL_TLSID = exports.SDL_TLSID = uint32
var int32 = exports.int32 = ref.types.int32
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_ThreadFunction = exports.SDL_ThreadFunction = FFI.Function( int32, [ voit_ptr, ] )
var SDL_Thread_ptr = exports.SDL_Thread_ptr = ref.refType(SDL_Thread)
var string = exports.string = ref.types.CString
var int32_ptr = exports.int32_ptr = ref.refType(int32)

FFI.Library('libSDL2', {
	SDL_CreateThread: [ SDL_Thread_ptr, [ SDL_ThreadFunction, string, voit_ptr, ] ],
	SDL_GetThreadName: [ string, [ SDL_Thread_ptr, ] ],
	SDL_ThreadID: [ SDL_threadID, [ ] ],
	SDL_GetThreadID: [ SDL_threadID, [ SDL_Thread_ptr, ] ],
	SDL_SetThreadPriority: [ int32, [ uint32, ] ],
	SDL_WaitThread: [ voit, [ SDL_Thread_ptr, int32_ptr, ] ],
	SDL_DetachThread: [ voit, [ SDL_Thread_ptr, ] ],
	SDL_TLSCreate: [ SDL_TLSID, [ ] ],
	SDL_TLSGet: [ voit_ptr, [ SDL_TLSID, ] ],
	SDL_TLSSet: [ int32, [ SDL_TLSID, voit_ptr, voit_ptr, ] ],
}, exports)