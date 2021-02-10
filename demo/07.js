/**
 * session
 * http is a stateless protocol
 * 请求流程
 * 1 客户端发送请求给服务端
 * 2 服务端生成session(key value)
 * 3 服务端发送session 的 key(cookie) 给客户端
 * 4 客户端请求带上session key 服务端校验
 */
const express = require ('express');
const session = require('express-session');

const app = express();
const Port = 3000;

app.use(session({
  secret: 'session cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false,maxAge: 60000 
  }
}))

app.get('/login',(req,res)=>{
  req.session.regenerate(()=> {
    req.session.userInfo = 'hualingfeng123';
    res.send('登录成功');
  })
});

app.get('/',(req,res)=>{
  const {userInfo} = req.session;
  if(!userInfo){
    res.send('session获取失败');
  }
  res.send(`用户信息:${userInfo}`);
});

app.listen(Port,()=>{
  console.log(`node server start on port:${Port}`);
});