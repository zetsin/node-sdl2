'use strict'

let sdl2 = {
	require(name) {
		return require('./dep/' + name)
	},
	class(name) {
		return require('./lib/' + name)
	},
	get app() {
		return new (require('./lib/app'))
	},
	get window() {
		return require('./lib/window')
	},
	get clipboard() {
		return require('./lib/clipboard')
	},
	get power() {
		return require('./lib/power')
	},
	get mouse() {
		return require('./lib/mouse')
	},
	get keyboard() {
		return require('./lib/keyboard')
	},
	get font() {
		return require('sdl2-ttf').class('ttf')
	},
	get image() {
		return require('sdl2-image').class('image')
	},
}

module.exports = sdl2