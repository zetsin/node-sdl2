'use strict'

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
	}
	forEach(callback) {
		var self = this
		callback = callback || (() => {})
		Object.keys(self.wins).forEach((key) => {
			callback(self.wins[key])
		})
	}
}

module.exports = new windows
