/*
плотная и тесная коммуникация между объектами разного типа и для взаимодействия разных групп объектов через друг друга
 */

class User {
  name;
  room = null;

  constructor(name) {
    this.name = name;
  }

  send(message, to?) {
    this.room.send(message, this, to); // вызываем метод комнаты, которая присваивается юзеру в момент его регистрации; (строка 30)
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  users;

  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this; // передаем данный объект в свойство room, чтобы вызывать методы в последующем
  }

  send(message, from, to?) {
    if(to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if(this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const vlad = new User('Vladilen');
const lena = new User('Elene');
const igor = new User('Igor');

const room = new ChatRoom();

room.register(vlad);
room.register(lena);
room.register(igor);

vlad.send('hello', lena);
lena.send('hello man!', vlad);
igor.send('hello all!');
