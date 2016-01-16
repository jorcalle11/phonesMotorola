var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phoneSchema = new Schema({
	model: String,
	price: Number,
	display: String,
	Storage: String,
	memory: String,
	camera: {
		front: String,
		back: String
	},
	colors: [],
	image : {
		url : String,
		public_id: String
	}
});

var Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
