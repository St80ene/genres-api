const DB = require('../../DB/db');

async function genreDelete(req, res) {
	// get the id from request
	try {
		let genreId = req.params.id;
		const genre = await new DB().genre.findByIdAndDelete(genreId, req.body);
		console.log(genre);
		if (genre) {
			res.status(200).json('Deleted successfully...');
		} else {
			throw new Error('Genre with this ID does not exist');
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = genreDelete;
