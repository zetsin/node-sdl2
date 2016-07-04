var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var c__SA_SDLTest_Crc32Context_FI_crc32_table_arr = ArrayType(uint32, 256)
var c__SA_SDLTest_Crc32Context = exports.c__SA_SDLTest_Crc32Context = Struct({
	crc32_table: c__SA_SDLTest_Crc32Context_FI_crc32_table_arr,
})
var SDLTest_Crc32Context = exports.SDLTest_Crc32Context = c__SA_SDLTest_Crc32Context
var int32 = exports.int32 = ref.types.int32
var SDLTest_Crc32Context_ptr = exports.SDLTest_Crc32Context_ptr = ref.refType(SDLTest_Crc32Context)
var uchar = exports.uchar = ref.types.uchar
var uchar_ptr = exports.uchar_ptr = ref.refType(uchar)
var uint32_ptr = exports.uint32_ptr = ref.refType(uint32)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDLTest_Crc32Init: [ int32, [ SDLTest_Crc32Context_ptr, ] ],
	SDLTest_crc32Calc: [ int32, [ SDLTest_Crc32Context_ptr, uchar_ptr, uint32, uint32_ptr, ] ],
	SDLTest_Crc32CalcStart: [ int32, [ SDLTest_Crc32Context_ptr, uint32_ptr, ] ],
	SDLTest_Crc32CalcEnd: [ int32, [ SDLTest_Crc32Context_ptr, uint32_ptr, ] ],
	SDLTest_Crc32CalcBuffer: [ int32, [ SDLTest_Crc32Context_ptr, uchar_ptr, uint32, uint32_ptr, ] ],
	SDLTest_Crc32Done: [ int32, [ SDLTest_Crc32Context_ptr, ] ],
}, exports)