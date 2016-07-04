'use strict'

var Winode = require('../index')

// test app
var App = Winode.app
App.on('before-quit', function (event) {
	// event.preventDefault()
})

// test window
var Window = Winode.window
var win = new Window
win.on('close', function() {
	App.quit()
})
win.on('change', function() {
	draw()
})

// test mouse
var Mouse = Winode.mouse
Mouse.setCursor('hand')

// test keyboard
var Keyboard = Winode.keyboard
Keyboard.setTextInput([400, 400, 500, 500])


// test image
var Image = Winode.image
var image = new Image(__dirname + '/QQ.png')

// test font
var Font = Winode.font
var font = new Font(__dirname + '/华文黑体.ttf')
// setInterval(draw, 1000 / 24)

function draw() {
	// test render
	var render = win.render
	render.copy(image.texture(render), null)
	render.drawLine([
		[0, 0],
		[200, 200]
	])

	// test render + font
	let text = font.blend('你好Hello', [0xaaaaaa, 0xaa], 0xffffff)
	render.cut(text.texture(render))

	var gfx = render.gfx
	gfx.rectFilled(100, 100, 200, 200, [0xabcdef, 100])
	gfx.ellipseFilled(600, 500, 200, 100, 0xfedcba)
	gfx.bezier([
		[300, 400],
		[200, 500],
		[700, 300]
	], 999, 0x667788)

	// update
	render.present()
}