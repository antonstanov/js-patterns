/*
Передавать данные и работать с ними через различные тиы объектов
 */

class Car {
  model;
  price;

  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  cars;
  constructor() {
    this.cars = [];
  }

  create(model, price) {
    const condidate = this.getCar(model);

    if(condidate) {
      return condidate;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }

  getCar(model) {
    return this.cars.find(car => car.model === model);
  }
}

const carFactory = new CarFactory();

const bmwX6 = carFactory.create('bmw', 10000);
const audi = carFactory.create('audi', 12000);
const bmwx3 = carFactory.create('bmw', 8000);

console.log(bmwx3 === bmwX6);
