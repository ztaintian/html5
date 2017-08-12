//express

// var PORT = 3000;
// var express = require('express');
// var app = express();
// app.use(express.static('.'));//托管静态文件
// var server = app.listen(PORT, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Server runing at port: ', PORT, '.');
// });


//koa
let koa = require('koa')
let app =new koa()
let port = 3000
let staticServer = require('koa-static')
let path = require('path')
// app.use(staticServer(path.join(__dirname,'.')));
app.use(staticServer('.'));
app.listen(port)