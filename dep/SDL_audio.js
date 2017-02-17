var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')

var SDL_stdinc_lib = require('./SDL_stdinc')
var SDL_rwops_lib = require('./SDL_rwops')

var SDL_AudioStatus = exports.SDL_AudioStatus = {
	SDL_AUDIO_STOPPED: 0,
	SDL_AUDIO_PLAYING: 1,
	SDL_AUDIO_PAUSED: 2,
}

var voit = exports.voit = ref.types.void
var ushort = exports.ushort = ref.types.ushort
var SDL_AudioFormat = exports.SDL_AudioFormat = ushort
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var uchar = exports.uchar = ref.types.uchar
var uchar_ptr = exports.uchar_ptr = ref.refType(uchar)
var int32 = exports.int32 = ref.types.int32
var SDL_AudioCallback = exports.SDL_AudioCallback = FFI.Function( voit, [ voit_ptr, uchar_ptr, int32, ] )
var Uint8 = SDL_stdinc_lib.Uint8
var Uint16 = SDL_stdinc_lib.Uint16
var Uint32 = SDL_stdinc_lib.Uint32
var SDL_AudioSpec = exports.SDL_AudioSpec = Struct({
	freq: int32,
	format: SDL_AudioFormat,
	channels: Uint8,
	silence: Uint8,
	samples: Uint16,
	padding: Uint16,
	size: Uint32,
	callback: SDL_AudioCallback,
	userdata: voit_ptr,
})
var SDL_AudioCVT = exports.SDL_AudioCVT = voit
var SDL_AudioCVT_ptr = exports.SDL_AudioCVT_ptr = ref.refType(SDL_AudioCVT)
var SDL_AudioFilter = exports.SDL_AudioFilter = FFI.Function( voit, [ SDL_AudioCVT_ptr, ushort, ] )
var double = exports.double = ref.types.double
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var c__S_SDL_AudioCVT_FI_filters_arr = ArrayType(SDL_AudioFilter, 10)
var SDL_AudioCVT = exports.SDL_AudioCVT = Struct({
	needed: int32,
	src_format: SDL_AudioFormat,
	dst_format: SDL_AudioFormat,
	rate_incr: double,
	buf: Uint8_ptr,
	len: int32,
	len_cvt: int32,
	len_mult: int32,
	len_ratio: double,
	filters: c__S_SDL_AudioCVT_FI_filters_arr,
	filter_index: int32,
})
var string = exports.string = ref.types.CString
var SDL_AudioSpec_ptr = exports.SDL_AudioSpec_ptr = ref.refType(SDL_AudioSpec)
var uint32 = exports.uint32 = ref.types.uint32
var SDL_AudioDeviceID = exports.SDL_AudioDeviceID = uint32
var SDL_RWops = SDL_rwops_lib.SDL_RWops
var SDL_RWops_ptr = exports.SDL_RWops_ptr = ref.refType(SDL_RWops)
var Uint8_ptr_ptr = exports.Uint8_ptr_ptr = ref.refType(Uint8_ptr)
var Uint32_ptr = exports.Uint32_ptr = ref.refType(Uint32)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_GetNumAudioDrivers: [ int32, [ ] ],
	SDL_GetAudioDriver: [ string, [ int32, ] ],
	SDL_AudioInit: [ int32, [ string, ] ],
	SDL_AudioQuit: [ voit, [ ] ],
	SDL_GetCurrentAudioDriver: [ string, [ ] ],
	SDL_OpenAudio: [ int32, [ SDL_AudioSpec_ptr, SDL_AudioSpec_ptr, ] ],
	SDL_GetNumAudioDevices: [ int32, [ int32, ] ],
	SDL_GetAudioDeviceName: [ string, [ int32, int32, ] ],
	SDL_OpenAudioDevice: [ SDL_AudioDeviceID, [ string, int32, SDL_AudioSpec_ptr, SDL_AudioSpec_ptr, int32, ] ],
	SDL_GetAudioStatus: [ uint32, [ ] ],
	SDL_GetAudioDeviceStatus: [ uint32, [ SDL_AudioDeviceID, ] ],
	SDL_PauseAudio: [ voit, [ int32, ] ],
	SDL_PauseAudioDevice: [ voit, [ SDL_AudioDeviceID, int32, ] ],
	SDL_LoadWAV_RW: [ SDL_AudioSpec_ptr, [ SDL_RWops_ptr, int32, SDL_AudioSpec_ptr, Uint8_ptr_ptr, Uint32_ptr, ] ],
	SDL_FreeWAV: [ voit, [ Uint8_ptr, ] ],
	SDL_BuildAudioCVT: [ int32, [ SDL_AudioCVT_ptr, SDL_AudioFormat, Uint8, int32, SDL_AudioFormat, Uint8, int32, ] ],
	SDL_ConvertAudio: [ int32, [ SDL_AudioCVT_ptr, ] ],
	SDL_MixAudio: [ voit, [ Uint8_ptr, Uint8_ptr, Uint32, int32, ] ],
	SDL_MixAudioFormat: [ voit, [ Uint8_ptr, Uint8_ptr, SDL_AudioFormat, Uint32, int32, ] ],
	SDL_QueueAudio: [ int32, [ SDL_AudioDeviceID, voit_ptr, Uint32, ] ],
	SDL_GetQueuedAudioSize: [ Uint32, [ SDL_AudioDeviceID, ] ],
	SDL_ClearQueuedAudio: [ voit, [ SDL_AudioDeviceID, ] ],
	SDL_LockAudio: [ voit, [ ] ],
	SDL_LockAudioDevice: [ voit, [ SDL_AudioDeviceID, ] ],
	SDL_UnlockAudio: [ voit, [ ] ],
	SDL_UnlockAudioDevice: [ voit, [ SDL_AudioDeviceID, ] ],
	SDL_CloseAudio: [ voit, [ ] ],
	SDL_CloseAudioDevice: [ voit, [ SDL_AudioDeviceID, ] ],
}, exports)