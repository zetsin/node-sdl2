'use strict'

const SDL_power = require('../dep/SDL_power')

const ref = require('ref')

class power {
	constructor() {
	}

	get info() {
		let secs = ref.alloc('int')
		let pct = ref.alloc('int')
		let state = SDL_power.SDL_GetPowerInfo(secs, pct)

		Object.keys(SDL_power.SDL_PowerState).map((value) => {
			if(SDL_power.SDL_PowerState[value] == state) {
				state = value.slice('SDL_POWERSTATE_'.length).toLowerCase()
			}
		})

		return ({
			life: secs.deref(),
			percentage: pct.deref(),
			state: state
		})
	}
}

module.exports = new power