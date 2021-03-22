const DB = require('../../DB/db');

async function deleteCustomer(req, res) {
	// get the id from request
	try {
		let customerId = req.params.id;
		const customerDetails = await new DB().customer.findByIdAndDelete(customerId, req.body);
		if (customerDetails) {
			res.status(200).json('Deleted successfully...');
		} else {
			throw new Error('Customer with this ID does not exist');
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
}

module.exports = deleteCustomer;