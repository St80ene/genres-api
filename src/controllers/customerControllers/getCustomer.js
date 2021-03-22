const DB = require('../../DB/db');

async function getCustomer(req, res) {
	try {
		const customer = await new DB().customer.find();
		res.status(200).json(customer);
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = getCustomer;
