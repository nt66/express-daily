const express = require('express');
const path = require('path');

const app = new express();
const PORT = 3000;

app.locals = {
  name:'express'
};
// 指定path路径&渲染模板
app.set('views', path.join(__dirname, '../views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  const item = ['item1','item2','item3','item4','item5'];
  res.render('index',{item});
});

app.listen(PORT,()=>{
   console.log(`server listening port ${PORT}`);
})
