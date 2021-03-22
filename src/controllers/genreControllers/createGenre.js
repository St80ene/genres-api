const DB = require('../DB/db');

async function createGenre(req, res) {
	try {
		 new DB().create(req.body.name, {new: true});
		res.status(200).json('Genre created...');
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = createGenre;