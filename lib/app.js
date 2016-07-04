'use strict'

const EventEmitter = require('events')
const util = require('util')

const SDL = require('../dep/SDL')
const SDL_events = require('../dep/SDL_events')
const SDL_mouse = require('../dep/SDL_mouse')

const wins = require('./windows')
const utils = require('./utils')
const clipboard = require('./clipboard')

const ref = require('ref')

const globals = {
	filter: () => {}
}

class app extends EventEmitter {
	constructor(flags = 0x00000020) {
		super()

		if(SDL.SDL_Init(flags) != 0) {
			this.quit()
			return
		}

		this.on('_event', (event) => {
			if (event.type == SDL_events.SDL_EventType.SDL_QUIT){
				this.quit()
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_CLIPBOARDUPDATE) {
				clipboard.emit('update')
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_DROPFILE) {
				this.emit('drop', event.drop.file)
			}
		})

		globals.filter = SDL_events.SDL_EventFilter.toPointer((data, event) => {
			event = event.deref()

			if(event.type >= SDL_events.SDL_EventType.SDL_WINDOWEVENT && event.type <= SDL_events.SDL_EventType.SDL_MOUSEWHEEL) {
				let win = wins.retrive(event.window.windowID)
				if(win) {
					win.emit('_event', event)
				}
			} else {
				this.emit('_event', event)
			}
		})
		SDL_events.SDL_AddEventWatch(globals.filter, null)

		;(function forever() {
			let event = ref.alloc(SDL_events.SDL_Event)
			let pending = SDL_events.SDL_PollEvent(event)
			if(pending) {
				setImmediate(forever)
			} else {
				setTimeout(forever)
			}
		})()
	}

	quit() {
		utils.preventDefault(this, 'before-quit', () => {
			this.exit()
		})
	}

	hide() {
		wins.forEach((win) => {
			win.hide()
		})
	}

	show() {
		wins.forEach((win) => {
			win.show()
		})
	}

	exit(exitCode = 0) {
		utils.preventDefault(this, 'will-quit', () => {
			try {
				require('sdl2-image').class('image').quit()
			} catch(e) {}
			try {
				require('sdl2-ttf').class('ttf').quit()
			} catch(e) {}

			SDL.SDL_Quit()
			process.exit(exitCode)
		})
	}
}

module.exports = app
