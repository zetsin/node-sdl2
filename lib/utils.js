'use strict'

const SDL_keycode = require('../dep/SDL_keycode')

exports.preventDefault = (emitter, event, callback) => {
	callback = callback || (() => {})
	let prevent = false

	emitter.listeners(event).forEach((listener) => {
		listener.call(emitter, {
			preventDefault: () => {
				prevent = true
			}
		})
	})
	if(!prevent) callback()
}

exports.arraylike = (obj) => {
	Object.keys(obj).forEach((value, index) => {
		obj[index] = obj[value]
	})
	return obj
}

exports.arraylike2obj = (obj, keys) => {
	keys = keys.split(',')
	var ret = {}
	keys.forEach((value, index) => {
		value = value.trim()
		ret[value] = (value in obj) ? obj[value] : (obj[index] || 0)
	})
	return ret
}

exports.parseRGBA = (rgba) => {
	rgba = rgba || 0

	let rgb, a
	if(Array.isArray(rgba)) {
		rgb = rgba[0]
		a = rgba[1]
	} 
	else if(Number.isInteger(rgba)) {
		rgb = rgba
		a = 0xFF
	}
	else if(rgba.rgb || rgba.a) {
		rgb = rgba.rgb
		a = rgba.a
	}
	else {
		return rgba
	}

	rgb = rgb >= 0 ? rgb : 0
	a = a >= 0 ? a : 0xFF

	return exports.arraylike({
		r: (rgb >> 16) & 0xFF,
		g: (rgb >> 8) & 0xFF,
		b: rgb & 0xFF,
		a: a
	})
}

exports.parseState = (obj, state) => {
	let mask = {
		left: 1 << 0,
		middle: 1 << 1,
		right: 1 << 2,
		x1: 1 << 3,
		x2: 1 << 4
	}
	Object.keys(mask).forEach((value) => {
		obj[value] = !!(mask[value] & state)
	})
}

exports.parseMod = (obj, mod) => {
	let keymod = SDL_keycode.SDL_Keymod

	Object.keys(keymod).forEach((value) => {
		let keymodvalue = keymod[value]
		if(keymodvalue > keymod.KMOD_NONE && keymodvalue < keymod.KMOD_RESERVED) {
			value = value.toLowerCase()

			let name = value.slice('KMOD_'.length)
			obj[name] = !!(keymodvalue & mod)

			if(value[5] == 'l' || value[5] == 'r') {
				let _name = value.slice('KMOD_'.length + 1)
				obj[_name] = obj[_name] || obj[name]
			}
		}
	})
}