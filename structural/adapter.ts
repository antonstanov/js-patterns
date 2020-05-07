/**
 * Интеграция старого интерфейса в новый
 *
 * часто используется при работе с api. используя старые интерфейсы, для работы нового функционала
 */

class OldCalc {
  operations(a, b, operation) {
    switch (operation) {
      case 'sum': return { oldMethodSum: a + b };
      case 'diff': return { oldMethodDiff: a - b };
      default: return NaN;
    }
  }
}

class NewCalc {
  sum(a, b) {
    return { newMethodSum: a + b };
  }

  diff(a, b) {
    return { newMethodDiff: a - b };
  }
}

class Adapter {
  private readonly calc;

  constructor() {
    this.calc = new NewCalc();
  }

  operations(a, b, operation) {
    switch (operation) {
      case 'sum': return this.calc.sum(a, b);
      case 'diff': return this.calc.diff(a, b);
      default: return NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, 'sum'))

const newCalc = new NewCalc();
console.log(newCalc.sum(20, 10))

const adapter = new Adapter();
console.log(adapter.operations(30, 15, 'sum'))
