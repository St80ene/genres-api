const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
	firstName: {
		type: String,
		min: 3,
		max: 30,
		required: true,
	},
	lastName: {
		type: String,
		min: 3,
		max: 30,
		required: true,
	},
	phone: {
		type: Number,
		minlength: 11,
		maxlength: 11,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('customers', customerSchema);
