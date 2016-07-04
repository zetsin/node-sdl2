var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var c_SDL_log_h_Ea = exports.c_SDL_log_h_Ea = {
	SDL_LOG_CATEGORY_APPLICATION: 0,
	SDL_LOG_CATEGORY_ERROR: 1,
	SDL_LOG_CATEGORY_ASSERT: 2,
	SDL_LOG_CATEGORY_SYSTEM: 3,
	SDL_LOG_CATEGORY_AUDIO: 4,
	SDL_LOG_CATEGORY_VIDEO: 5,
	SDL_LOG_CATEGORY_RENDER: 6,
	SDL_LOG_CATEGORY_INPUT: 7,
	SDL_LOG_CATEGORY_TEST: 8,
	SDL_LOG_CATEGORY_RESERVED1: 9,
	SDL_LOG_CATEGORY_RESERVED2: 10,
	SDL_LOG_CATEGORY_RESERVED3: 11,
	SDL_LOG_CATEGORY_RESERVED4: 12,
	SDL_LOG_CATEGORY_RESERVED5: 13,
	SDL_LOG_CATEGORY_RESERVED6: 14,
	SDL_LOG_CATEGORY_RESERVED7: 15,
	SDL_LOG_CATEGORY_RESERVED8: 16,
	SDL_LOG_CATEGORY_RESERVED9: 17,
	SDL_LOG_CATEGORY_RESERVED10: 18,
	SDL_LOG_CATEGORY_CUSTOM: 19,
}
var SDL_LogPriority = exports.SDL_LogPriority = {
	SDL_LOG_PRIORITY_VERBOSE: 1,
	SDL_LOG_PRIORITY_DEBUG: 2,
	SDL_LOG_PRIORITY_INFO: 3,
	SDL_LOG_PRIORITY_WARN: 4,
	SDL_LOG_PRIORITY_ERROR: 5,
	SDL_LOG_PRIORITY_CRITICAL: 6,
	SDL_NUM_LOG_PRIORITIES: 7,
}
var c__EA_SDL_LogPriority = exports.c__EA_SDL_LogPriority = {
	SDL_LOG_PRIORITY_VERBOSE: 1,
	SDL_LOG_PRIORITY_DEBUG: 2,
	SDL_LOG_PRIORITY_INFO: 3,
	SDL_LOG_PRIORITY_WARN: 4,
	SDL_LOG_PRIORITY_ERROR: 5,
	SDL_LOG_PRIORITY_CRITICAL: 6,
	SDL_NUM_LOG_PRIORITIES: 7,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_LogOutputFunction = exports.SDL_LogOutputFunction = FFI.Function( voit, [ voit_ptr, int32, uint32, string, ] )
var SDL_LogOutputFunction_ptr = exports.SDL_LogOutputFunction_ptr = ref.refType(SDL_LogOutputFunction)
var voit_ptr_ptr = exports.voit_ptr_ptr = ref.refType(voit_ptr)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_LogSetAllPriority: [ voit, [ uint32, ] ],
	SDL_LogSetPriority: [ voit, [ int32, uint32, ] ],
	SDL_LogGetPriority: [ uint32, [ int32, ] ],
	SDL_LogResetPriorities: [ voit, [ ] ],
	SDL_Log: [ voit, [ string, ] ],
	SDL_LogVerbose: [ voit, [ int32, string, ] ],
	SDL_LogDebug: [ voit, [ int32, string, ] ],
	SDL_LogInfo: [ voit, [ int32, string, ] ],
	SDL_LogWarn: [ voit, [ int32, string, ] ],
	SDL_LogError: [ voit, [ int32, string, ] ],
	SDL_LogCritical: [ voit, [ int32, string, ] ],
	SDL_LogMessage: [ voit, [ int32, uint32, string, ] ],
	SDL_LogMessageV: [ voit, [ int32, uint32, string, int32, ] ],
	SDL_LogGetOutputFunction: [ voit, [ SDL_LogOutputFunction_ptr, voit_ptr_ptr, ] ],
	SDL_LogSetOutputFunction: [ voit, [ SDL_LogOutputFunction, voit_ptr, ] ],
}, exports)