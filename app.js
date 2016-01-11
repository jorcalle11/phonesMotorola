var express = require('express');
var jade = require('jade');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.render('index');
});

app.get('/smartphones',function(req,res){
    res.render('smartphones');
});

app.listen(port, function(req,res){
    console.log('server running and listennig in http://localhost:'+port);
});

