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
    - `opts` Object
      - `tittle` String - `''`
      - `w` Integer - `0x1FFF0000`
      - `h` Integer - `0x1FFF0000`
      - `x` Integer - `0x1FFF0000`
      - `y` Integer - `0x1FFF0000`
      - `background` Integer|Object|Array - rgb | { rgb, a } | { r, g, b, a } | [rgb, a] - `0xFF0000`
      - `center` Boolean - `false`
      - `show` Boolean - `true`
      - `closable` Boolean - `true`
      - `resizable` Boolean - `true`
      - `minimized` Boolean - `false`
      - `maximized` Boolean - `false`
      - `borderless` Boolean - `false`
      - `fullscreen` Boolean - `false`
      - `kiosk` Boolean - `false`
      - `hdpi` Boolean - `true`
      - `mouseCapture` Boolean - `false`
      - `grab` Boolean - `false`
  - `win.close()`
  - `win.destroy()`
  - `win.restore()`
  - `win.center()`
  - `win.setModal(win)`
    - `win` [Circular]
  - `win.render`
    - `[Getter]` Object
  - `win.size`
    - `[Getter]` Array-like Object - `{ w: 100, h: 200, "1": 100, "2": 200 }`
    - `[Setter]` Object|Array - `{ w: 100, h: 200 }` | `[ 100, 200 ]`
  - `win.bounds`
    - `[Getter/Setter]` [Array-like Object / Object|Array] - { x, y, w, h }
  - `win.minimumSize`
    - `[Getter/Setter]` [Array-like Object / Object|Array] - { w, h }
  - `win.maximumSize`
    - `[Getter/Setter]` [Array-like Object / Object|Array] - { w, h }
  - `win.bordersSize` 
    - `[Getter]` [Array-like Object / Object|Array] - { top, right, bottom, left }
  - `win.id`
    - `[Getter]` Integer
  - `win.focus`
    - `[Getter/Setter]` Boolean
  - `win.grab`
    - `[Getter/Setter]` Boolean
  - `win.show` 
    - `[Getter/Setter]` Boolean
  - `win.maximize`
    - `[Getter/Setter]` Boolean
  - `win.minimize`
    - `[Getter/Setter]` Boolean
  - `win.fullScreen`
    - `[Getter/Setter]` Boolean
  - `win.resizable`
    - `[Getter]` Boolean
  - `win.closable`
    - `[Getter/Setter]` Boolean
  - `win.position`
    - `[Getter/Setter]` Boolean
  - `win.title`
    - `[Getter/Setter]` String
  - `win.background`
    - `[Getter/Setter]` Integer
  - `win.bordered`
    - `[Setter]` Boolean
  - `win.screenKeyboard`
    - `[Getter]` Boolean
  - *static* `window.all`
    - `[Getter]` win
  - *static* `window.focused`
    - `[Getter]` win
  - *static* `window.mouseFocused`
    - `[Getter]` win
  - *static* `window.keyboardFocused`
    - `[Getter]` win
  - *static* `window.grabbed`
    - `[Getter]` win
  - *static* `window.mouseFocused`
    - `[Getter]` win
  - *static* `window.screenSaver`
    - `[Getter]` win
  - *static* `window.fromID`
    - `[Getter]` win
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
  - `clipboard.text`
    - `[Getter/Setter]` String
  - `clipboard.hasText`
    - `[Getter]` Boolean

- Events
  - Event 'update'


### keyboard
> Control the keyboard.

- Methods
  - `keyboard.startTextInput()`
  - `keyboard.stopTextInput()`
  - `keyboard.setTextInput(rect)`
    - `rect` Object|Array - { x, y, w, h }
  - `keyboard.hasTextInput`
    - `[Getter]` Boolean
  - `keyboard.hasScreenKeyboard`
    - `[Getter]` Boolean
  - `keyboard.state`
    - `[Getter]` Object
  - `keyboard.mod`
    - `[Getter]` Object


### mouse
> Control the mouse and cursor.

- Methods
  - `mouse.setCursor(id)`
  - `mouse.setCursor(image, hot_x, hot_y)`
  - `mouse.setCursor(data, mask, w, h, hot_x, hot_y)`
  - `mouse.capture`
    - `[Setter]` Boolean
  - `mouse.relative`
    - `[Getter/Setter]` Boolean
  - `mouse.show`
    - `[Getter/Setter]` Boolean
  - `mouse.state`
    - `[Getter]` Object
      - `win` Object
        - `x` Integer
        - `y` Integer
      - `global` Object
        - `x` Integer
        - `y` Integer
      - `relative` Object
        - `x` Integer
        - `y` Integer


### power
> Moniter the power infomation of hardware

- Methods
  - `power.info`
    - `[Getter]` Object
      - `life` Integer
      - `percentage` Integer
      - `state` String


### font
> Allow you drawing text into window's face.
please `npm install sdl2-ttf` before use.

- Methods
  - `let ft = new font(file, pixelsize, index)`
    - `file` String
    - `pixelsize` Integer
    - `index` Integer
  - `ft.style`
    - `[Geter/Setter]` String
  - `ft.outline`
    - `[Geter/Setter]` Integer
  - `ft.hinting`
    - `[Geter/Setter]` Integer
  - `ft.kerning`
    - `[Geter/Setter]` Integer
  - `ft.height`
    - `[Geter]` Integer
  - `ft.ascent`
    - `[Geter]` Integer
  - `ft.descent`
    - `[Geter]` Integer
  - `ft.lineSkip`
    - `[Geter]` Integer
  - `ft.solid(text, rgba)`
    - `text` String
    - `rgba` Integer|Object|Array - rgb | { rgb, a } | { r, g, b, a } | [rgb, a]
  - `ft.shade(text, rgba, rgbaBG)`
    - `text` String
    - `rgba` Integer|Object|Array - rgb | { rgb, a } | { r, g, b, a } | [rgb, a]
    - `rgbaBG` Integer|Object|Array - rgb | { rgb, a } | { r, g, b, a } | [rgb, a]
  - `ft.blend(text, rgba)`
    - `text` String
    - `rgba` Integer|Object|Array - rgb | { rgb, a } | { r, g, b, a } | [rgb, a]
  - `ft.close()`
  - `ft.test(char)`
    - `char` String
  - `ft.metrics(char)`
    - `char` String
  - `ft.getSize(char)`
    - `char` String
  - *static* `font.init()`
  - *static* `font.wasInit()`
  - *static* `font.quit()`


### image
> Load image from file.
please `npm install sdl2-image` before use.

- Methods

  - `let img = new image(file)`
    - `file` String
  - `img.free()`
  - `img.texture(render)`
  - *static* `Image.init()`
  - *static* `Image.quit()`
