'use strict'


const libPath = Path.join(__dirname, 'lib');

let sdl2 = {
  require(name) {
    return require(Path.join(__dirname, 'dep', name));
  },
  class(name) {
    return require(Path.join(libPath, name));
  },
  get app() {
    return new (require(Path.join(libPath, 'app')));
  },
  get window() {
    return require(Path.join(libPath, 'window'));
  },
  get clipboard() {
    return require(Path.join(libPath, 'clipboard'));
  },
  get power() {
    return require(Path.join(libPath, 'power'));
  },
  get mouse() {
    return require(Path.join(libPath, 'mouse'));
  },
  get keyboard() {
    return require(Path.join(libPath, 'keyboard'));
  },
  get font() {
    return require('sdl2-ttf').class('ttf')
  },
  get image() {
    return require('sdl2-image').class('image')
  },
}

module.exports = sdl2
