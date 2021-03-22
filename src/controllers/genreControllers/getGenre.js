const DB = require('../../DB/db')

function getGenre(req, res) {
	const getGenre = new DB().genre.find();
	getGenre
		.then((result) => res.status(200).json(result))
		.catch((error) => console.error(error));
};

module.exports = getGenre;