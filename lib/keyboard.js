'use strict'

const SDL_keyboard = require('../dep/SDL_keyboard')
const SDL_scancode = require('../dep/SDL_scancode')
const SDL_keycode = require('../dep/SDL_keycode')
const SDL_rect = require('../dep/SDL_rect')

const utils = require('./utils')

const ref = require('ref')

let keyboard = {
	startTextInput() {
		SDL_keyboard.SDL_StartTextInput()
	},
	stopTextInput() {
		SDL_keyboard.SDL_StopTextInput()
	},
	setTextInput(rect) {
		let _rect = null
		if(rect) {
			_rect = SDL_rect.SDL_Rect(utils.arraylike2obj(rect, 'x,y,w,h')).ref()
		}
		SDL_keyboard.SDL_SetTextInputRect(_rect)
	},
	get hasTextInput() {
		return !!SDL_keyboard.SDL_IsTextInputActive()
	},
	get hasScreenKeyboard() {
		return !!SDL_keyboard.SDL_HasScreenKeyboardSupport()
	},
	get state() {
		let num = ref.alloc('int')
		let snapshot = SDL_keyboard.SDL_GetKeyboardState(num)
		num = num.deref()

		let buf = new Buffer(num)
		buf = buf.ref()
		ref.writePointer(buf, 0, snapshot)

		buf = buf.deref()

		let ret = {}
		let scancode = SDL_scancode.SDL_Scancode
		Object.keys(scancode).forEach((value) => {
			ret[SDL_keyboard.SDL_GetScancodeName(scancode[value])] = !!buf[scancode[value]]
		})

		return ret
	},
	get mod() {
		let ret = {}
		let modestate = SDL_keyboard.SDL_GetModState()

		utils.parseMod(ret, modestate)

		return ret
	},
	// set mod(state) {
	// 	console.log(state)
	// 	let modstate = SDL_keyboard.SDL_GetModState()
	// 	console.log(modstate)

	// 	let keymod = SDL_keycode.SDL_Keymod
	// 	let keys = Object.keys(keymod)

	// 	Object.keys(state).forEach((value) => {
	// 		keys.forEach((key) => {
	// 			if(key.includes(value.toUpperCase())) {
	// 				console.log(state[value]);
	// 				(state[value] == true) ? (modstate |= keymod[key]) : (modstate &= ~keymod[key])
	// 			}
	// 		})
	// 	})
	// 	console.log(modstate)
	// 	SDL_keyboard.SDL_SetModState(modstate)
	// }
}

module.exports = keyboard