var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var SDL_AssertState = exports.SDL_AssertState = {
	SDL_ASSERTION_RETRY: 0,
	SDL_ASSERTION_BREAK: 1,
	SDL_ASSERTION_ABORT: 2,
	SDL_ASSERTION_IGNORE: 3,
	SDL_ASSERTION_ALWAYS_IGNORE: 4,
}
var c__EA_SDL_AssertState = exports.c__EA_SDL_AssertState = {
	SDL_ASSERTION_RETRY: 0,
	SDL_ASSERTION_BREAK: 1,
	SDL_ASSERTION_ABORT: 2,
	SDL_ASSERTION_IGNORE: 3,
	SDL_ASSERTION_ALWAYS_IGNORE: 4,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_AssertData = exports.SDL_AssertData = Struct({
	always_ignore: int32,
	trigger_count: uint32,
	condition: string,
	filename: string,
	linenum: int32,
	function: string,
	next: voit_ptr,
})
var SDL_AssertData_ptr = exports.SDL_AssertData_ptr = ref.refType(SDL_AssertData)
var SDL_AssertionHandler = exports.SDL_AssertionHandler = FFI.Function( uint32, [ SDL_AssertData_ptr, voit_ptr, ] )
var voit_ptr_ptr = exports.voit_ptr_ptr = ref.refType(voit_ptr)

FFI.Library('libSDL2', {
	SDL_ReportAssertion: [ uint32, [ SDL_AssertData_ptr, string, string, int32, ] ],
	SDL_SetAssertionHandler: [ voit, [ SDL_AssertionHandler, voit_ptr, ] ],
	SDL_GetDefaultAssertionHandler: [ SDL_AssertionHandler, [ ] ],
	SDL_GetAssertionHandler: [ SDL_AssertionHandler, [ voit_ptr_ptr, ] ],
	SDL_GetAssertionReport: [ SDL_AssertData_ptr, [ ] ],
	SDL_ResetAssertionReport: [ voit, [ ] ],
}, exports)