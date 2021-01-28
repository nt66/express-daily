/*
* middleWare
* 中间件示例
*/
const express = require('express');

const app = express();

const middleWare1 = (req,res,next)=>{
  console.log('我是 middleWare1');
  next();
}

const middleWare2  = (req,res,next)=>{
  console.log('我是 middleWare2');
  res.send('<h1>home page</h1>')
}

const middleWare3 = (req,res,next)=>{
  console.log('i am a error middleware');
  const errObj = new Error('i am an error');
  next(errObj);
}

// app.use(middleWare3);

app.get('/',middleWare1,middleWare2);


const getData = (req,res,next)=>{
   req.cname = 'hualingfeng';
   next();
}

app.get('/user',getData,(req,res,next)=>{
  const { cname } = req;
  res.send(`<h1>my name is:${cname}</h1>`)
})


const errorHandle = (err,req,res,next)=>{
  if(err)
    res.send('<h1>there was an error, please try it again</h1>')
}

app.use(errorHandle);


app.listen(3000,()=>{
 console.log('listening port on 3000');
});

