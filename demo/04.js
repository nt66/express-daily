/*
* connect mongodb
* 连接mongodb
*/
const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const URL = 'mongodb://127.0.0.1:27017/';
const DBNAME = 'tongtang';

app.get('/',(req,res)=>{
  // 一 3.0 之前的方式
  // mongodb.connect(URL, (err, db)=>{
  //   const result = db.collection('user').find();
  //   result.toArray((err,data)=>{
  //     console.log('result_data:',data);
  //   });
  //   db.close();
  // });

  // 二 3.0 后的方式
  mongodb.connect(URL, (err, client)=>{
    const table = client.db(DBNAME);
    const result = table.collection('user').find({'name':'hualingfeng'});
    result.toArray((err,data)=>{
      console.log('result_data:',data);
    });
    client.close();
  });
  res.send('hellow mongodb<br/>');
});

app.listen(3000,()=>{
 console.log('listening port on 3000');
});
