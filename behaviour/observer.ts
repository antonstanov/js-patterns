/*
паблишер, листенер, сабскрайбер, диспатчер, ОБСЕРВБЛ
 */
class Subject {
	observers;

	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer)
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter(obs => obs !== observer)
	}

	fire(action) { // emit // тригерит всех обсерверов // принимает данные и отправляет их на обновление
		this.observers.forEach(observer => {
			observer.update(action)
		})
	}
}

class Observer {
	state;
	initialState;

	constructor(state = 1) {
		this.state = state;
		this.initialState = state;
	}

	update(action) {
		switch (action.type) {
			case 'INC': this.state = ++this.state;
				break;

			case 'DEC': this.state = --this.state;
				break;

			case 'ADD': this.state += action.payload;
				break;

			default:
				this.state = this.initialState;
				break;
		}
	}
}

const stream$ = new Subject(); // создаем объект, который будем отслеживать

const obs1 = new Observer()
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire({type: 'INC'})
stream$.fire({type: 'INC'})
stream$.fire({type: 'INC'})
stream$.fire({type: 'ADD', payload: 10})
stream$.fire({type: 'DEC'})

console.log(obs1.state)
console.log(obs2.state)
