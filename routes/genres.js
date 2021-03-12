const express = require('express');
const router = express.Router();
const genres = require('../constants');
const { v4: uuidv4 } = require('uuid');
const validateGenre = require('../validator');

router.get('/vidly.com/api/genres', (req, res) => {
	res.status(200).json({ genres });
});

router.get('/vidly.com/api/genres/:id', (req, res) => {
	let genre = genres.find((g) => g.id === parseInt(req.params.id));
	if (!genre) {
		res.status(404).json({ error: 'Genre with specified ID is not found' });
	} else {
		res.status(200).json(genre);
	}
});

router.post('/vidly.com/api/genres', (req, res) => {
	try {
		const genreValue = validateGenre(req.body);
        let genre = { id: uuidv4(), genre: genreValue.genre };
		genres.push(genre);
		res.status(200).json({ data: genre, status: 200 });
	} catch (error) {
		console.log(error);
		res.status(400).json({ error, status: 400 });
	}
});

router.put('/vidly.com/api/genres/:id', (req, res) => {
	// get the id from request
	let genreId = req.params.id;
	//find the genre with given id
	let foundGenre = genres.find((g) => g.id === genreId);
	let requestedGenreIndex = genres.findIndex((g) => g.id === genreId);
	// if it is not found, return some message saying the genre doesn't exist
	if (!foundGenre) {
		res.status(400).json({ error: 'Genre with specified ID is not found' });
		return;
	}
	//validate the genre
	try {
		const validatedGenreBody = validateGenre(req.body);
		//update the genre
		foundGenre = { ...foundGenre, genre: validatedGenreBody.genre };
		genres.splice(requestedGenreIndex, 1, foundGenre);
		res.status(200).json(foundGenre);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error, status: 400 });
	}
});

router.delete('/vidly.com/api/genres/:id', (req, res) => {
	// get the id from request
	let genreId = req.params.id;
	// find where the id is located in the genres array
	const genre = genres.findIndex((g) => g.id === genreId);
	//find the genre with given id
	const requestedGenre = genres.find((g) => g.id === genreId);
	// if it is not found, return some message saying the genre doesn't exist
	if (genre === -1) {
		res.status(400).json({ error: 'Genre with specified ID is not found' });
		return;
	}
	// if found, check where it was found and splice from the array
	genres.splice(genre, 1);
	res.status(200).json({ data: requestedGenre, status: 200 });
});

module.exports = router;
