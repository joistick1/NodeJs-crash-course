const EventEmitter = require("events");

class Emitter extends EventEmitter {
	constructor() {
		super()
		this.on("newListener", (event, callback) => {
			//console.log(`A callback was subscribed to ${event}`)
		})
	}
}

module.exports = new Emitter()