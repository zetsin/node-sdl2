var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var c__SA_SDLTest_RandomContext = exports.c__SA_SDLTest_RandomContext = Struct({
	a: uint32,
	x: uint32,
	c: uint32,
	ah: uint32,
	al: uint32,
})
var SDLTest_RandomContext = exports.SDLTest_RandomContext = c__SA_SDLTest_RandomContext
var SDLTest_RandomContext_ptr = exports.SDLTest_RandomContext_ptr = ref.refType(SDLTest_RandomContext)

FFI.Library('libSDL2', {
	SDLTest_RandomInit: [ voit, [ SDLTest_RandomContext_ptr, uint32, uint32, ] ],
	SDLTest_RandomInitTime: [ voit, [ SDLTest_RandomContext_ptr, ] ],
	SDLTest_Random: [ uint32, [ SDLTest_RandomContext_ptr, ] ],
}, exports)