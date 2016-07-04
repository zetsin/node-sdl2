# node-sdl2
Bindings for SDL2 in Node

## Installation
Install with npm:
```javascript
npm install node-sdl2
```

## Use

### Use as primitive SDL2 API ( [SDL 2.0 API by Category](https://wiki.libsdl.org/APIByCategory) )

```javascript
const NS = require('node-sdl2')
const SDL2_video = NS.require('SDL2_video')
const SDL2_render = NS.require('SDl2_render')
...
```

### Use with wrapped class ( [Api Reference](#app) )

```javascript
const NS = require('node-sdl2')
const App = NS.app
const Window = NS.window

let win = new Window
win.on('close', () => {
  App.quit()
})
win.on('change', () => {
  draw()
})

let draw = () => {
  ...
}

```

## API References

* [app](#app)
* [window](#window)
* [clipboard](#clipboard)
* [keyboard](#keyboard)
* [mouse](#mouse)
* [power](#power)
* [font](#font)
* [image](#image)

### app
> Control your application's event lifecycle.

#### Events
The `app` object emits the following events:

##### Event 'window-all-closed'
##### Event 'before-quit'
##### Event 'will-quit'
##### Event 'drop'

#### Methods
The `app` object has the following methods:

##### `app.quit()`
##### `app.hide()`
##### `app.show()`
##### `app.exit()`

### window
> Create and control `window(s)`.

#### Events
The `window` object emits the following events:

##### Event 'show'
##### Event 'hide'
##### Event 'move'
##### Event 'resize'
##### Event 'minimize'
##### Event 'maximize'
##### Event 'restore'
##### Event 'enter'
##### Event 'leave'
##### Event 'focus'
##### Event 'blur'
##### Event 'keydown'
##### Event 'keyup'
##### Event 'editing'
##### Event 'textinput'
##### Event 'mousemove'
##### Event 'mousedown'
##### Event 'mouseup'
##### Event 'mousewheel'

### clipboard
> Get and set the clipboard text.

#### Events
The `clipboard` object emits the following events:

##### Event 'update'

#### Methods
The `clipboard` object has the following methods:

##### `clipboard.text` [Getter/Setter]
##### `clipboard.hasText` [Getter]

### keyboard
> Control the keyboard.

#### Methods
The `keyboard` object has the following methods:

##### `keyboard.startTextInput()`
##### `keyboard.stopTextInput()`
##### `keyboard.setTextInput(rect)`
##### `keyboard.hasTextInput` [Getter]
##### `keyboard.hasScreenKeyboard` [Getter]
##### `keyboard.state` [Getter]
##### `keyboard.mod` [Getter]

### mouse
> Control the mouse and cursor.

#### Methods
The `mouse` object has the following methods:

##### `mouse.setCursor(id)`
##### `mouse.setCursor(image, hot_x, hot_y)`
##### `mouse.setCursor(data, mask, w, h, hot_x, hot_y)`
##### `mouse.capture` [Getter]
##### `mouse.relative` [Getter/Setter]
##### `mouse.show` [Getter/Setter]
##### `mouse.state` [Getter]

### power
> Moniter the power infomation of hardware

#### Methods
The `power` object has the following methods:

##### `power.info` [Getter/Setter]

### font
> Allow you drawing text into window's face.
please `npm install sdl2-ttf` before use.

#### Methods
The `font` object has the following methods:

##### `new font(file, pixelsize, index)`
##### `font.style` [Geter/Setter]
##### `font.outline` [Geter/Setter]
##### `font.hinting` [Geter/Setter]
##### `font.kerning` [Geter/Setter]
##### `font.height` [Geter]
##### `font.ascent` [Geter]
##### `font.descent` [Geter]
##### `font.lineSkip` [Geter]
##### `font.solid(text, rgba)`
##### `font.shade(text, rgba, rgbaBG)`
##### `font.blend(text, rgba)`
##### `font.close()`
##### `font.test(char)`
##### `font.metrics(char)`
##### `font.getSize(char)`
##### `static Font.init()`
##### `static Font.wasInit()`
##### `static Font.quit()`

### image
> Load image from file.
please `npm install sdl2-image` before use.

#### Methods
The `image` object has the following methods:

##### `new image(file)`
##### `image.free()`
##### `image.texture(render)`
##### `static Image.init()`
##### `static Image.quit()`
