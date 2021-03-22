const DB = require('../../DB/db');

async function searchCustomerById(req, res) {
	try {
		const id = req.params.id;
		const customer = await new DB().customer.findById(id);
		if (customer) {
			res.status(200).json(customer);
		} else {
			throw new Error('Customer with this ID does not exist');
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = searchCustomerById;
