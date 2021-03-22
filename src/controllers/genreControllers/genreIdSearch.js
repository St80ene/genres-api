const DB = require('../../DB/db');

async function searchGenreById(req, res) {
	try {
		const id = req.params.id;
		const genre = await new DB().genre.findById(id);
		if (genre) {
			res.status(200).json(genre);
		} else {
			throw new Error('Genre with this ID does not exist');
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = searchGenreById;
