'use strict'

const SDL_rect = require('../dep/SDL_rect')
const SDL_render = require('../dep/SDL_render')
const SDL_surface = require('../dep/SDL_surface')

const texture = require('./texture')
const utils = require('./utils')

const ref = require('ref')

class render {
	constructor(_render) {
		this._render = _render
	}

	get gfx() {
		this._gfx = this._gfx || new (require('sdl2-gfx').class('primitives'))(this._render)
		return this._gfx
	}

	destroy() {
		SDL_render.SDL_DestroyRenderer(this._render)
	}
	clear() {
		SDL_render.SDL_RenderClear(this._render)
	}
	copy(tt, srcrect, dstrect, angle, center, flip) {
		let _srcrect = null
		if(srcrect) {
			_srcrect = SDL_rect.SDL_Rect(utils.arraylike2obj(srcrect, 'x,y,w,h')).ref()
		}

		let _dstrect = null
		if(dstrect) {
			_dstrect = SDL_rect.SDL_Rect(utils.arraylike2obj(dstrect, 'x,y,w,h')).ref()
		}

		angle = +angle || 0

		let _center = null
		if(center) {
			_center = SDL_rect.SDL_Point(utils.arraylike2obj(center, 'x,y')).ref()
		}

		flip = +flip || 0

		SDL_render.SDL_RenderCopyEx(this._render, tt._texture, _srcrect, _dstrect, angle, _center, flip)
	}
	cut(tt, srcrect, dstrect, angle, center, flip) {
		this.copy(tt, srcrect, dstrect, angle, center, flip)
		tt.destroy()
	}
	drawLine(points = []) {
		points = points.length >= 0 ? points : [points]
		let buf = new Buffer(SDL_rect.SDL_Point.size * points.length)
		points.forEach((point, index) => {
			buf.set(SDL_rect.SDL_Point(utils.arraylike2obj(point, 'x,y')).ref(), index * SDL_rect.SDL_Point.size)
		})
		SDL_render.SDL_RenderDrawLines(this._render, buf, points.length)
	}
	drawPoint(points = []) {
		points = points.length >= 0 ? points : [points]
		let buf = new Buffer(SDL_rect.SDL_Point.size * points.length)
		points.forEach((point, index) => {
			buf.set(SDL_rect.SDL_Point(utils.arraylike2obj(point, 'x,y')).ref(), index * SDL_rect.SDL_Point.size)
		})
		SDL_render.SDL_RenderDrawPoints(this._render, buf, points.length)
	}
	drawRect(rects = []) {
		rects = rects.length >= 0 ? rects : [rects]
		let buf = new Buffer(SDL_rect.SDL_Rect.size * rects.length)
		rects.forEach((point, index) => {
			buf.set(SDL_rect.SDL_Rect(utils.arraylike2obj(point, 'x,y,w,h')).ref(), index * SDL_rect.SDL_Point.size)
		})
		SDL_render.SDL_RenderDrawRects(this._render, buf, rects.length)
	}
	fillRect(rects = []) {
		rects = rects.length >= 0 ? rects : [rects]
		let buf = new Buffer(SDL_rect.SDL_Rect.size * rects.length)
		rects.forEach((point, index) => {
			buf.set(SDL_rect.SDL_Rect(utils.arraylike2obj(point, 'x,y,w,h')).ref(), index * SDL_rect.SDL_Point.size)
		})
		SDL_render.SDL_RenderFillRects(this._render, buf, rects.length)
	}
	present() {
		SDL_render.SDL_RenderPresent(this._render)
	}
	readPixels(rect, pitch) {
		let _rect = null
		if(rect) {
			_rect = SDL_rect.SDL_Rect(utils.arraylike2obj(rect, 'x,y,w,h')).ref()
		} else { 
			rect = this.outputSize
		}
		pitch = pitch || 4

		let buf = new Buffer(rect.w * rect.h * pitch)
		SDL_render.SDL_RenderReadPixels(this._render, _rect, 0, buf, pitch)
		return buf
	}
	createTexture(w, h, access = 2) {
		let _texture = SDL_render.SDL_CreateTexture(this._render, null, +access, +w, +h)
		return new texture(_texture)
	}
	createTextureFromSurface(_surface) {
		let _texture = SDL_render.SDL_CreateTextureFromSurface(this._render, _surface)
		return new texture(_texture)
	}

	get color() {
		let r = ref.alloc('uint8')
		let g = ref.alloc('uint8')
		let b = ref.alloc('uint8')
		let a = ref.alloc('uint8')
		SDL_render.SDL_GetRenderDrawColor(this._render, r, g, b, a)
		return utils.arraylike({
			r: r.deref(),
			g: g.deref(),
			b: b.deref(),
			a: a.deref()
		})
	}
	set color(rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		SDL_render.SDL_SetRenderDrawColor(this._render, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	get blend() {
		let mode = ref.alloc('int')
		SDL_render.SDL_GetRenderDrawBlendMode(this._render, mode)
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
	set blend(mode) {
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
		SDL_render.SDL_SetRenderDrawBlendMode(this._texture, mode)
	}
	get clip() {
		let rect = SDL_rect.SDL_Rect()
		SDL_render.SDL_RenderGetClipRect(this._render, rect.ref())
		return utils.arraylike({
			x: rect.x,
			y: rect.y,
			w: rect.w,
			h: rect.h
		})
	}
	set clip(rect) {
		rect = SDL_rect.SDL_Rect(utils.arraylike2obj(rect, 'x,y,w,h'))
		SDL_render.SDL_RenderSetClipRect(this._render, rect.ref())
	}
	get logicalSize() {
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		SDL_render.SDL_RenderGetLogicalSize(this._render, w, h)
		return utils.arraylike({
			w: w.deref(),
			h: h.deref()
		})
	}
	set logicalSize(size) {
		size = utils.arraylike2obj(size, 'w,h')
		SDL_render.SDL_RenderSetLogicalSize(this._render, size.w, size.h)
	}
	get scale() {
		let x = ref.alloc('float')
		let y = ref.alloc('float')
		SDL_render.SDL_RenderGetScale(this._render, x, y)
		return utils.arraylike({
			x: x.deref(),
			y: y.deref()
		})
	}
	set scale(xy) {
		xy = utils.arraylike2obj(xy, 'x,y')
		SDL_render.SDL_RenderSetScale(this._render, xy.x, xy.y)
	}
	get viewport() {
		let rect = SDL_rect.SDL_Rect()
		SDL_render.SDL_RenderGetViewport(this._render, rect.ref())
		return utils.arraylike({
			x: rect.x,
			y: rect.y,
			w: rect.w,
			h: rect.h
		})
	}
	set viewport(rect) {
		rect = SDL_rect.SDL_Rect(utils.arraylike2obj(rect, 'x,y,w,h'))
		SDL_render.SDL_RenderSetViewport(this._render, rect.ref())
	}
	get outputSize() {
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		SDL_render.SDL_GetRendererOutputSize(this._render, w, h)
		return utils.arraylike({
			w: w.deref(),
			h: h.deref()
		})
	}
	get target() {
		let _texture = SDL_render.SDL_GetRenderTarget(this._render)
		return new texture(_texture)
	}
	set target(tt) {
		SDL_render.SDL_SetRenderTarget(tt._texture)
	}

	static create(window, driver, flags) {
		let _render = SDL_render.SDL_CreateRenderer(window, driver, flags)
		return new render(_render)
	}
	static createSoftware(_surface) {
		let _render = SDL_render.SDL_CreateSoftwareRenderer(_surface)
		return new render(_render)
	}
}

module.exports = render
