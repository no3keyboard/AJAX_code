//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/server',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	response.send('HELLO AJAX');
})

app.all('/json-server',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	//可接受全部响应头
	response.setHeader('Access-Control-Allow-Header','*')
	const data = {
		name:"KUN.A.A"
	}
	//send只接受字符串和buffer，需要字符串转换
	var str = JSON.stringify(data);
	response.send(str);
})

//IE缓存
app.get('/IE-server',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	response.send('HELLO IE');
})

//延时相应,模拟超时
app.get('/delay',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	setTimeout(() => {
		response.send('HELLO IE');
	}, 3000);
})

//JQuery服务
app.get('/jqueryServer',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	response.send('Hello Jquery AJAX');
})

//4.监听端口启动服务
app.listen(8000,()=>{
	console.log("8000监听中");
})
