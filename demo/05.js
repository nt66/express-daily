/*
* mongodb crud 封装
*/
const { json } = require('body-parser');
const express = require('express');
const DB = require('./db');

const app = express();

app.get('/',async(req,res)=>{
  const userInfo = await DB.find('user', {'name': 'hualingfeng'})
  console.log('userInfo',userInfo);
  res.send('user information:<br/>'+ JSON.stringify(userInfo[0]))
});

app.listen(3000,()=>{
 console.log('listening port on 3000');
});
