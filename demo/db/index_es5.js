/**
 * mongodb crud callback封装
 */
const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://127.0.0.1:27017/';
const DBNAME = 'tongtang';

/**
 * 连接数据库
 * @param {String} collectionName 回调函数
 */
const dbConnect = (callback) =>{
  MongoClient.connect(URL,(err,client)=>{
    if(err){
      console.log('mongodb connect err');
      return;
    }
    const db = client.db(DBNAME);
    callback(db);
    client.close();
  })
}

/**
 * 查找
 * @param {string} collectionName 表名
 * @param {*} json 查找条件
 */
exports.find = (collectionName, json, callback)=>{
  dbConnect((db)=>{
    const collection = db.collection(collectionName);
    collection.find(json).toArray((err,data)=>{
      callback(err,data);
    })
  })
}

/**
 * 修改
 * @param {string} collectionName 表名
 * @param {*} json1 查找条件
 * @param {*} json1 更新数据
 */
exports.update = (collectionName, json1, json2, callback)=>{
  dbConnect((db)=>{
    const collection = db.collection(collectionName);
    collection.updateOne(json1, { $set: json2 }, (err,result)=>{
      callback(err,result);
    })
  })
}

