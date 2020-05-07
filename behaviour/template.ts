/*
определяет некий скелет будущего алгоритма, но при этом он делегирует реализацию функционала в унаследованные классы
 */

class Employee {
	name;
	salary;

	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	responsibilities() {}

	work() {
		return `${this.name} выполняет ${this.responsibilities()}`
	}

	getPaid() {
		return `${this.name} имеет заработную плату ${this.salary}`
	}
}

class Developer extends Employee{
	constructor(name, salary) {
		super(name, salary);
	}

	responsibilities() {
		return `процесс создания программ`
	}
}

class Tester extends Employee{
	constructor(name, salary) {
		super(name, salary);
	}

	responsibilities() {
		return `процесс тестирования`
	}
}

const dev = new Developer('Владилен', 100000);
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Владилен', 90000);
console.log(tester.getPaid())
console.log(tester.work())
