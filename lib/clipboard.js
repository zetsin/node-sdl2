'use strict'

const EventEmitter = require('events')

const SDL_clipboard = require('../dep/SDL_clipboard')

class clipboard extends EventEmitter {
	constructor() {
		super()
	}
	hasText() {
		return !!SDL_clipboard.SDL_HasClipboardText()
	}

	get text() {
		return SDL_clipboard.SDL_GetClipboardText()
	}
	set text(value) {
		value = (value || '').toString()
		SDL_clipboard.SDL_SetClipboardText(value)
	}
}

module.exports = new clipboard