var chatType = 'chatTypeTest';

const message = {
  chatType: 'dialog',

  testFunc: () => {
    console.log(`this ${this.chatType}`)
  },

  init() {
    console.log(`I am ${this.driverName} and this is my ${this.chatType} message`)
  }
}

const driverDialog = Object.create(message, {
  driverName: {
    value: 'Anton'
  }
});

console.log(driverDialog.__proto__ === message);
driverDialog.init()
