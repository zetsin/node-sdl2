'use strict'

const EventEmitter = require('events')
const util = require('util')

const SDL = require('../dep/SDL')
const SDL_events = require('../dep/SDL_events')
const SDL_video = require('../dep/SDL_video')
const SDL_render = require('../dep/SDL_render')
const SDL_rect = require('../dep/SDL_rect')
const SDL_pixels = require('../dep/SDL_pixels')
const SDL_messagebox = require('../dep/SDL_messagebox')
const SDL_keycode = require('../dep/SDL_keycode')
const SDL_keyboard = require('../dep/SDL_keyboard')
const SDL_mouse = require('../dep/SDL_mouse')

const windows = require('./windows')
const render = require('./render')
const utils = require('./utils')

const ref = require('ref')

class window extends EventEmitter {
	constructor(options = {}) {
		super()

		options.title = (options.title || '').toString()
		options.width = options.width >= 0 ? options.width : 640
		options.height = options.height >= 0 ? options.height : 480
		options.center = !!options.center
		options.x = options.center ? 0x2FFF0000 : (options.x >= 0 ? options.x : 0x1FFF0000)
		options.y = options.center ? 0x2FFF0000 : (options.y >= 0 ? options.y : 0x1FFF0000)
		options.background = options.background >= 0 ? options.background : 0xFFFFFF
		options.closable = options.closable == false ? false : true
		options.fullscreen = !!options.fullscreen
		options.fullscreenDesktop = !!options.fullscreenDesktop
		options.show = options.show == false ? false : true
		options.resizable = options.resizable == false ? false : true
		options.borderless = !!options.borderless
		options.minimized = !!options.minimized
		options.maximized = !!options.maximized
		options.hdpi = options.hdpi == false ? false : true
		options.mouseCapture = !!options.mouseCapture
		options.grab = !!options.grab

		let flags = 0
		flags |= options.fullscreen ? SDL_video.SDL_WindowFlags.SDL_WINDOW_FULLSCREEN : 0
		flags |= options.fullscreenDesktop ? SDL_video.SDL_WindowFlags.SDL_WINDOW_FULLSCREEN_DESKTOP : 0
		flags |= options.show ? SDL_video.SDL_WindowFlags.SDL_WINDOW_SHOWN : SDL_video.SDL_WindowFlags.SDL_WINDOW_HIDDEN
		flags |= options.resizable ? SDL_video.SDL_WindowFlags.SDL_WINDOW_RESIZABLE : 0
		flags |= options.borderless ? SDL_video.SDL_WindowFlags.SDL_WINDOW_BORDERLESS : 0
		flags |= options.minimize ? SDL_video.SDL_WindowFlags.SDL_WINDOW_MINIMIZED : 0
		flags |= options.maximize ? SDL_video.SDL_WindowFlags.SDL_WINDOW_MAXIMIZED : 0
		flags |= options.hdpi ? SDL_video.SDL_WindowFlags.SDL_WINDOW_ALLOW_HIGHDPI : 0
		flags |= options.mouseCapture ? SDL_video.SDL_WindowFlags.SDL_WINDOW_MOUSE_CAPTURE : 0
		flags |= options.grab ? SDL_video.SDL_WindowFlags.SDL_WINDOW_INPUT_GRABBED : 0

		this._options = options
		this._window = SDL_video.SDL_CreateWindow(options.title, options.x, options.y, options.width, options.height, flags)
		if(this._window.isNull()) {
			this.destroy()
			return
		}
		this.render = render.create(this._window, -1, 0)
		windows.create(this)

		let change = (w, h) => {
			this.render.viewport = Object.assign(this.render.outputSize, {
				x: 0,
				y: 0
			})
			this.render.color = options.background
			this.render.clear()
			this.emit('change', w, h)
		}

		this.on('_event', (event) => {
			if(event.type == SDL_events.SDL_EventType.SDL_WINDOWEVENT) {
				let evt = event.window.event
				if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_SHOWN) {
					this.emit('show')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_HIDDEN) {
					this.emit('hide')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_EXPOSED) {
					change()
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_MOVED) {
					this.emit('move', event.window.data1, event.window.data2)
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_RESIZED) {
					this.emit('resize', event.window.data1, event.window.data2)
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_SIZE_CHANGED) {
					change(event.window.data1, event.window.data2)
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_MINIMIZED) {
					this.emit('minimize')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_MAXIMIZED) {
					this.emit('maximize')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_RESTORED) {
					this.emit('restore')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_ENTER) {
					this.emit('enter')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_LEAVE) {
					this.emit('leave')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_FOCUS_GAINED) {
					this.emit('focus')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_FOCUS_LOST) {
					this.emit('blur')
				}
				else if(evt == SDL_video.SDL_WindowEventID.SDL_WINDOWEVENT_CLOSE) {
					this.close()
				}
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_KEYDOWN) {
				let ret = parseKey(event.key)
				this.emit('keydown', ret)
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_KEYUP) {
				let ret = parseKey(event.key)
				this.emit('keyup', ret)
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_TEXTEDITING) {
				let buf = new Buffer(event.edit.text)
				let str = buf.reinterpretUntilZeros(1).toString()
				this.emit('editing', {
					text: str,
					start: event.edit.start,
					length: event.edit.length
				})
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_TEXTINPUT) {
				let buf = new Buffer(event.text.text)
				let str = buf.reinterpretUntilZeros(1).toString()
				console.log(str)
				this.emit('textinput', str)
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_MOUSEMOTION) {
				let ret = {
					x: event.motion.x,
					y: event.motion.y,
					xrel: event.motion.xrel,
					yrel: event.motion.yrel
				}

				utils.parseState(ret, event.motion.state)

				this.emit('mousemove', ret)
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_MOUSEBUTTONDOWN) {
				let ret = parseMouse(event.button)
				this.emit('mousedown', ret)
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_MOUSEBUTTONUP) {
				let ret = parseMouse(event.button)
				this.emit('mouseup', ret)
			}
			else if(event.type == SDL_events.SDL_EventType.SDL_MOUSEWHEEL) {
				let ret = {
					x: event.wheel.x,
					y: event.wheel.y,
					direction: event.wheel.direction * 2 - 1
				}
				this.emit('mousewheel', ret)
			}
		})

