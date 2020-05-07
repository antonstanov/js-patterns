/*
последовательно получать доступ до определенной информации
 */

class MyIterator {
  index;
  data;

  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => { // используем стрелочную функцию, чтобы использовать контекст класса, а не данной функции
        if(this.index < this.data.length){
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0;
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield console.log(collection[index++]);
  }
}

// const iterator = new MyIterator(['this', 'is', 'iterator']);

// for(const val of iterator) {
//   console.log(' :: ', val)
// }

const gen = generator(['this', 'is', 'iterator']);

gen.next();
gen.next();
gen.next();
