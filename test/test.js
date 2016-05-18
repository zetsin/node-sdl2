var path = require('path');
var index = require('./index.js');
console.log(index('SDL'))
var ref = require('ref');
var ffi = require('ffi');
var SDL = require('./lib/SDL.js');
//var SDL_video = require('./lib/SDL_video.js');
//var SDL_events = require('./lib/SDL_events.js');
//var SDL_render = require('./lib/SDL_render.js');
//var SDL_surface = require('./lib/SDL_surface.js');
//var SDL_error = require('./lib/SDL_error.js');

// basic type
var void_type = ref.types.void;
var int = ref.types.int;
var string = ref.types.CString;

// basic pointer
var void_ptr = ref.refType(void_type);
var SDL_Event_ptr = ref.refType(SDL_events.SDL_Event);

// basic value
var NULL = ref.NULL;

// globals
var cbs = {};

// main function
(function main() {
	if(SDL.SDL_Init(SDL.SDL_INIT_EVERYTHING) != 0) {
		log('SDL_Init');
		cleanup();
		return;
	}

	var e = new SDL_events.SDL_Event;
	(function poll() {
		var quit = false;
		var result = SDL.SDL_PollEvent(e.ref());
		if(result){
			if (e.type == SDL.SDL_EventType.SDL_QUIT){
				quit = true;
			}
		}

		if(!quit) {
			if(result) {
				process.nextTick(poll);
			} else {
				setTimeout(poll);
			}
		} else {
			cleanup();
		}
	})();

	function cleanup() {
		SDL.SDL_Quit();
		process.exit();
	}
})();

function on_create(win, ren) {
	//test string(uincode)
	//SDL_video.SDL_SetWindowTitle(win, 'I am 刘小花');

	//test function pointer
	cbs.event_filter = ffi.Callback(int, [ void_ptr, SDL_Event_ptr ], function (userdata, event) {
		var e = event.deref();
		console.log(e.type)
		if (e.type == SDL.SDL_EventType.SDL_QUIT){
			quit = true;
		}
		return 1;
	});
	SDL.SDL_SetEventFilter(cbs.event_filter, ref.NULL);
}

function log(msg) {
	console.log(msg + " error: ");
	console.log(SDL.SDL_GetError());
}

/*

	win = SDL_video.SDL_CreateWindow('Hello world', 100, 100, 640, 480, SDL_video.SDL_WindowFlags.SDL_WINDOW_SHOWN | SDL_video.SDL_WindowFlags.SDL_WINDOW_RESIZABLE);
	if(win.isNull()) {
		log('SDL_CreateWindow');
		cleanup();
		return;
	}
	ren = SDL_render.SDL_CreateRenderer(win, -1, SDL_render.SDL_RENDERER_ACCELERATED | SDL_render.SDL_RENDERER_PRESENTVSYNC);
	if(ren.isNull()) {
		log('SDL_CreateRenderer');
		cleanup();
		return;
	}
	var imagePath = path.resolve(__dirname, 'test.bmp');
	var image = SDL_surface.SDL_LoadBMP(imagePath);
	if(image.isNull()) {
		log('SDL_LoadBMP');
		return;
	}

	var tex = SDL_render.SDL_CreateTextureFromSurface(ren, image);
	SDL_surface.SDL_FreeSurface(image);
	if(tex.isNull()) {
		log('SDL_FreeSurface');
		return;
	}
	*/
/*
	(function render() {
		setTimeout(function() {
			SDL_render.SDL_RenderClear(ren);
			SDL_render.SDL_RenderCopy(ren, tex, NULL, NULL);
			SDL_render.SDL_RenderPresent(ren);
			render();
		}, 0);
	})();
*/

	//SDL_render.SDL_DestroyTexture(tex);