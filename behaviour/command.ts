/*
 позволяет создавать абстракцию над функционалом. характерный пример : редакс
*/

class MessagesData {
  data;

  constructor(data = []) {
    this.data = data;
  }

  clear() {
    this.data = [];
    return `Список сообщений пуст!`
  }

  add(message) {
    this.data.push(message)
    return `Сообщение с ${message.id} добавлено!`
  }
}

/**
 * executed - приводить в исполнение, доводить до конца
 */

class Command {
  subject;
  commandsExecuted;

  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command, params?) {
    this.commandsExecuted.push(command);

    return this.subject[command](params);
  }
}

const x = new Command(new MessagesData());

console.log(x.execute('add', {id: Date.now(), text: 'qq mzfkrs'}));
console.log(x.execute('add', {id: Date.now(), text: 'chokavo suchara?'}));
console.log(x.subject.data);
console.log(x.execute('clear'));
