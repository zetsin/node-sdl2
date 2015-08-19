var ref = require('ref');
var ffi = require('ffi');
var Struct = require('ref-struct');
var SDL_version = require('./SDL_version.js');
var SDL_surface = require('./SDL_surface.js');
var SDL_rwops = require('./SDL_rwops.js');
var SDL_render = require('./SDL_render.js');
var SDL_error = require('./SDL_error.js');

// basic type
var void_type = ref.types.void;
var int = ref.types.int;
var string = ref.types.CString;

// basic pointer
var void_ptr = ref.refType(void_type);
var string_ptr = ref.refType(string);
var SDL_Version_ptr = ref.refType(SDL_version.SDL_Version);
var SDL_Surface_ptr = ref.refType(SDL_surface.SDL_Surface);
var SDL_RWops_ptr = ref.refType(SDL_rwops.SDL_RWops);
var SDL_Texture_ptr = ref.refType(SDL_render.SDL_Texture);
var SDL_Renderer_ptr = ref.refType(SDL_render.SDL_Renderer);

// global define
var SDL_IMAGE_MAJOR_VERSION = 2;
var SDL_IMAGE_MINOR_VERSION = 0;
var SDL_IMAGE_PATCHLEVEL = 0;
var SDL_IMAGE_VERSION = function(X) {
	X.deref().major = SDL_IMAGE_MAJOR_VERSION;
	X.deref().minor = SDL_IMAGE_MINOR_VERSION;
	X.deref().patch = SDL_IMAGE_PATCHLEVEL;
};
var IMG_InitFlags = {
	IMG_INIT_JPG: 0x00000001,
	IMG_INIT_PNG: 0x00000002,
	IMG_INIT_TIF: 0x00000004,
	IMG_INIT_WEBP: 0x00000008
};

// global function
var libraryFile = require('path').join(__dirname, 'SDL2', process.platform, process.arch, 'SDL2_image');
var SDL_image = ffi.Library(libraryFile, {
	IMG_Linked_Version: [ SDL_Version_ptr, [] ],
	IMG_Init: [ int, [ int ] ],
	IMG_Quit: [ void_type, [] ],
	IMG_LoadTyped_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, string ] ],
	IMG_Load: [ SDL_Surface_ptr, [ string ] ],
	IMG_Load_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, int ] ],
	IMG_LoadTexture: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, string ] ],
	IMG_LoadTexture_RW: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, SDL_RWops_ptr, int ] ],
	IMG_LoadTextureTyped_RW: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, SDL_RWops_ptr , int, string ] ],
	IMG_isICO: [ int, [ SDL_RWops_ptr ] ],
	IMG_isCUR: [ int, [ SDL_RWops_ptr ] ],
	IMG_isBMP: [ int, [ SDL_RWops_ptr ] ],
	IMG_isGIF: [ int, [ SDL_RWops_ptr ] ],
	IMG_isJPG: [ int, [ SDL_RWops_ptr ] ],
	IMG_isLBM: [ int, [ SDL_RWops_ptr ] ],
	IMG_isPCX: [ int, [ SDL_RWops_ptr ] ],
	IMG_isPNG: [ int, [ SDL_RWops_ptr ] ],
	IMG_isPNM: [ int, [ SDL_RWops_ptr ] ],
	IMG_isTIF: [ int, [ SDL_RWops_ptr ] ],
	IMG_isXCF: [ int, [ SDL_RWops_ptr ] ],
	IMG_isXPM: [ int, [ SDL_RWops_ptr ] ],
	IMG_isXV: [ int, [ SDL_RWops_ptr ] ],
	IMG_isWEBP: [ int, [ SDL_RWops_ptr ] ],
	IMG_LoadICO_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadCUR_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadBMP_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadGIF_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadJPG_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadLBM_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadPCX_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadPNG_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadPNM_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadTGA_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadTIF_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadXCF_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadXPM_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadXV_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_LoadWEBP_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr ] ],
	IMG_ReadXPMFromArray: [ SDL_Surface_ptr, [ string_ptr ] ],
	IMG_SavePNG: [ int, [ SDL_Surface_ptr, string ] ],
	IMG_SavePNG_RW: [ int, [ SDL_Surface_ptr, SDL_RWops_ptr, int ] ]
});

// export global
SDL_image.SDL_IMAGE_MAJOR_VERSION = SDL_IMAGE_MAJOR_VERSION;
SDL_image.SDL_IMAGE_MINOR_VERSION = SDL_IMAGE_MINOR_VERSION;
SDL_image.SDL_IMAGE_PATCHLEVEL = SDL_IMAGE_PATCHLEVEL;
SDL_image.SDL_IMAGE_VERSION = SDL_IMAGE_VERSION;
SDL_image.IMG_InitFlags = IMG_InitFlags;
SDL_image.IMG_SetError = SDL_error.SDL_SetError;
SDL_image.IMG_GetError = SDL_error.SDL_GetError;

module.exports = SDL_image;