var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var GLint64 = exports.GLint64 = int32
var GLuint64 = exports.GLuint64 = int32
var __GLsync = exports.__GLsync = Struct({
})
var __GLsync_ptr = exports.__GLsync_ptr = ref.refType(__GLsync)
var GLsync = exports.GLsync = __GLsync_ptr
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var GLeglImageOES = exports.GLeglImageOES = voit_ptr
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var GL_APIENTRY = exports.GL_APIENTRY = [object Object]
var  = FFI.Function( voit, [ int32, int32, int32, int32, int32, int32_ptr, voit_ptr, ] )
var GLboolean = exports.GLboolean = [object Object]
var GLuint = exports.GLuint = 
var GLenum = exports.GLenum = 

FFI.Library(__dirname + '/SDL2', {
}, exports)