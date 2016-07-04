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
		this.wins[win.getID()] = win
	}
	retrive(id) {
		return this.wins[id]
	}
	destroy(id) {
		delete this.wins[id]
		if(!Object.keys(this.wins).length) {
			app.emit('window-all-closed')
		}
	}
	forEach(callback) {
		callback = callback || (() => {})
		Object.keys(this.wins).forEach((key) => {
			callback(this.wins[key])
		})
	}
}

module.exports = new windows
