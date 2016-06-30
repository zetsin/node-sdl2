var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var ulong = exports.ulong = ref.types.ulong
var MD5UINT4 = exports.MD5UINT4 = ulong
var c__SA_SDLTest_Md5Context_FI_i_arr = ArrayType(MD5UINT4, 2)
var c__SA_SDLTest_Md5Context_FI_buf_arr = ArrayType(MD5UINT4, 4)
var uchar = exports.uchar = ref.types.uchar
var c__SA_SDLTest_Md5Context_FI_in_arr = ArrayType(uchar, 64)
var c__SA_SDLTest_Md5Context_FI_digest_arr = ArrayType(uchar, 16)
var c__SA_SDLTest_Md5Context = exports.c__SA_SDLTest_Md5Context = Struct({
	i: c__SA_SDLTest_Md5Context_FI_i_arr,
	buf: c__SA_SDLTest_Md5Context_FI_buf_arr,
	in: c__SA_SDLTest_Md5Context_FI_in_arr,
	digest: c__SA_SDLTest_Md5Context_FI_digest_arr,
})
var SDLTest_Md5Context = exports.SDLTest_Md5Context = c__SA_SDLTest_Md5Context
var SDLTest_Md5Context_ptr = exports.SDLTest_Md5Context_ptr = ref.refType(SDLTest_Md5Context)
var uchar_ptr = exports.uchar_ptr = ref.refType(uchar)
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library('libSDL2', {
	SDLTest_Md5Init: [ voit, [ SDLTest_Md5Context_ptr, ] ],
	SDLTest_Md5Update: [ voit, [ SDLTest_Md5Context_ptr, uchar_ptr, uint32, ] ],
	SDLTest_Md5Final: [ voit, [ SDLTest_Md5Context_ptr, ] ],
}, exports)