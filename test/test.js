'use strict'

const NS = require('../index')

// Test app begin
const App = NS.app
App.on('before-quit', function (event) {
	// event.preventDefault()
})


// Test image preload
const Image = NS.image
let lena = new Image(__dirname + '/lena.jpg')


// Test font preload
const Font = NS.font
let font = new Font(__dirname + '/华文黑体.ttf')


// Test window begin
const Window = NS.window
let win = new Window
win.on('close', function() {
	App.quit()
})
win.on('change', function() {
	draw()
})

// Test window Setter

// win.focus = true
// win.grab = true
// win.show = false // BUG on Mac
win.bounds = [100, 100, 200, 200]
// win.minimumSize = [500, 500]
// win.maximumSize = [600, 600]
win.minimize = true
win.minimize = false
win.maximize = true
// win.fullScreen = true
// win.closable = false
win.title = 'TEST'
win.bordered = false
win.background = 0xFFFFFF

// Test window Getter
console.log('Test window Getter')
console.log(win.focus)
console.log(win.grab)
console.log(win.show)
console.log(win.bounds)
console.log(win.minimumSize)
console.log(win.maximumSize)
console.log(win.minimize)
console.log(win.maximize)
console.log(win.fullScreen)
console.log(win.closable)

// test window static methods

// console.log(Window.all.length)
// console.log(Window.focused)
// console.log(Window.mouseFocused)
// console.log(Window.keyboardFocused)
// console.log(Window.grabbed)
// console.log(Window.screenSaver)
// Window.screenSaver = true
// console.log(Window.fromID(1))
Window.showMessageBox({
	type: 'error',
	title: 'Test Message Box Title',
	message: 'Test MEssage Box Message',
	buttons: [
		{
			type: 'yes',
			text: 'Test Message Box Button'
		}
	]
})

// setInterval(draw, 1000 / 24)

function draw() {
	let render = win.render
	let size = render.outputSize

	// Test render fill rects
	render.color = 0x00FFFF
	render.fillRect((new Array(5)).join(' ').split('').map(() => {
		return [
			parseInt(Math.random() * size.w),
			parseInt(Math.random() * size.h),
			parseInt(Math.random() * size.w / 20),
			parseInt(Math.random() * size.h / 20),
		]
	}))

	// Test render draw rects
	render.color = 0x00FF00
	render.drawRect((new Array(100)).join(' ').split('').map(() => {
		return [
			parseInt(Math.random() * size.w),
			parseInt(Math.random() * size.h),
			parseInt(Math.random() * size.w),
			parseInt(Math.random() * size.h),
		]
	}))

	// Test render draw lines
	render.color = 0xFF0000
	render.drawLine((new Array(100)).join(' ').split('').map(() => {
		return [parseInt(Math.random() * size.w), parseInt(Math.random() * size.h)]
	}))

	// Test render draw Points, its slow
	render.color = 0x0000FF
	render.drawPoint((new Array(1000)).join(' ').split('').map(() => {
		let size = render.outputSize
		return [parseInt(Math.random() * size.w), parseInt(Math.random() * size.h)]
	}))

	// Test render copy image
	render.copy(lena.texture(render), null, [size.w / 3, size.h / 3, size.w / 3, size.h / 3])

	// Test render copy font
	let text = font.blend('你好, Hello', [0xaaaaaa, 0xaa], 0xffffff)
	render.cut(text.texture(render))


	// Test render.gfx
	let gfx = render.gfx

	gfx.rectFilled(100, 100, 400, 400, [0xabcdef, 100])

	gfx.ellipseFilled(200, 600, 200, 300, 0xfedcba)

	gfx.pieFilled(200, 1000, 100, 0, 100, 0xefcdab)

	gfx.trigonFilled(300, 1200, 400, 1200, 500, 1000, 0x0000FF)
	gfx.bezier([
		[300, 400],
		[200, 500],
		[700, 300]
	], 999, 0x667788)
	// BUG
	// gfx.polygonImage([
	// 	[400, 400],
	// 	[400, 500],
	// 	[500, 400]
	// ], lena)


	// update window buffer
	render.present()
}


// Test mouse begin
let Mouse = NS.mouse
Mouse.setCursor('hand')
Mouse.capture = false
// Mouse.relative = true
// Mouse.show = false
console.log(Mouse.state)


// Test keyboard begin
let Keyboard = NS.keyboard
Keyboard.setTextInput([400, 400, 500, 500])
Keyboard.startTextInput()
Keyboard.stopTextInput()
console.log(Keyboard.hasTextInput)
console.log(Keyboard.hasScreenKeyboard)
console.log(Keyboard.state)
console.log(Keyboard.mod)