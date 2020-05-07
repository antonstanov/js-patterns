/**
 * работа только с одним инстансом объекта
 */

class Database {
  private static instance: any;
  private static exist: any;
  private readonly data: any;

  constructor(data) {
    if(Database.exist) return Database.instance;
    Database.exist = true;

    Database.instance = this;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database('mongo');
console.log(mongo.getData())

const sql = new Database('sql');
console.log(sql.getData())
