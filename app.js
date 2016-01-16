var express = require('express');
var jade = require('jade');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;
var routes = require('./routes');
var api = require('./routes/api');

app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/',routes);
app.use('/api',api);

mongoose.connect('mongodb://localhost/motorola',function(err){
	if (err) throw (err)
	console.log('connect to database');
})

app.listen(port, function(req,res){
    console.log('server running and listennig in http://localhost:'+port);
});
