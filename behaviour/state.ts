/*
	мы можем создавать классы, которые будут являтся жлементами стейта
	и мы можем делегировать изменение состояния этих классов
	на какой-то общий класс, который будет являтся стейтом
	и который будет менять внутреннее состояние отдельных элементов
 */

class Light {
	light;
	constructor(light) {
		this.light = light;
	}
}

class RedLight extends Light {
	constructor() {
		super('red'); // вызов контсруктора родительского, передеача в него параметров
	}

	sign() {
		return 'stop';
	}
}


class YellowLight extends Light {
	constructor() {
		super('yellow'); // вызов контсруктора родительского, передеача в него параметров
	}

	sign() {
		return 'waiting';
	}
}

class GreenLight extends Light {
	constructor() {
		super('green'); // вызов контсруктора родительского, передеача в него параметров
	}

	sign() {
		return 'go';
	}
}

class TrafficLight {
	states;
	current;

	constructor() {
		this.states = [
			new RedLight(),
			new YellowLight(),
			new GreenLight()
		]

		this.current = this.states[0];
	}

	change() {
		const total = this.states.length;
		let index = this.states.findIndex(light => light === this.current )

		if(index + 1 < total) {
			this.current = this.states[index+1]
		} else {
			this.current = this.states[0];
		}
	}

	sign() {
		return this.current.sign();
	}
}

const traffic = new TrafficLight();

console.log(traffic.sign())
traffic.change();

console.log(traffic.sign())
traffic.change();

console.log(traffic.sign())
traffic.change();