		function parseKey(key) {
			let ret = {
				scancode: key.keysym.scancode,
				scanname: SDL_keyboard.SDL_GetScancodeName(key.keysym.scancode),
				keycode: key.keysym.sym,
				keyname: SDL_keyboard.SDL_GetKeyName(key.keysym.sym),
				repeat: !!key.repeat
			}
			utils.parseMod(ret, key.keysym.mod)
			return ret
		}
		function parseMouse(button) {
			let buttons = {
				1: 'left',
				2: 'middle',
				3: 'right',
				4: 'x1',
				5: 'x2'
			}
			return ({
				x: button.x,
				y: button.y,
				clicks: button.clicks,
				button: buttons[button.button]
			})
		}
	}

	getID() {
		return SDL_video.SDL_GetWindowID(this._window)
	}
	close() {
		if(!this.closable) {
			return
		}
		utils.preventDefault(this, 'close', () => {
			this.destroy()
		})
	}
	destroy() {
		this.render.destroy()
		SDL_video.SDL_DestroyWindow(this._window)
		windows.destroy(this.id)
		this.emit('closed')
	}
	restore() {
		SDL_video.SDL_RestoreWindow(this._window)
	}
	center() {
		this.position = [0x2FFF0000, 0x2FFF0000]
	}
	setModal(win) {
		if(win && win._window) {
			SDL_video.SDL_SetWindowModalFor(win._window, this._window)
		}
	}
	set focus(_focus) {
		if(!!_focus) {
			SDL_video.SDL_RaiseWindow(this._window)
		}
		// FIXME else
	}
	get focus() {
		return this.id == window.focused.id
	}
	set grab(_grab) {
		SDL_video.SDL_SetWindowGrab(this._window, !!_grab)
	}
	get grab() {
		return !!SDL_video.SDL_GetWindowGrab(this._window)
	}
	set show(_shown) {
		if(_shown == 'focus') {
			SDL_video.SDL_ShowWindow(this._window)
			this.focus()
		}
		else if(!!_shown) {
			SDL_video.SDL_ShowWindow(this._window)
		}
		else {
			SDL_video.SDL_HideWindow(this._window)
		}
	}
	get show() {
		return !!(SDL_video.SDL_GetWindowFlags(this._window) & SDL_video.SDL_WindowFlags.SDL_WINDOW_SHOWN)
	}
	set maximize(_maximized) {
		if(!!_maximized) {
			SDL_video.SDL_MaximizeWindow(this._window)
		} else if(this.maximize) {
			this.restore()
		}
	}
	get maximize() {
		return !!(SDL_video.SDL_GetWindowFlags(this._window) & SDL_video.SDL_WindowFlags.SDL_WINDOW_MAXIMIZED)
	}
	set minimize(_minimized) {
		if(!!_minimized) {
			SDL_video.SDL_MinimizeWindow(this._window)
		} else if(this.minimize) {
			this.restore()
		}
	}
	get minimize() {
		return !!(SDL_video.SDL_GetWindowFlags(this._window) & SDL_video.SDL_WindowFlags.SDL_WINDOW_MINIMIZED)
	}
	set fullScreen(full) {
		if(full == 'desktop') {
			full = SDL_video.SDL_WindowFlags.SDL_WINDOW_FULLSCREEN_DESKTOP
		}
		else if(!!full) {
			full = SDL_video.SDL_WindowFlags.SDL_WINDOW_FULLSCREEN
		} else {
			full = 0
		}

		SDL_video.SDL_SetWindowFullscreen(full)
	}
	get fullScreen() {
		return !!(SDL_video.SDL_GetWindowFlags(this._window) & SDL_video.SDL_WindowFlags.SDL_WINDOW_FULLSCREEN)
	}
	set bounds(rect) {
		rect = utils.arraylike2obj(rect, 'x,y,w,h')
		this.position = rect
		this.size = rect
	}
	get bounds() {
		let position = this.position
		let size = this.size
		return utils.arraylike({
			x: position.x,
			y: position.y,
			w: size.w,
			h: size.h
		})
	}
	set size(wh = {}) {
		let size = this.size

		let w = wh.w >= 0 ? wh.w : (wh[0] >= 0 ? wh[0] : size.w)
		let h = wh.h >= 0 ? wh.h : (wh[1] >= 0 ? wh[1] : size.h)

		SDL_video.SDL_SetWindowSize(this._window, w, h)
	}
	get size() {
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		SDL_video.SDL_GetWindowSize(this._window, w, h)
		return utils.arraylike({
			w: w.deref(), 
			h: h.deref()
		})
	}
	set minimumSize(wh = {}) {
		let size = this.minimumSize

		let w = wh.w >= 0 ? wh.w : (wh[0] >= 0 ? wh[0] : size.w)
		let h = wh.h >= 0 ? wh.h : (wh[1] >= 0 ? wh[1] : size.h)

		SDL_video.SDL_SetWindowMinimumSize(this._window, w, h)

	}
	get minimumSize() {
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		SDL_video.SDL_GetWindowMinimumSize(this._window, w, h)
		return utils.arraylike({
			w: w.deref(), 
			h: h.deref()
		})
	}
	set maximumSize(wh = {}) {
		let size = this.maximumSize

		let w = wh.w >= 0 ? wh.w : (wh[0] >= 0 ? wh[0] : size.w)
		let h = wh.h >= 0 ? wh.h : (wh[1] >= 0 ? wh[1] : size.h)

		SDL_video.SDL_SetWindowMaximumSize(this._window, w, h)

	}
	get maximumSize() {
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		SDL_video.SDL_GetWindowMaximumSize(this._window, w, h)
		return utils.arraylike({
			w: w.deref(), 
			h: h.deref()
		})
	}
	set resizable(_resizable) {

	}
	get resizable() {
		return !!(SDL_video.SDL_GetWindowFlags(this._window) & SDL_video.SDL_WindowFlags.SDL_WINDOW_RESIZABLE)
	}
	set movable(_movable) {

	}
	get movable() {

	}
	set minimizable(_minimizable) {

	}
	get minimizable() {

	}
	set maximizable(_maximizable) {

	}
	get maximizable() {

	}
	set fullScreenable(_fullScreenable) {

	}
	get fullScreenable() {

	}
	set closable(_closable) {
		this._options.closable = !!_closable
	}
	get closable() {
		return this._options.closable
	}
	set alwaysOnTop(_top) {
	}
	get alwaysOnTop() {
	}
	set position(xy = {}) {

		let position = this.position

		let x = xy.x >= 0 ? xy.x : (xy[0] >= 0 ? xy[0] : position.x)
		let y = xy.y >= 0 ? xy.y : (xy[1] >= 0 ? xy[1] : position.y)

		SDL_video.SDL_SetWindowPosition(this._window, x, y)
	}
	get position() {
		let x = ref.alloc('int')
		let y = ref.alloc('int')
		SDL_video.SDL_GetWindowPosition(this._window, x, y)
		return utils.arraylike({
			x: x.deref(), 
			y: y.deref()
		})
	}
	set title(_title = '') {
		SDL_video.SDL_SetWindowTitle(this._window, _title.toString())
	}
	get title() {
		return SDL_video.SDL_GetWindowTitle(this._window)
	}
	set bordered(_bordered) {
		SDL_video.SDL_SetWindowBordered(this._window, !!_bordered)
	}
	get bordersSize() {
		let top = ref.alloc('int')
		let left = ref.alloc('int')
		let bottom = ref.alloc('int')
		let right = ref.alloc('int')
		SDL_video.SDL_GetWindowBordersSize(this._window, top, left, bottom, right)
		return utils.arraylike({
			top: top.deref(), 
			left: left.deref(), 
			bottom: bottom.deref(), 
			right: right.deref()
		})
	}
	set opacity(_opacity) {
		// _opacity = parseFloat(_opacity) || 0
		// SDL_video.SDL_SetWindowOpacity(this._window, _opacity)
	}
	get opacity() {
		// let _opacity = ref.alloc('int')
		// SDL_video.SDL_GetWindowOpacity(this._window, _opacity)
		// return _opacity.deref()
	}
	set background(rgb = 0) {
		this._options.background = +rgb
	}
	get background() {
		return this._options.background
	}
	get screenKeyboardShown() {
		return !!SDL_keyboard.SDL_IsScreenKeyboardShown(this._window)
	}

	static get all() {
		return Object.keys(windows).map((key) => { return windows[key] })
	}
	static get focused() {
		let win = SDL_video.SDL_GL_GetCurrentWindow()
		let id = SDL_video.SDL_GetWindowID(win)
		return windows[id]
	}
	static get mouseFocused() {
		let win = SDL_mouse.SDL_GetMouseFocus()
		let id = SDL_video.SDL_GetWindowID(win)
		return windows[id]
	}
	static get keyboardFocused() {
		let win = SDL_keyboard.SDL_GetKeyboardFocus()
		let id = SDL_video.SDL_GetWindowID(win)
		return windows[id]
	}
	static get grabbed() {
		let win = SDL_video.SDL_GetGrabbedWindow()
		let id = SDL_video.SDL_GetWindowID(win)
		return windows[id]
	}
	static get screenSaver() {
		return !!SDL_video.SDL_IsScreenSaverEnabled()
	}
	static set screenSaver(enabled) {
		!!enabled ? SDL_video.SDL_EnableScreenSaver() : SDL_video.SDL_DisableScreenSaver()
	}
	static fromID(id = 0) {
		return windows[id]
	}
	static showMessageBox(options = {}, callback = () => {}) {

		options.type = options.type
		if(options.type == 'error') {
			options.type = SDL_messagebox.SDL_MessageBoxFlags.SDL_MESSAGEBOX_ERROR
		} else if(options.type == 'warning') {
			options.type = SDL_messagebox.SDL_MessageBoxFlags.SDL_MESSAGEBOX_WARNING
		} else {
			options.type = SDL_messagebox.SDL_MessageBoxFlags.SDL_MESSAGEBOX_INFORMATION
		}

		options.window = options.window
		if(options.window && options.window._window) {
			options.window = options.window._window
		} else {
			options.window = null
		}

		options.title = (options.title || '').toString()
		options.message = (options.message || '').toString()

		options.buttons = options.buttons || []
		let num = options.buttons.length
		let size = SDL_messagebox.SDL_MessageBoxButtonData.size
		let mbbd = new Buffer(num * size)
		mbbd.type = SDL_messagebox.SDL_MessageBoxButtonData

		options.buttons.forEach((button, index) => {
			let type = button.flag
			if(type == 'yes') {
				type = SDL_messagebox.SDL_MessageBoxButtonFlags.SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT
			} else if(type = 'cancel') {
				type = SDL_messagebox.SDL_MessageBoxButtonFlags.SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT
			} else {
				type = 0
			}
			ref.set(mbbd, index * size, new SDL_messagebox.SDL_MessageBoxButtonData({
				flags: type,
				buttonid: index,
				text: (button.text || '').toString()
			}))
		})

		// options.colors = options.colors || {}
		// let mbcs = new SDL_messagebox.SDL_MessageBoxColorScheme
		// mbcs.colors[0].r = options.colors.background & 0xFF
		// mbcs.colors[0].g = options.colors.background & 0xFF00
		// mbcs.colors[0].b = options.colors.background & 0xFF0000
		// mbcs.colors[1].r = options.colors.text & 0xFF
		// mbcs.colors[1].g = options.colors.text & 0xFF00
		// mbcs.colors[1].b = options.colors.text & 0xFF0000
		// mbcs.colors[2].r = options.colors.buttonBorder & 0xFF
		// mbcs.colors[2].g = options.colors.buttonBorder & 0xFF00
		// mbcs.colors[2].b = options.colors.buttonBorder & 0xFF0000
		// mbcs.colors[3].r = options.colors.buttonBackground & 0xFF
		// mbcs.colors[3].g = options.colors.buttonBackground & 0xFF00
		// mbcs.colors[3].b = options.colors.buttonBackground & 0xFF0000
		// mbcs.colors[4].r = options.colors.buttonSelected & 0xFF
		// mbcs.colors[4].g = options.colors.buttonSelected & 0xFF00
		// mbcs.colors[4].b = options.colors.buttonSelected & 0xFF0000

		let mbd = new SDL_messagebox.SDL_MessageBoxData({
			flags: options.type,
			window: options.window ? options.window._window : null,
			title: options.title,
			message: options.message,
			numbuttons: num,
			buttons: mbbd,
			colorScheme: null
		})

		let id = ref.alloc('int')
		SDL_messagebox.SDL_ShowMessageBox(mbd.ref(), id)
		id = id.deref()
		callback(options.buttons[id], id)
	}
}

module.exports = window
