var extend = require('extend-shallow');
var fs = require('fs');

// Retrieve the list of available modules.
var modules = [
  'SDL',
  'SDL_blendmode',
  'SDL_keycode',
  'SDL_rwops',
  'SDL_syswm',
  'SDL_error',
  'SDL_joystick',
  'SDL_pixels',
  'SDL_scancode',
  'SDL_touch',
  'SDL_events',
  'SDL_rect',
  'SDL_stdinc',
  'SDL_version.js',
  'SDL_gesture',
  'SDL_keyboard',
  'SDL_render',
  'SDL_surface',
  'SDL_timer',
  'SDL_video'
];

// Merge all the modules together.
var sdl = {};
for (var i in modules) {
	extend(sdl, require('./lib/' + modules[i]));
}

module.exports = sdl;
