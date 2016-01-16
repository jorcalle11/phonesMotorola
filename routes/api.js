var express = require('express');
var router = express.Router();
var Phone = require('../models/phone');

// get all phones
router.get('/phones',function(req,res){
	Phone.find([],function(err,phones){
		if (err) return err;
		if (!phones.length) return res.status(404).send({'message':'no hay telefonos guardados'});
		res.send(phones);
	})
});

// new phone
router.post('/phones/new',function(req,res){
	var data = {};
	data.camera = {};
	data.model = req.body.model;
	data.memory = req.body.memory;
	data.price = req.body.price;
	data.display = req.body.display;
	data.colors = req.body.colors.split(',');
	data.camera.front = req.body.front;
	data.camera.back = req.body.back;

	var phone = new Phone(data);

	phone.save(function(err){
		if (err) return err;
		res.json(phone);
	});
});

// edit phone
router.put('/phones/:id', function(req,res){
	Phone.findById(req.params.id, function(err,phone){
		if (err) return err;
		if (!phone) return res.status(404).send({'message':'no se encuentra telefono con id '+ req.params.id});
		console.log(req.body.camera);
		phone.model = req.body.model || phone.model;
		phone.memory = req.body.memory || phone.memory;
		phone.price = req.body.price || phone.price;
		phone.display = req.body.display || phone.display;
		phone.camera.front = req.body.front || phone.camera.front;
		phone.camera.back = req.body.back || phone.camera.back;
		if (req.body.colors) {
			phone.colors = req.body.colors.split(',');
		};

		phone.save();
		res.json(phone);
	});
});

// get phone
router.get('/phones/:id' ,function(req,res){
	Phone.findById(req.params.id, function(err,phone){
		if (err) return err;
		if (!phone) return res.status(404).send({'message':'no se encuentra telefono con id '+ req.params.id});
		res.json(phone);
	});
});

// remove phone
router.delete('/phones/:id', function(req,res){
	Phone.findOne({'_id':req.params.id},function(err,phone){
		if (err) return err;
		if (!phone) return res.status(404).send({'message':'no se encuentra telefono con id '+ req.params.id});
		phone.remove();
		res.json(phone);
	})
});

module.exports = router;
