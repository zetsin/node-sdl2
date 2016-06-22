var libSDL = require('../index.js')
var SDL = libSDL('SDL')
var SDL_video = libSDL('SDL_video')
var SDL_events = libSDL('SDL_events')

var ref = require('ref')


if(SDL.SDL_Init(0) != 0) {
	cleanup()
	return
}

var global = {}
global.win = SDL_video.SDL_CreateWindow('Hello world', 100, 100, 640, 480, 0x00000020)
if(global.win.isNull()) {
	cleanup()
	return 
}

var event = ref.alloc('int')
;(function spinforever() {
	var quit = false
	var pending = SDL_events.SDL_PollEvent(event)
	if(pending){
		console.log(event.deref())
		if (event.deref() == 256){
			quit = true
		}
	}

	if(!quit) {
		if(pending) {
			process.nextTick(spinforever)
		} else {
			setTimeout(spinforever)
		}
	} else {
		cleanup()
	}
})()

function cleanup() {
	SDL_video.SDL_DestroyWindow(global.win)
	SDL.SDL_Quit()
	process.exit()
	var win = global.win
	global.win = null
}




;(function loop() {
	var screen = SDL_video.SDL_GetWindowSurface(global.win)
	if(screen.isNull()) {
		return
	}
	var w = screen.deref().w
	var h = screen.deref().h
	var size = w * h
	var buf = new Buffer(size * 4)
	var buf_ref = buf.ref()
	buf_ref.writeInt64LE(screen.deref().pixels.address(), 0)
	buf = buf_ref.deref()
	for(var key in buf) {
		buf[key] = parseInt(Math.random() * 0xee)
	}
	// buf_ref.deref().fill()
	SDL_video.SDL_UpdateWindowSurface(global.win)

	setTimeout(loop)
})()