const mongoose = require('mongoose');
const genreSchema = require('./genreModel')

class DB {
	constructor(url) {
		this.url = url;
		this.genre = require('./genreModel');
		this.customer = require('./customerModel')
	}

	async connect(url) {
		await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
	}

	async createGenre(name) {
		await genreSchema.create({
			name: name,
		});
	}

	async getGenre() {
		await this.genre.find()
	}
}

module.exports = DB