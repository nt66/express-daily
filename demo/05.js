/*
* mongodb crud 封装
*/
const { json } = require('body-parser');
const express = require('express');
const DB = require('./db');
const DB2 = require('./db/index_es5');

const app = express();

app.get('/', (req, res) => {
  res.redirect('/es6');
});

app.get('/es6', async (req, res) => {
  const userInfo = await DB.find('user', { 'age': { $gt: 22 } });  // 大于22
  // const userInfo = await DB.find('user', {'name': 'hualingfeng'}); // 等于
  console.log('userInfo', userInfo);
  res.send('user information:<br/>' + JSON.stringify(userInfo))
});

app.get('/es5', (req, res) => {
  DB2.find('user',{'name':'hualingfeng'},(err,data)=>{
    if(err){
      console.log('find err')
      res.send('find err:<br/>')
    }else{
      console.log('all userInfo', data);
      res.send('all user information:<br/>' + JSON.stringify(data))
    }
  })
});

app.get('/es5update', (req, res) => {
  DB2.update('user',{'name':'hualingfeng'},{'pwd':'123456'},(err,data)=>{
    if(err){
      console.log('find err')
      res.send('update err:<br/>')
    }else{
      console.log('all userInfo', data);
      res.send('update success:<br/>')
    }
  })
});


app.listen(3000, () => {
  console.log('listening port on 3000');
});
