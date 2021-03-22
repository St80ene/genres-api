const DB = require('../../DB/db');

async function createCustomer(req, res) {
	try {
		new DB().customer.create(req.body, { new: true });
		res.status(200).json('Customer created...');
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = createCustomer;