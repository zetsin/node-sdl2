var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var float = exports.float = ref.types.float
var double = exports.double = ref.types.double
var string = exports.string = ref.types.CString

FFI.Library('libSDL2', {
	SDLTest_FuzzerInit: [ voit, [ int32, ] ],
	SDLTest_RandomUint8: [ int32, [ ] ],
	SDLTest_RandomSint8: [ int32, [ ] ],
	SDLTest_RandomUint16: [ int32, [ ] ],
	SDLTest_RandomSint16: [ int32, [ ] ],
	SDLTest_RandomSint32: [ int32, [ ] ],
	SDLTest_RandomUint32: [ int32, [ ] ],
	SDLTest_RandomUint64: [ int32, [ ] ],
	SDLTest_RandomSint64: [ int32, [ ] ],
	SDLTest_RandomUnitFloat: [ float, [ ] ],
	SDLTest_RandomUnitDouble: [ double, [ ] ],
	SDLTest_RandomFloat: [ float, [ ] ],
	SDLTest_RandomDouble: [ double, [ ] ],
	SDLTest_RandomUint8BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomUint16BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomUint32BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomUint64BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomSint8BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomSint16BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomSint32BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomSint64BoundaryValue: [ int32, [ int32, int32, int32, ] ],
	SDLTest_RandomIntegerInRange: [ int32, [ int32, int32, ] ],
	SDLTest_RandomAsciiString: [ string, [ ] ],
	SDLTest_RandomAsciiStringWithMaximumLength: [ string, [ int32, ] ],
	SDLTest_RandomAsciiStringOfSize: [ string, [ int32, ] ],
	SDLTest_GetFuzzerInvocationCount: [ int32, [ ] ],
}, exports)