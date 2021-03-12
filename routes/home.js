const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Vidly',
		message: 'Hello world',
		name: 'Etiene Essenoh',
	});
});

module.exports = router;
