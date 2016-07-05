'use strict'

const app = require('./app')

class windows {
	constructor() {
		if (!(this instanceof windows)) {
			return new windows()
		}
		this.wins = {}
	}

	create(win) {
		this.wins[win.id] = win
	}
	retrive(id = 0) {
		return this.wins[id]
	}
	destroy(id = 0) {
		delete this.wins[id]
		if(!Object.keys(this.wins).length) {
			app.emit('window-all-closed')
		}
	}
	forEach(callback = () => {}) {
		Object.keys(this.wins).forEach((key) => {
			callback(this.wins[key])
		})
	}
}

module.exports = new windows
