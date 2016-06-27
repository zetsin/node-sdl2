var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')

var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var Uint32 = SDL_stdinc_lib.Uint32
var Uint8 = SDL_stdinc_lib.Uint8
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922 = Struct({
	base: Uint8_ptr,
	here: Uint8_ptr,
	stop: Uint8_ptr,
})
var c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037 = Struct({
	data1: voit_ptr,
	data2: voit_ptr,
})
var c__S_SDL_RWops_U_SDL_rwops_h_3164 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164 = Union({
	mem: c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922,
	unknown: c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037,
})
var SDL_RWops = exports.SDL_RWops = Struct({
	size: voit_ptr,
	seek: voit_ptr,
	read: voit_ptr,
	write: voit_ptr,
	close: voit_ptr,
	type: Uint32,
	hidden: c__S_SDL_RWops_U_SDL_rwops_h_3164,
})
var SDL_RWops_ptr = exports.SDL_RWops_ptr = ref.refType(SDL_RWops)
var string = exports.string = ref.types.CString
var uint32 = exports.uint32 = ref.types.uint32
var int32 = exports.int32 = ref.types.int32
var Uint16 = SDL_stdinc_lib.Uint16
var Uint64 = SDL_stdinc_lib.Uint64
var ulong = exports.ulong = ref.types.ulong
var size_t = exports.size_t = ulong

FFI.Library(__dirname + '/libSDL2', {
	SDL_RWFromFile: [ SDL_RWops_ptr, [ string, string, ] ],
	SDL_RWFromFP: [ SDL_RWops_ptr, [ voit_ptr, uint32, ] ],
	SDL_RWFromMem: [ SDL_RWops_ptr, [ voit_ptr, int32, ] ],
	SDL_RWFromConstMem: [ SDL_RWops_ptr, [ voit_ptr, int32, ] ],
	SDL_AllocRW: [ SDL_RWops_ptr, [ ] ],
	SDL_FreeRW: [ voit, [ SDL_RWops_ptr, ] ],
	SDL_ReadU8: [ Uint8, [ SDL_RWops_ptr, ] ],
	SDL_ReadLE16: [ Uint16, [ SDL_RWops_ptr, ] ],
	SDL_ReadBE16: [ Uint16, [ SDL_RWops_ptr, ] ],
	SDL_ReadLE32: [ Uint32, [ SDL_RWops_ptr, ] ],
	SDL_ReadBE32: [ Uint32, [ SDL_RWops_ptr, ] ],
	SDL_ReadLE64: [ Uint64, [ SDL_RWops_ptr, ] ],
	SDL_ReadBE64: [ Uint64, [ SDL_RWops_ptr, ] ],
	SDL_WriteU8: [ size_t, [ SDL_RWops_ptr, Uint8, ] ],
	SDL_WriteLE16: [ size_t, [ SDL_RWops_ptr, Uint16, ] ],
	SDL_WriteBE16: [ size_t, [ SDL_RWops_ptr, Uint16, ] ],
	SDL_WriteLE32: [ size_t, [ SDL_RWops_ptr, Uint32, ] ],
	SDL_WriteBE32: [ size_t, [ SDL_RWops_ptr, Uint32, ] ],
	SDL_WriteLE64: [ size_t, [ SDL_RWops_ptr, Uint64, ] ],
	SDL_WriteBE64: [ size_t, [ SDL_RWops_ptr, Uint64, ] ],
}, exports)