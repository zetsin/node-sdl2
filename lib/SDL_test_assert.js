var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32

FFI.Library(__dirname + '/libSDL2', {
	SDLTest_ResetAssertSummary: [ voit, [ ] ],
	SDLTest_LogAssertSummary: [ voit, [ ] ],
	SDLTest_AssertSummaryToTestResult: [ int32, [ ] ],
}, exports)