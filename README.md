# node-sdl2
Bindings for SDL2 in Node

## Installation
Install with npm:
```javascript
npm install node-sdl2
```

## Usage

### 1. Use with wrapped class ( [Api Reference](#api-references) )

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

### 2. Use as primitive SDL2 API ( [SDL 2.0 API by Category](https://wiki.libsdl.org/APIByCategory) )

```javascript
const NS = require('node-sdl2')
const SDL2_video = NS.require('SDL2_video')
const SDL2_render = NS.require('SDl2_render')
...
```

## Tutorials

- [Test](/test/test.js) everything in node-sdl2, you will get [Screenshot](#screenshot) shown below.

## Screenshot
![Screenshot](/test/screenshot.png)

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

- Methods
  - `app.quit()`
  - `app.hide()`
  - `app.show()`
  - `app.exit()`

- Events
  - `app.on('window-all-closed', () = {})`
  - `app.on('before-quit', (event) = {})`
    - `event` Object
      - `preventDefalut()`
  - `app.on('will-quit', (event) = {})`
    - `event` Object
      - `preventDefault()`
  - `app.on('drop', (file) = {})`
    - `file` String


### window
> Create and control `window(s)`.

- Methods
  - `let win = new window(opts)`
  - `win.getID()`
  - `win.close()`
  - `win.destroy()`
  - `win.restore()`
  - `win.center()`
  - `win.setModal(window)`
  - `win.focus` [Getter/Setter]
  - `win.grab` [Getter/Setter]
  - `win.show` [Getter/Setter]
  - `win.maximize` [Getter/Setter]
  - `win.minimize` [Getter/Setter]
  - `win.fullScreen` [Getter/Setter]
  - `win.bounds` [Getter/Setter]
  - `win.size` [Getter/Setter]
  - `win.minimumSize` [Getter/Setter]
  - `win.maximumSize` [Getter/Setter]
  - `win.resizable` [Getter]
  - `win.closable` [Getter/Setter]
  - `win.position` [Getter/Setter]
  - `win.title` [Getter/Setter]
  - `win.background` [Getter/Setter]
  - `win.bordered` [Setter]
  - `win.bordersSize` [Getter]
  - `win.screenKeyboard` [Getter]
  - *static* `window.all` [Getter]
  - *static* `window.focused` [Getter]
  - *static* `window.mouseFocused` [Getter]
  - *static* `window.keyboardFocused` [Getter]
  - *static* `window.grabbed` [Getter]
  - *static* `window.mouseFocused` [Getter]
  - *static* `window.screenSaver` [Getter]
  - *static* `window.fromID` [Getter]
  - *static* `window.showMessageBox(opts, cb)`

- Events
  - `win.on('change', (w, h) => {})`
    - `w` Integer
    - `h` Integer
  - `win.on('close', (event) => {}`
    - `event` Object
      - `preventDefault()`
  - `win.on('show', () => {})`
  - `win.on('hide', () => {})`
  - `win.on('move', (x, y) => {})`
    - `x` Integer
    - `y` Integer
  - `win.on('resize', (w, h) => {})`
    - `w` Integer
    - `h` Integer
  - `win.on('minimize', () => {})`
  - `win.on('maximize', () => {})`
  - `win.on('restore', () => {})`
  - `win.on('enter', () => {})`
  - `win.on('leave', () => {})`
  - `win.on('focus', () => {})`
  - `win.on('blur', () => {})`
  - `win.on('keydown', (key) => {})`
    - `key` Object
      - `scancode` Integer
      - `scanname` String
      - `keycode` Integer
      - `keyname` String
      - `repeat` Boolean
  - `win.on('keyup', (key) => {})`
    - `key` Object
      - `scancode` Integer
      - `scanname` String
      - `keycode` Integer
      - `keyname` String
      - `repeat` Boolean
  - `win.on('editing', ({str, start, length}) => {})`
    - `str` String
    - `start` Integer
    - `length` Integer
  - `win.on('textinput', (str) => {})`
    - `str` String
  - `win.on('mousemove', (pos) => {})`
    - `pos` Object
      - `x` Integer
      - `y` Integer
      - `xrel` Integer
      - `yrel` Integer
  - `win.on('mousedown', (mou) => {})`
    - `mou` Object
      - `x` Integer
      - `y` Integer
      - `clicks` Integer
      - `button` String
  - `win.on('mouseup', (mou) => {})`
    - `mou` Object
      - `x` Integer
      - `y` Integer
      - `clicks` Integer
      - `button` String
  - `win.on('mousewheel', (mou) => {})`
    - `mou` Object
      - `x` Integer
      - `y` Integer
      - `clicks` Integer
      - `button` String


### clipboard
> Get and set the clipboard text.

- Methods
  - `clipboard.text` [Getter/Setter]
  - `clipboard.hasText` [Getter]

- Events
  - Event 'update'


### keyboard
> Control the keyboard.

- Methods
  - `keyboard.startTextInput()`
  - `keyboard.stopTextInput()`
  - `keyboard.setTextInput(rect)`
  - `keyboard.hasTextInput` [Getter]
  - `keyboard.hasScreenKeyboard` [Getter]
  - `keyboard.state` [Getter]
  - `keyboard.mod` [Getter]


### mouse
> Control the mouse and cursor.

- Methods
  - `mouse.setCursor(id)`
  - `mouse.setCursor(image, hot_x, hot_y)`
  - `mouse.setCursor(data, mask, w, h, hot_x, hot_y)`
  - `mouse.capture` [Getter]
  - `mouse.relative` [Getter/Setter]
  - `mouse.show` [Getter/Setter]
  - `mouse.state` [Getter]


### power
> Moniter the power infomation of hardware

- Methods
  - `power.info` [Getter/Setter]


### font
> Allow you drawing text into window's face.
please `npm install sdl2-ttf` before use.

- Methods
  - `let ft = new font(file, pixelsize, index)`
  - `ft.style` [Geter/Setter]
  - `ft.outline` [Geter/Setter]
  - `ft.hinting` [Geter/Setter]
  - `ft.kerning` [Geter/Setter]
  - `ft.height` [Geter]
  - `ft.ascent` [Geter]
  - `ft.descent` [Geter]
  - `ft.lineSkip` [Geter]
  - `ft.solid(text, rgba)`
  - `ft.shade(text, rgba, rgbaBG)`
  - `ft.blend(text, rgba)`
  - `ft.close()`
  - `ft.test(char)`
  - `ft.metrics(char)`
  - `ft.getSize(char)`
  - *static* `font.init()`
  - *static* `font.wasInit()`
  - *static* `font.quit()`


### image
> Load image from file.
please `npm install sdl2-image` before use.

- Methods

  - `let img = new image(file)`
  - `img.free()`
  - `img.texture(render)`
  - *static* `Image.init()`
  - *static* `Image.quit()`
