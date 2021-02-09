/**
 * session
 * http is a stateless protocol
 * 请求流程
 * 1 客户端发送请求给服务端
 * 2 服务端set-cookie设置cookie 并返回给客户端
 * 3 客户端将cookie带到请求中，服务端校验
 */

const Express = require ('express');

const app = Express();
const Port = 3000;


app.listen(Port,()=>{
  console.log(`node server staring on port:${Port}`);
});