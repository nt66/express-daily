/**
 * cookie
 * http is a stateless protocol
 * 请求流程
 * 1 客户端发送请求给服务端
 * 2 服务端set-cookie设置cookie 并返回给客户端
 * 3 客户端将cookie带到请求中，服务端校验
 */
const Express = require ('express');
const cookieParser = require('cookie-parser');

const app = Express();
const Port = 3000;

app.use(cookieParser());

app.get('/',(req,res)=>{
  // 内部就是通过set-cookie设置cookie
  res.cookie('userName','hualingfeng',{maxAge:60000});
  res.send('login success');
})

app.get('/main',(req,res)=>{
  const cookieStr = req.cookies.userName;
  res.send(`cookie:${cookieStr}`);
})

app.listen(Port,()=>{
  console.log(`node server staring on port:${Port}`);
});