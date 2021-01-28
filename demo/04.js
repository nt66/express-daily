/*
* connect mongodb
* 连接mongodb
*/
const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const URL = 'mongodb://127.0.0.1:27017';
const DBNAME = 'tongtang';

app.get('/',(req,res)=>{
  mongodb.connect(URL, (err, client)=>{
    const table = client.db(DBNAME);
    const result = table.collection('user').find();
    // console.log('db result:',result);
    result.toArray((err,data)=>{
      console.log('result_data:',data);
    });
    client.close();
    res.send('hellow mongodb<br/>');
  });
});

app.listen(3000,()=>{
 console.log('listening port on 3000');
});
