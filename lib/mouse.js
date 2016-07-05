'use strict'

const SDL_mouse = require('../dep/SDL_mouse')

const utils = require('./utils')

const ref = require('ref')

let mouse = {

	setCursor(data, mask, w, h, hot_x, hot_y) {

		SDL_mouse.SDL_SetCursor((() => {
			if(!data) {
				return SDL_mouse.SDL_GetDefaultCursor()
			}

			let name = data
			for(let key in SDL_mouse.SDL_SystemCursor) {
				let value = SDL_mouse.SDL_SystemCursor[key]
				if(key.slice('SDL_SYSTEM_CURSOR_'.length).toLowerCase() == name) {
					return SDL_mouse.SDL_CreateSystemCursor(value)
				}
			}

			let sur = data
			if(sur._surface) {
				hot_x = +mask || 0
				hot_y = +w || 0
				return SDL_mouse.SDL_CreateColorCursor(sur, hot_x, hot_y)
			}

			let data_buf = new Buffer(data)
			data_buf.type = 'uint8'
			let mask_buf = new Buffer(mask)
			mask_buf.type = 'uint8'
			return SDL_mouse.SDL_CreateCursor(data_buf.ref(), mask_buf.ref(), w, h, hot_x, hot_y)
		})())
	},
	set capture(enabled) {
		SDL_mouse.SDL_CaptureMouse(!!enabled)
	},
	get relative() {
		return !!SDL_mouse.SDL_GetRelativeMouseMode()
	},
	set relative(enabled) {
		SDL_mouse.SDL_SetRelativeMouseMode(!!enabled)
	},
	get show() {
		return !!SDL_mouse.SDL_ShowCursor(-1)
	},
	set show(enabled) {
		SDL_mouse.SDL_ShowCursor(!!enabled ? 1 : 0)
	},
	get state() {
		let x = ref.alloc('int')
		let y = ref.alloc('int')
		let s = 0 

		s = SDL_mouse.SDL_GetMouseState(x, y)
		let win = {
			x: x.deref(),
			y: y.deref()
		}
		utils.parseState(win, s)

		s = SDL_mouse.SDL_GetGlobalMouseState(x, y)
		let glo = {
			x: x.deref(),
			y: y.deref()
		}
		utils.parseState(glo, s)

		s = SDL_mouse.SDL_GetRelativeMouseState(x, y)
		let rel = {
			x: x.deref(),
			y: y.deref()
		}
		utils.parseState(rel, s)

		return {
			window: win,
			global: glo,
			relative: rel
		}
	}
}

module.exports = mouse