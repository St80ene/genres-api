const express = require('express');
const router = express.Router();
const getGenre = require('../controllers/genreControllers/getGenre')
const searchGenreById = require('../controllers/genreControllers/genreIdSearch');
const createGenre = require('../controllers/genreControllers/genreIdSearch');
const updateGenre = require('../controllers/genreControllers/updateGenre');
const deleteGenre = require('../controllers/genreControllers/deleteGenre');


router.get('/RenVid.com/api/genres', getGenre);

router.get('/RenVid.com/api/genres/:id', searchGenreById);

router.post('/RenVid.com/api/genres', createGenre);

router.put('/RenVid.com/api/genres/:id', updateGenre);

router.delete('/vidly.com/api/genres/:id', deleteGenre);

module.exports = router;
