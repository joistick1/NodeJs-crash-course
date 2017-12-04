const total_bullets = 5;
const current_bullet = 0;

class Gun {
	constructor({emitter: emitter}) {
		this.emitter = emitter;

		this.chosenBullet = 1;

		this.emitter.on("roll", function (obj) {
			//console.log("subscribed on `roll` event");
			//this.chosenBullet = this.chosenBullet = Math.floor(Math.random() * 6);
			return function () {
				obj.chosenBullet = obj.onRoll();
				console.log("Shalnaya pulia ", obj.chosenBullet);
			}
			
		}(this));

		this.emitter.on("trigger_hummer", function (obj) {
			//console.log("subscribed on `trigger_hummer` event");
			return function() {
				this.emit("shoot", current_bullet === obj.chosenBullet);
			}
			
		}(this));
	}

	onRoll() {
		return Math.floor(Math.random() * 6);
	}
}

module.exports = Gun;