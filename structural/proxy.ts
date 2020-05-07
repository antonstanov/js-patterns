/**
 Позволяет ставить ловшку на поля объекта, на вызов функции
 практический пример : лишний запрос на сервер
 */

function networkFetch(url) {
  return `${url} - ответ с сервер`
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
  apply(target: (url) => string, thisArg: any, argArray?: any): any {
    const url = argArray[0];
    if(cache.has(url)){
      return `${url} - ответ из кеша`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, argArray)
    }
  }
});

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('angular.io'))
