
//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/',(request,response)=>{
	//设置相应
	response.send('HELLO WORLD');
})

//4.监听端口启动服务
app.listen(8000,()=>{
	console.log("8000监听中");
})