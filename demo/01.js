const express = require('express');
const app = new express();

const PORT = 3000;

app.get('/',(req,res)=>{
 res.send('hellow express');
})

app.get('/news/:aid',(req,res)=>{
  const { aid } = req.params
  res.send('news动态路由:'+aid);
})

app.get('/list',(req,res)=>{
  const { type } = req.query;
   res.send('list get路由:'+type);
})

app.listen(PORT,()=>{
 console.log(`server starting listening  port ${PORT}`);
})
