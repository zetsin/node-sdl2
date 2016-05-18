var sdl = require('..');

//First we need to start up SDL, and make sure it went ok
if (sdl.SDL_Init(sdl.SDL_INIT_VIDEO) != 0){
	console.log("SDL_Init Error: " + sdl.SDL_GetError());
	process.exit(1);
}

//Now create a window with title "Hello World" at 100, 100 on the screen with w:640 h:480 and show it
var win = sdl.SDL_CreateWindow("Hello World!", 100, 100, 640, 480, sdl.SDL_WINDOW_SHOWN);
if (!win){
	console.log("SDL_CreateWindow Error: " + sdl.SDL_GetError());
	process.exit(1);
}

// Retrieve the surface for the window.
var surface = sdl.SDL_GetWindowSurface(win);

// Load the image.
var image = sdl.SDL_LoadBMP("test/test.bmp");
if (!image) {
	console.log("SDL_CreateWindow Error: " + sdl.SDL_GetError());
	process.exit(1);
}

// Stick the image on the window.
sdl.SDL_BlitSurface(image, null, surface, null);
sdl.SDL_UpdateWindowSurface(win);

// Take a quick break after all that hard work
sdl.SDL_Delay(3000);

// Clean up our objects and quit
sdl.SDL_FreeSurface(image);
sdl.SDL_DestroyWindow(win);
sdl.SDL_Quit();
