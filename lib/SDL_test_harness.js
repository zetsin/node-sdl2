var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDLTest_TestCaseSetUpFp = exports.SDLTest_TestCaseSetUpFp = FFI.Function( voit, [ voit_ptr, ] )
var int32 = exports.int32 = ref.types.int32
var SDLTest_TestCaseFp = exports.SDLTest_TestCaseFp = FFI.Function( int32, [ voit_ptr, ] )
var SDLTest_TestCaseTearDownFp = exports.SDLTest_TestCaseTearDownFp = FFI.Function( voit, [ voit_ptr, ] )
var string = exports.string = ref.types.CString
var SDLTest_TestCaseReference = exports.SDLTest_TestCaseReference = Struct({
	testCase: SDLTest_TestCaseFp,
	name: string,
	description: string,
	enabled: int32,
})
var SDLTest_TestCaseReference_ptr = exports.SDLTest_TestCaseReference_ptr = ref.refType(SDLTest_TestCaseReference)
var SDLTest_TestCaseReference_ptr_ptr = exports.SDLTest_TestCaseReference_ptr_ptr = ref.refType(SDLTest_TestCaseReference_ptr)
var SDLTest_TestSuiteReference = exports.SDLTest_TestSuiteReference = Struct({
	name: string,
	testSetUp: SDLTest_TestCaseSetUpFp,
	testCases: SDLTest_TestCaseReference_ptr_ptr,
	testTearDown: SDLTest_TestCaseTearDownFp,
})
var SDLTest_TestSuiteReference_ptr = exports.SDLTest_TestSuiteReference_ptr = ref.refType(SDLTest_TestSuiteReference)
var c__F_SDLTest_RunSuites_arr = ArrayType(SDLTest_TestSuiteReference_ptr, 0)

FFI.Library(__dirname + '/libSDL2', {
	SDLTest_RunSuites: [ int32, [ c__F_SDLTest_RunSuites_arr, string, int32, string, int32, ] ],
}, exports)