var ref = require('ref');
var ffi = require('ffi');
var wchar_t = require('ref-wchar');

// basic type
var void_type = ref.types.void;
var int = ref.types.int;
var uint = ref.types.uint;
var long = ref.types.long;
var ulong = ref.types.ulong;
var longlong = ref.types.longlong;
var ulonglong = ref.types.ulonglong;
var float = ref.types.float;
var double = ref.types.double;
var size_t = ref.types.size_t;
var char = ref.types.char;
var string = ref.types.CString;

// basic pointer
var void_ptr = ref.refType(void_type);
var char_ptr = ref.refType(char);
var string_ptr = ref.refType(string);
var size_t_ptr = ref.refType(size_t);
var wchar_ptr = wchar_t.string;

// global define
var SDL_FOURCC = function(A, B, C, D) {
	A = !A.charCodeAt || A.charCodeAt();
	B = !B.charCodeAt || B.charCodeAt();
	C = !C.charCodeAt || C.charCodeAt();
	D = !D.charCodeAt || D.charCodeAt();
	return((A & 0xFF) << 0) | ((B & 0xFF) << 8) | ((C & 0xFF) << 16) | ((D & 0xFF) << 24);
};
var M_PI = 3.14159265358979323846264338327950288;
var SDL_ICONV_ERROR = -1;
var SDL_ICONV_E2BIG = -2;
var SDL_ICONV_EILSEQ = -3;
var SDL_ICONV_EINVAL = -4;
var SDL_iconv_t = void_ptr;

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_stdinc = ffi.Library(libraryFile, {
	SDL_malloc: [ void_ptr, [ size_t ] ],
	SDL_calloc: [ void_ptr, [ size_t, size_t ] ],
	SDL_realloc: [ void_ptr, [ void_ptr, size_t ] ],
	SDL_free: [ void_type, [ void_ptr ] ],
	SDL_getenv: [ string, [ string ] ],
	SDL_setenv: [ int, [ string, string , int ] ],
	SDL_qsort: [ void_type, [ void_ptr, size_t, size_t, void_ptr ] ],
	SDL_abs: [ int, [ int ] ],
	SDL_isdigit: [ int, [ int ] ],
	SDL_isspace: [ int, [ int ] ],
	SDL_toupper: [ int, [ int ] ],
	SDL_tolower: [ int, [ int ] ],
	SDL_memset: [ void_ptr, [ void_ptr, int, size_t ] ],
	SDL_isdigit: [ int, [ int ] ],
	SDL_memcpy: [ void_ptr, [ void_ptr, void_ptr, size_t ] ],
	SDL_memmove: [ void_ptr, [ void_ptr, void_ptr, size_t ] ],
	SDL_memcmp: [ int, [ void_ptr, void_ptr, size_t ] ],
	SDL_wcslen: [ size_t, [ wchar_ptr ] ],
	SDL_wcslcpy: [ size_t, [ wchar_ptr, wchar_ptr ,size_t ] ],
	SDL_wcslcat: [ size_t, [ wchar_ptr, wchar_ptr ,size_t ] ],
	SDL_strlen: [ size_t, [ string ] ],
	SDL_strlcpy: [ size_t, [ char_ptr, string ,size_t ] ],
	SDL_utf8strlcpy: [ size_t, [ char_ptr, string ,size_t ] ],
	SDL_strlcat: [ size_t, [ char_ptr, string ,size_t ] ],
	SDL_strdup: [ string, [ string ] ],
	SDL_strrev: [ string, [ string ] ],
	SDL_strupr: [ string, [ string ] ],
	SDL_strlwr: [ string, [ string ] ],
	SDL_strchr: [ string, [ string, int ] ],
	SDL_strrchr: [ string, [ string, int ] ],
	SDL_strstr: [ string, [ string, string ] ],
	SDL_itoa: [ string, [ int, string, int ] ],
	SDL_uitoa: [ string, [ uint, string, int ] ],
	SDL_ltoa: [ string, [ long, string, int ] ],
	SDL_ultoa: [ string, [ ulong, string, int ] ],
	SDL_lltoa: [ string, [ longlong, string, int ] ],
	SDL_ulltoa: [ string, [ ulonglong, string, int ] ],
	SDL_itoa: [ string, [ int, string, int ] ],
	SDL_atoi: [ int, [ string ] ],
	SDL_atof: [ double, [ string ] ],
	SDL_strtol: [ long, [ string, string_ptr, int ] ],
	SDL_strtoul: [ ulong, [ string, string_ptr, int ] ],
	SDL_strtoll: [ longlong, [ string, string_ptr, int ] ],
	SDL_strtoull: [ ulonglong, [ string, string_ptr, int ] ],
	SDL_strtod: [ double, [ string, string_ptr ] ],
	SDL_strcmp: [ int, [ string, string ] ],
	SDL_strncmp: [ int, [ string, string, size_t ] ],
	SDL_strcasecmp: [ int, [ string, string ] ],
	SDL_strncasecmp: [ int, [ string, string, size_t ] ],
	SDL_vsscanf: [ int, [ string, string, char_ptr ] ],
	SDL_vsnprintf: [ int, [ char_ptr, size_t, string, string ] ],
	SDL_acos: [ double, [ double ] ],
	SDL_asin: [ double, [ double ] ],
	SDL_atan: [ double, [ double ] ],
	SDL_atan2: [ double, [ double ] ],
	SDL_ceil: [ double, [ double ] ],
	SDL_copysign: [ double, [ double, double ] ],
	SDL_cos: [ double, [ double ] ],
	SDL_cosf: [ float, [ float ] ],
	SDL_fabs: [ double, [ double ] ],
	SDL_floor: [ double, [ double ] ],
	SDL_log: [ double, [ double ] ],
	SDL_pow: [ double, [ double, double ] ],
	SDL_scalbn: [ double, [ double, int ] ],
	SDL_sin: [ double, [ double ] ],
	SDL_sinf: [ float, [ float ] ],
	SDL_sqrt: [ double, [ double ] ],
	SDL_iconv_open: [ SDL_iconv_t, [ string, string ] ],
	SDL_iconv_close: [ int, [ SDL_iconv_t ] ],
	SDL_iconv: [ size_t, [ SDL_iconv_t, string_ptr, size_t_ptr, string_ptr, size_t_ptr ] ],
	SDL_iconv_string: [ string, [ string, string, string, size_t ] ]
});

