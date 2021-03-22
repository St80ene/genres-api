const mongoose = require('mongoose');

const genreSchema = mongoose.Schema(
	{
		name: {
			type: String,
			min: 3,
			max: 30,
			required: true,
        },
        date: {
            type: Date,
            default: Date.now
        }
	}
);

module.exports = mongoose.model('genre', genreSchema);