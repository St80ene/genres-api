const DB = require('../../DB/db');

async function updateCustomer(req, res) {
	try {
		let customerId = req.params.id;
		const updatedRecord = await new DB().customer.findByIdAndUpdate(
			customerId,
			req.body
		);
		if (updatedRecord) {
			res.status(200).json('Update successful...');
		} else {
			throw new Error('Customer with this ID does not exist');
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = updateCustomer;