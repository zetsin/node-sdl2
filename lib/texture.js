'use strict'

const SDL_render = require('../dep/SDL_render')
const SDL_blendmode = require('../dep/SDL_blendmode')

const utils = require('./utils')

const ref = require('ref')

class texture {
	constructor(_texture) {
		this._texture = _texture
	}

	destroy() {
		SDL_render.SDL_DestroyTexture(this._texture)
	}
	query() {
		let format = ref.alloc('uint32')
		let access = ref.alloc('int')
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		SDL_render.SDL_QueryTexture(this._texture, format, access, w, h)
		return ({
			format: format.deref(),
			access: access.deref(),
			x: 0,
			y: 0,
			w: w.deref(),
			h: h.deref()
		})
	}
	lock(rect) {
		let _rect = null
		if(rect) {
			_rect = SDL_rect.SDL_Rect(utils.arraylike2obj(rect, 'x,y,w,h')).ref()
		} else { 
			rect = this.query()
		}

		let pixels = ref.alloc('pointer')
		let pitch = ref.alloc('int')
		SDL_render.SDL_LockTexture(this._texture, _rect, pixels, pitch)
		pitch = pitch.deref()
		let buf = new Buffer(pitch * rect.h)
		buf = buf.ref()
		buf.writePointer(0, pixels)
		buf = buf.deref()

		return({
			pixels: buf,
			pitch: pitch
		})
	}
	unlock() {
		SDL_render.SDL_UnlockTexture(this._texture)
	}
	update(rect, pixels, pitch) {
		let r = null
		if(rect) {
			r = SDL_rect.SDL_Rect(utils.arraylike2obj(rect, 'x,y,w,h')).ref()
		}

		SDL_render.SDL_UpdateTexture(this._texture, r, pixels.ref(), pitch)
	}

	get alphaMod() {
		let a = ref.alloc('uint8')
		SDL_render.SDL_GetTextureAlphaMod(this._texture, a)
		return a.deref()
	}
	set alphaMod(a = 0) {
		SDL_render.SDL_SetTextureAlphaMod(this._texture, +a)
	}
	get colorMod() {
		let r = ref.alloc('uint8')
		let g = ref.alloc('uint8')
		let b = ref.alloc('uint8')
		SDL_render.SDL_GetTextureColorMod(this._texture, r, g, b)
		return utils.arraylike({
			r: r.deref(),
			g: g.deref(),
			b: b.deref()
		})
	}
	set colorMod(rgb = 0) {
		rgb = utils.parseRGBA(rgb)
		SDL_render.SDL_SetTextureColorMod(this._texture, rgb.r, rgb.g, rgb.b)
	}
	get blend() {
		let mode = ref.alloc('int')
		SDL_render.SDL_GetTextureBlendMode(this._texture, mode)
		mode = mode.deref()
		if(mode == SDL_blendmode.SDL_BlendMode.SDL_BLENDMODE_BLEND) {
			return 'blend'
		} else if(mode == SDL_blendmode.SDL_BlendMode.SDL_BLENDMODE_ADD) {
			return 'add'
		} else if(mode == SDL_blendmode.SDL_BlendMode.SDL_BLENDMODE_MOD) {
			return 'mod'
		} else {
			return ''
		}
	}
	set blend(mode = 0) {
		mode = !mode.toLowerCase ? mode : mode.toLowerCase()
		if(mode == 'blend') {
			mode = SDL_blendmode.SDL_BlendMode.SDL_BLENDMODE_BLEND
		} else if(mode == 'add') {
			mode = SDL_blendmode.SDL_BlendMode.SDL_BLENDMODE_ADD
		} else if(mode == 'mod') {
			mode = SDL_blendmode.SDL_BlendMode.SDL_BLENDMODE_MOD
		} else {
			mode = SDL_blendmode.SDL_BlendMode.SDL_BLENDMODE_NONE
		}
		SDL_render.SDL_SetTextureBlendMode(this._texture, mode)
	}
}

module.exports = texture