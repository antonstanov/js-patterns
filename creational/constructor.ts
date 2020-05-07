/**
 Создание объектов определенного типа/

 */
class Server {
  name: any;
  ip: any;

  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
}

const serverInstance = new Server('test', '192.168.0.0');

console.log(serverInstance)
