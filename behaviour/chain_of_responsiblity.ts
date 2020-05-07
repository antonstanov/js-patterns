/**
 позволяет последовательно у одного и тогоже объекта вызывать какие то операции
 */

class MySum {
  sum;
  constructor(init = 42) {
    this.sum = init;
  }

  add(value) {
    this.sum += value;
    return this; // возвращаем контекст, благодаря чему мы можем вызывать методы снова
  }
}

const sum1 = new MySum();

console.log(sum1.add(8));
console.log(sum1.add(8).add(12));
