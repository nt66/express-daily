/*
* mongodb crud 封装
*/
const { json } = require('body-parser');
const express = require('express');
const DB = require('./db');

const app = express();

app.get('/',async(req,res)=>{
  // 大于22
  const userInfo = await DB.find('user', {'age': {$gt:22}})
  // 等于
  // const userInfo = await DB.find('user', {'name': 'hualingfeng'})
  console.log('userInfo',userInfo);
  res.send('user information:<br/>'+ JSON.stringify(userInfo))
});

app.listen(3000,()=>{
 console.log('listening port on 3000');
});
