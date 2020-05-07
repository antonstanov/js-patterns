// /**
//  для частого создания инстансов класса лишь с изменением значения */

enum ChatTypeEnum {
  DIALOG= 'dialog',
  BROADCAST ='broadcast',
  SHIFTOPEN ='shiftOpen'
}

class Dialog {
  text;
  chatType;

  constructor(text) {
    this.text = text;
    this.chatType = ChatTypeEnum.DIALOG
  }
}

class Broadcast {
  text;
  chatType;

  constructor(text) {
    this.text = text;
    this.chatType = ChatTypeEnum.BROADCAST
  }
}

class ShiftOpen {
  text;
  chatType;

  constructor(text) {
    this.text = text;
    this.chatType = ChatTypeEnum.SHIFTOPEN
  }
}

class Message {
  static list = {
    dialog: Dialog,
    broadcast: Broadcast,
    shiftOpen: ShiftOpen
  }

  create(text, type) {
    const MessageType = Message.list[type] || Message.list.dialog
    const newMessage = new MessageType(text);

    newMessage.define = function() {
      console.log({
        text: this.text,
        chatType: this.chatType
      })
    }

    return newMessage;
  }
}

const factory = new Message();

const messageData = [
  factory.create('text in message ONE', ChatTypeEnum.DIALOG),
  factory.create('text in message TWO', ChatTypeEnum.BROADCAST)
]

messageData.forEach(dialog => dialog.define());
