/**
 *  СОздание более просотого, публичного интерфейса для упращения различных взаимодействией
 *  Примером являетсся $ у jquery
 */

class MessageBase {
  messages: any[];

  constructor() {
    this.messages = [];
  }

  logInfo(message) {} // для последующего переопределения/ перегурзки

  add(message) {
    this.messages.push(message);
    return this.logInfo(message); // вызывается у каждого экземпляра и именно то, что переопределено
  }
}

class DriverMessage extends MessageBase {
  logInfo({id, name, params}) {
    return `Driver message add: ${id}: ${name} (${params})` // а вот это переопределено
  }
}

class BroadcastMessage extends MessageBase {
  logInfo({id, name, params}) {
    return `Broadcast message add: ${id}: ${name} (${params})` // а вот это переопределено
  }
}

class MessageAddFacade {
  submit(personName, type, params) {
    const id = Date.now();
    let message;

    if(type === 'dialogType') {
      message = new DriverMessage();
    }

    if(type === 'broadcastType') {
      message = new BroadcastMessage();
    }

    return message.add({id, personName, params});
  }
}

const messageAddFacade = new MessageAddFacade();

console.log(messageAddFacade.submit('Dimon', 'dialogType', 'go 150k!'));
console.log(messageAddFacade.submit('Anton', 'broadcastType', 'no kogda?'));
