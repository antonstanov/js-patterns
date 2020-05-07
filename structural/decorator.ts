/**
 * ДОбавление нового функционала для существующих классов
 *
 * добавляет какой-то слой мета-данных для существующих объектов
 */

class ServerForDec {
  ip: string;
  port: string;

  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

function awsDec(server) {
  server.isAws = true;
  server.awsInfo = function () {
    return server.url
  }

  return server;
}

function azureDec(server) {
  server.azure = true;
  server.port = server.port + 500;
  server.azureInfo = function () {
    return server.url
  }

  return server;
}

const aws = new ServerForDec('12.34.56.78', 8080);
console.log(awsDec(aws).awsInfo())

const azure = new ServerForDec('123.33.44.55', 1000);
console.log(azureDec(azure).azureInfo())
