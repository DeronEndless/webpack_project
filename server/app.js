var express = require('express');
var path = require('path');
var app = express();

app.get('/dist*', function (req, res) {
  console.log('111111')
  console.log('req.url', req.url)
  res.sendFile(path.join(__dirname , "../" + req.url));
})

app.use(function (req, res) {
  console.log('22222')
	res.sendFile(path.join( __dirname , "../dist/index.html"));
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})