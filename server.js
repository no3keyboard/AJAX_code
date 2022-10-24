//1.引入express
const { request, response } = require('express');
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

//延时响应,模拟超时
app.get('/delay',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	setTimeout(() => {
		response.send('HELLO IE');
	}, 3000);
})

//JQuery服务
app.all('/jqueryServer',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	//可接受全部响应头
	response.setHeader("Access-Control-Allow-Headers", "*"); 
	const data = {name:'KUN.A.A'}
	// response.send('Hello Jquery AJAX');
	response.send(JSON.stringify(data));
})

//axios发送
app.all('/axiosServer',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	//可接受全部响应头
	response.setHeader("Access-Control-Allow-Headers", "*"); 
	const data = {name:'KUN.A.A'}
	// response.send('Hello Jquery AJAX');
	response.send(JSON.stringify(data));
})

//fetch服务
app.all('/fetchServer',(request,response)=>{
	//设置相应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
	//可接受全部响应头
	response.setHeader("Access-Control-Allow-Headers", "*"); 
	const data = {name:'KUN.A.A'}
	// response.send('Hello Jquery AJAX');
	response.send(JSON.stringify(data));
})

//jsonp服务
app.all('/jsonpServer',(request,response)=>{
	// response.send('consol.log(hello jsonpServer)');
	const data = {
		name:'KUN.C.C'
	};
	//将数据转换为字符串
	let str = JSON.stringify(data);
	//返回结果,返回自定义函数并传参
	response.end(`handle(${str})`);
})

//原生JSONP案列
app.all('/check-username',(request,response)=>{
	// response.send('consol.log(hello jsonpServer)');
	const data = {
		exist:1,
		msg:'用户名已存在'
	};
	//将数据转换为字符串
	let str = JSON.stringify(data);
	//返回结果,返回自定义函数并传参
	response.end(`handle(${str})`);
})

//Jquery发送JSONP的AJAX请求
app.all('/Jquery-jsonp-server',(request,response)=>{
	// response.send('consol.log(hello jsonpServer)');
	const data = {
		name:'KUN.A.A',
		city:['北京','上海','武汉']
	};
	//将数据转换为字符串
	let str = JSON.stringify(data);
	//接收callback参数
	let cb = request.query.callback;
	//返回结果,返回自定义函数并传参
	response.end(`${cb}(${str})`);
})

//CORS原生AJAX跨域请求
app.all('/corsServer',(request,response) => {
	//设置响应头
	response.setHeader("Access-Control-Allow-Origin",'*')
	response.send('hello CORS');
})

//4.监听端口启动服务
app.listen(8000,()=>{
	console.log("8000监听中");
})
