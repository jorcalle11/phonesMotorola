var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
  res.send('hello express');
});

app.listen(port, function(req,res){
  console.log('server running and listennig in http://localhost:'+port);
});
