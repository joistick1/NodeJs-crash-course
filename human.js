
class Human {

	constructor({name, emitter}) {
		this.name = name;
		this.emitter = emitter;
		const that = this;
		this.emitter.on("shoot", function (event) {
			const message = event === true ? `Sorry, ${that.name} was killed` : `${that.name} is still alive!`;
			if(!event) {
				console.log(message);
				setTimeout(function () {
					that.play();
				}, 1000);
			} else {
				console.log(message);
			}
		});
	}

	play() {
		this.emitter.emit("roll");
		this.emitter.emit("trigger_hummer");
	}
}

module.exports = Human;