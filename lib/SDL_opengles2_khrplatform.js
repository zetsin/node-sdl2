var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var khronos_boolean_enum_t = exports.khronos_boolean_enum_t = {
	KHRONOS_FALSE: 0,
	KHRONOS_TRUE: 1,
	KHRONOS_BOOLEAN_ENUM_FORCE_SIZE: 2147483647,
}

var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var khronos_int32_t = exports.khronos_int32_t = int32
var uint32 = exports.uint32 = ref.types.uint32
var khronos_uint32_t = exports.khronos_uint32_t = uint32
var longlong = exports.longlong = ref.types.longlong
var khronos_int64_t = exports.khronos_int64_t = longlong
var ulonglong = exports.ulonglong = ref.types.ulonglong
var khronos_uint64_t = exports.khronos_uint64_t = ulonglong
var char = exports.char = ref.types.char
var khronos_int8_t = exports.khronos_int8_t = char
var uchar = exports.uchar = ref.types.uchar
var khronos_uint8_t = exports.khronos_uint8_t = uchar
var short = exports.short = ref.types.short
var khronos_int16_t = exports.khronos_int16_t = short
var ushort = exports.ushort = ref.types.ushort
var khronos_uint16_t = exports.khronos_uint16_t = ushort
var long = exports.long = ref.types.long
var khronos_intptr_t = exports.khronos_intptr_t = long
var ulong = exports.ulong = ref.types.ulong
var khronos_uintptr_t = exports.khronos_uintptr_t = ulong
var khronos_ssize_t = exports.khronos_ssize_t = long
var khronos_usize_t = exports.khronos_usize_t = ulong
var float = exports.float = ref.types.float
var khronos_float_t = exports.khronos_float_t = float
var khronos_utime_nanoseconds_t = exports.khronos_utime_nanoseconds_t = ulonglong
var khronos_stime_nanoseconds_t = exports.khronos_stime_nanoseconds_t = longlong

FFI.Library('libSDL2', {
}, exports)