// inline function
SDL_stdinc.SDL_min = function(x, y) {
	return (((x) < (y)) ? (x) : (y));
};
SDL_stdinc.SDL_max = function(x, y) {
	return (((x) > (y)) ? (x) : (y));
};
SDL_stdinc.SDL_memcpy4 = function(dst, src, dwords) {
	return SDL_stdinc.SDL_memcpy(dst, src, dwords * 4);
};
SDL_stdinc.SDL_iconv_utf8_locale = function(S) {
	return SDL_stdinc.SDL_iconv_string('', 'UTF-8', S, SDL_stdinc.SDL_strlen(S) + 1)
}
SDL_stdinc.SDL_iconv_utf8_ucs2 = function(S) {
	return SDL_stdinc.SDL_iconv_string('UCS-2-INTERNAL', 'UTF-8', S, SDL_stdinc.SDL_strlen(S) + 1)
}
SDL_stdinc.SDL_iconv_utf8_ucs4 = function(S) {
	return SDL_stdinc.SDL_iconv_string('UCS-4-INTERNAL', 'UTF-8', S, SDL_stdinc.SDL_strlen(S) + 1)
}

// export global
SDL_stdinc.SDL_FOURCC = SDL_FOURCC;
SDL_stdinc.SDL_ICONV_ERROR = SDL_ICONV_ERROR;
SDL_stdinc.SDL_ICONV_E2BIG = SDL_ICONV_E2BIG;
SDL_stdinc.SDL_ICONV_EILSEQ = SDL_ICONV_EILSEQ;
SDL_stdinc.SDL_ICONV_EINVAL = SDL_ICONV_EINVAL;
SDL_stdinc.SDL_iconv_t = SDL_iconv_t;

module.exports = SDL_stdinc;