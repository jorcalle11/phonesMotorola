var express = require('express');
var router = express.Router();
var Phone = require('../models/phone');

router.get('/',function(req,res){
    res.render('index');
});

router.get('/phones/new', function(req,res){
	res.render('phones/new');
})

router.get('/smartphones',function(req,res){
    res.render('smartphones');
});

router.get('/contact',function(req,res){
	res.render('contact');
});

router.get('/about', function(req,res){
	res.render('about');
});

module.exports = router;
