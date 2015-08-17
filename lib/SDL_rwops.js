var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var Union = require('ref-union');

// basic type
var void_type = ref.types.void;
var bool = ref.types.bool;
var long = ref.types.long;
var int = ref.types.int;
var uint64 = ref.types.uint64;
var uint32 = ref.types.uint32;
var uint16 = ref.types.uint16;
var uint8 = ref.types.uint8;
var size_t = ref.types.size_t;
var string = ref.types.CString;

// basic pointer
var void_ptr = ref.refType(void_type);
var uint8_ptr = ref.refType(uint8);

// global define
var SDL_RWOPS_UNKNOWN = 0;
var SDL_RWOPS_WINFILE = 1;
var SDL_RWOPS_STDFILE = 2;
var SDL_RWOPS_JNIFILE = 3;
var SDL_RWOPS_MEMORY = 4;
var SDL_RWOPS_MEMORY_RO = 5;
var SDL_RWops = Struct({
	size: void_ptr,
	seek: void_ptr,
	read: void_ptr,
	write: void_ptr,
	close: void_ptr,
	type: uint32,
	hidden: Union({
		androidio: Struct({
			fileNameRef: void_ptr,
			inputStreamRef: void_ptr,
			readableByteChannelRef: void_ptr,
			readMethod: void_ptr,
			assetFileDescriptorRef: void_ptr,
			position: long,
			size: long,
			offset: long,
			fd: int
		}),
		windowsio: Struct({
			append: int,
			h: void_ptr,
			buffer: Struct({
				data: void_ptr,
				size: size_t,
				left: size_t
			})
		}),
		stdio: Struct({
			autoclose: int,
			fp: void_ptr
		}),
		mem: Struct({
			base: uint8_ptr,
			here: uint8_ptr,
			stop: uint8_ptr
		}),
		unknown: Struct({
			data1: void_ptr,
			data2: void_ptr
		})
	})
});
var RW_SEEK_SET = 0;
var RW_SEEK_CUR = 0;
var RW_SEEK_END = 2;

// help pointer
var SDL_RWops_ptr = ref.refType(SDL_RWops);

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2');
var SDL_rwops = ffi.Library(libraryFile, {
	SDL_RWFromFile: [ SDL_RWops_ptr, [ string, string ] ],
	SDL_RWFromFP: [ SDL_RWops_ptr, [ void_ptr, bool ] ],
	SDL_RWFromMem: [ SDL_RWops_ptr, [ void_ptr, int ] ],
	SDL_RWFromConstMem: [ SDL_RWops_ptr, [ void_ptr, int ] ],
	SDL_AllocRW: [ SDL_RWops_ptr, [] ],
	SDL_FreeRW: [ void_type, [ SDL_RWops_ptr ] ],
	SDL_ReadU8: [ uint8, [ SDL_RWops_ptr ] ],
	SDL_ReadLE16: [ uint16, [ SDL_RWops_ptr ] ],
	SDL_ReadBE16: [ uint16, [ SDL_RWops_ptr ] ],
	SDL_ReadLE32: [ uint32, [ SDL_RWops_ptr ] ],
	SDL_ReadBE32: [ uint32, [ SDL_RWops_ptr ] ],
	SDL_ReadLE64: [ uint64, [ SDL_RWops_ptr ] ],
	SDL_ReadBE64: [ uint64, [ SDL_RWops_ptr ] ],
	SDL_WriteU8: [ size_t, [ SDL_RWops_ptr, uint8 ] ],
	SDL_WriteLE16: [ size_t, [ SDL_RWops_ptr, uint16 ] ],
	SDL_WriteBE16: [ size_t, [ SDL_RWops_ptr, uint16 ] ],
	SDL_WriteLE32: [ size_t, [ SDL_RWops_ptr, uint32 ] ],
	SDL_WriteBE32: [ size_t, [ SDL_RWops_ptr, uint32 ] ],
	SDL_WriteLE64: [ size_t, [ SDL_RWops_ptr, uint64 ] ],
	SDL_WriteBE64: [ size_t, [ SDL_RWops_ptr, uint64 ] ]
});

// export global
SDL_rwops.SDL_RWOPS_UNKNOWN = SDL_RWOPS_UNKNOWN;
SDL_rwops.SDL_RWOPS_WINFILE = SDL_RWOPS_WINFILE;
SDL_rwops.SDL_RWOPS_STDFILE = SDL_RWOPS_STDFILE;
SDL_rwops.SDL_RWOPS_JNIFILE = SDL_RWOPS_JNIFILE;
SDL_rwops.SDL_RWOPS_MEMORY = SDL_RWOPS_MEMORY;
SDL_rwops.SDL_RWOPS_MEMORY_RO = SDL_RWOPS_MEMORY_RO;
SDL_rwops.SDL_RWops = SDL_RWops;

SDL_rwops.RW_SEEK_SET = RW_SEEK_SET;
SDL_rwops.RW_SEEK_CUR = RW_SEEK_CUR;
SDL_rwops.RW_SEEK_END = RW_SEEK_END;

module.exports = SDL_rwops;