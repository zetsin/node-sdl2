var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}
var SDL_DUMMY_ENUM = exports.SDL_DUMMY_ENUM = {
	DUMMY_ENUM_VALUE: 0,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var char = exports.char = ref.types.char
var Sint8 = exports.Sint8 = char
var uchar = exports.uchar = ref.types.uchar
var Uint8 = exports.Uint8 = uchar
var short = exports.short = ref.types.short
var Sint16 = exports.Sint16 = short
var ushort = exports.ushort = ref.types.ushort
var Uint16 = exports.Uint16 = ushort
var int32 = exports.int32 = ref.types.int32
var Sint32 = exports.Sint32 = int32
var Uint32 = exports.Uint32 = uint32
var longlong = exports.longlong = ref.types.longlong
var Sint64 = exports.Sint64 = longlong
var ulonglong = exports.ulonglong = ref.types.ulonglong
var Uint64 = exports.Uint64 = ulonglong
var c_SDL_stdinc_h_T_SDL_dummy_uint8_arr = ArrayType(int32, 1)
var SDL_dummy_uint8 = exports.SDL_dummy_uint8 = c_SDL_stdinc_h_T_SDL_dummy_uint8_arr
var c_SDL_stdinc_h_T_SDL_dummy_sint8_arr = ArrayType(int32, 1)
var SDL_dummy_sint8 = exports.SDL_dummy_sint8 = c_SDL_stdinc_h_T_SDL_dummy_sint8_arr
var c_SDL_stdinc_h_T_SDL_dummy_uint16_arr = ArrayType(int32, 1)
var SDL_dummy_uint16 = exports.SDL_dummy_uint16 = c_SDL_stdinc_h_T_SDL_dummy_uint16_arr
var c_SDL_stdinc_h_T_SDL_dummy_sint16_arr = ArrayType(int32, 1)
var SDL_dummy_sint16 = exports.SDL_dummy_sint16 = c_SDL_stdinc_h_T_SDL_dummy_sint16_arr
var c_SDL_stdinc_h_T_SDL_dummy_uint32_arr = ArrayType(int32, 1)
var SDL_dummy_uint32 = exports.SDL_dummy_uint32 = c_SDL_stdinc_h_T_SDL_dummy_uint32_arr
var c_SDL_stdinc_h_T_SDL_dummy_sint32_arr = ArrayType(int32, 1)
var SDL_dummy_sint32 = exports.SDL_dummy_sint32 = c_SDL_stdinc_h_T_SDL_dummy_sint32_arr
var c_SDL_stdinc_h_T_SDL_dummy_uint64_arr = ArrayType(int32, 1)
var SDL_dummy_uint64 = exports.SDL_dummy_uint64 = c_SDL_stdinc_h_T_SDL_dummy_uint64_arr
var c_SDL_stdinc_h_T_SDL_dummy_sint64_arr = ArrayType(int32, 1)
var SDL_dummy_sint64 = exports.SDL_dummy_sint64 = c_SDL_stdinc_h_T_SDL_dummy_sint64_arr
var c_SDL_stdinc_h_T_SDL_dummy_enum_arr = ArrayType(int32, 1)
var SDL_dummy_enum = exports.SDL_dummy_enum = c_SDL_stdinc_h_T_SDL_dummy_enum_arr
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var ulong = exports.ulong = ref.types.ulong
var size_t = exports.size_t = ulong
var string = exports.string = ref.types.CString
var wchar_t = exports.wchar_t = int32
var wchar_t_ptr = exports.wchar_t_ptr = ref.refType(wchar_t)
var long = exports.long = ref.types.long
var double = exports.double = ref.types.double
var string_ptr = exports.string_ptr = ref.refType(string)
var __va_list_tag = exports.__va_list_tag = Struct({
	gp_offset: uint32,
	fp_offset: uint32,
	overflow_arg_area: voit_ptr,
	reg_save_area: voit_ptr,
})
var c__T_va_list_arr = ArrayType(__va_list_tag, 1)
var va_list = exports.va_list = c__T_va_list_arr
var float = exports.float = ref.types.float
var _SDL_iconv_t = exports._SDL_iconv_t = voit
var _SDL_iconv_t_ptr = exports._SDL_iconv_t_ptr = ref.refType(_SDL_iconv_t)
var SDL_iconv_t = exports.SDL_iconv_t = _SDL_iconv_t_ptr
var size_t_ptr = exports.size_t_ptr = ref.refType(size_t)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_malloc: [ voit_ptr, [ size_t, ] ],
	SDL_calloc: [ voit_ptr, [ size_t, size_t, ] ],
	SDL_realloc: [ voit_ptr, [ voit_ptr, size_t, ] ],
	SDL_free: [ voit, [ voit_ptr, ] ],
	SDL_getenv: [ string, [ string, ] ],
	SDL_setenv: [ int32, [ string, string, int32, ] ],
	SDL_qsort: [ voit, [ voit_ptr, size_t, size_t, voit_ptr, ] ],
	SDL_abs: [ int32, [ int32, ] ],
	SDL_isdigit: [ int32, [ int32, ] ],
	SDL_isspace: [ int32, [ int32, ] ],
	SDL_toupper: [ int32, [ int32, ] ],
	SDL_tolower: [ int32, [ int32, ] ],
	SDL_memset: [ voit_ptr, [ voit_ptr, int32, size_t, ] ],
	SDL_memcpy: [ voit_ptr, [ voit_ptr, voit_ptr, size_t, ] ],
	SDL_memmove: [ voit_ptr, [ voit_ptr, voit_ptr, size_t, ] ],
	SDL_memcmp: [ int32, [ voit_ptr, voit_ptr, size_t, ] ],
	SDL_wcslen: [ size_t, [ wchar_t_ptr, ] ],
	SDL_wcslcpy: [ size_t, [ wchar_t_ptr, wchar_t_ptr, size_t, ] ],
	SDL_wcslcat: [ size_t, [ wchar_t_ptr, wchar_t_ptr, size_t, ] ],
	SDL_strlen: [ size_t, [ string, ] ],
	SDL_strlcpy: [ size_t, [ string, string, size_t, ] ],
	SDL_utf8strlcpy: [ size_t, [ string, string, size_t, ] ],
	SDL_strlcat: [ size_t, [ string, string, size_t, ] ],
	SDL_strdup: [ string, [ string, ] ],
	SDL_strrev: [ string, [ string, ] ],
	SDL_strupr: [ string, [ string, ] ],
	SDL_strlwr: [ string, [ string, ] ],
	SDL_strchr: [ string, [ string, int32, ] ],
	SDL_strrchr: [ string, [ string, int32, ] ],
	SDL_strstr: [ string, [ string, string, ] ],
	SDL_itoa: [ string, [ int32, string, int32, ] ],
	SDL_uitoa: [ string, [ uint32, string, int32, ] ],
	SDL_ltoa: [ string, [ long, string, int32, ] ],
	SDL_ultoa: [ string, [ ulong, string, int32, ] ],
	SDL_lltoa: [ string, [ Sint64, string, int32, ] ],
	SDL_ulltoa: [ string, [ Uint64, string, int32, ] ],
	SDL_atoi: [ int32, [ string, ] ],
	SDL_atof: [ double, [ string, ] ],
	SDL_strtol: [ long, [ string, string_ptr, int32, ] ],
	SDL_strtoul: [ ulong, [ string, string_ptr, int32, ] ],
	SDL_strtoll: [ Sint64, [ string, string_ptr, int32, ] ],
	SDL_strtoull: [ Uint64, [ string, string_ptr, int32, ] ],
	SDL_strtod: [ double, [ string, string_ptr, ] ],
	SDL_strcmp: [ int32, [ string, string, ] ],
	SDL_strncmp: [ int32, [ string, string, size_t, ] ],
	SDL_strcasecmp: [ int32, [ string, string, ] ],
	SDL_strncasecmp: [ int32, [ string, string, size_t, ] ],
	SDL_sscanf: [ int32, [ string, string, ] ],
	SDL_vsscanf: [ int32, [ string, string, va_list, ] ],
	SDL_snprintf: [ int32, [ string, size_t, string, ] ],
	SDL_vsnprintf: [ int32, [ string, size_t, string, va_list, ] ],
	SDL_acos: [ double, [ double, ] ],
	SDL_asin: [ double, [ double, ] ],
	SDL_atan: [ double, [ double, ] ],
	SDL_atan2: [ double, [ double, double, ] ],
	SDL_ceil: [ double, [ double, ] ],
	SDL_copysign: [ double, [ double, double, ] ],
	SDL_cos: [ double, [ double, ] ],
	SDL_cosf: [ float, [ float, ] ],
	SDL_fabs: [ double, [ double, ] ],
	SDL_floor: [ double, [ double, ] ],
	SDL_log: [ double, [ double, ] ],
	SDL_pow: [ double, [ double, double, ] ],
	SDL_scalbn: [ double, [ double, int32, ] ],
	SDL_sin: [ double, [ double, ] ],
	SDL_sinf: [ float, [ float, ] ],
	SDL_sqrt: [ double, [ double, ] ],
	SDL_sqrtf: [ float, [ float, ] ],
	SDL_tan: [ double, [ double, ] ],
	SDL_tanf: [ float, [ float, ] ],
	SDL_iconv_open: [ SDL_iconv_t, [ string, string, ] ],
	SDL_iconv_close: [ int32, [ SDL_iconv_t, ] ],
	SDL_iconv: [ size_t, [ SDL_iconv_t, string_ptr, size_t_ptr, string_ptr, size_t_ptr, ] ],
	SDL_iconv_string: [ string, [ string, string, string, size_t, ] ],
}, exports)