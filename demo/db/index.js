const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://127.0.0.1:27017/';
const DBNAME = 'tongtang';

class DB {
  // 单例模式
  static getInstance() {
    if (!DB.instance) {
        DB.instance = new DB();
    }
    return DB.instance;
  }

  // 构造函数
  constructor(){
    this.dbClient = null;
    this.connect();
  }

  // 连接
  connect(){
    return new Promise((resovle,reject)=>{
      MongoClient.connect(URL,(err,client)=>{
        if(err){
          reject(err)
        }else{
          this.dbClient = client.db(DBNAME);
          resovle(this.dbClient);
        }
      })
    });
  }

  // 查询
  find(collectionName,json){
    return new Promise((res,rej)=>{
      this.connect().then(db=>{
        const collection = db.collection(collectionName);
        collection.find(json).toArray((err,data)=>{
          if(err){
            rej(err);
            return;
          }
          res(data);
        })
      })
    })
  }
}

module.exports = DB.getInstance();
// module.exports = (url,dbname)=>{
//   MongoClient.connect(url,(err,client)=>{
//     if(err){
//       console.log('mongodb connect err',err);
//     }else{
//       const table = client.db(dbname);

//       client.close();
//     }
//   });
// }

// curd 封装
  