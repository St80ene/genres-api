const DB = require('../../DB/db');

async function updateGenre(req, res) {
	try {
		let genreId = req.params.id;
		const genre = await new DB().genre.findByIdAndUpdate(genreId, req.body);
		if (genre) {
			res.status(200).json('Update successful...');
		} else {
			throw new Error('Genre with this ID does not exist');
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = updateGenre;
