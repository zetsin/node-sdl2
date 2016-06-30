var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var GLvoid = exports.GLvoid = voit
var char = exports.char = ref.types.char
var GLchar = exports.GLchar = char
var uint32 = exports.uint32 = ref.types.uint32
var GLenum = exports.GLenum = uint32
var uchar = exports.uchar = ref.types.uchar
var GLboolean = exports.GLboolean = uchar
var GLbitfield = exports.GLbitfield = uint32
var int32 = exports.int32 = ref.types.int32
var GLbyte = exports.GLbyte = int32
var short = exports.short = ref.types.short
var GLshort = exports.GLshort = short
var GLint = exports.GLint = int32
var GLsizei = exports.GLsizei = int32
var GLubyte = exports.GLubyte = int32
var ushort = exports.ushort = ref.types.ushort
var GLushort = exports.GLushort = ushort
var GLuint = exports.GLuint = uint32
var GLfloat = exports.GLfloat = int32
var GLclampf = exports.GLclampf = int32
var GLfixed = exports.GLfixed = int32
var GLintptr = exports.GLintptr = int32
var GLsizeiptr = exports.GLsizeiptr = int32

FFI.Library('libSDL2', {
}, exports)