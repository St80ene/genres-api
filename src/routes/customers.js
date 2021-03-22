const express = require('express');
const router = express.Router();
const getCustomer = require('../controllers/customerControllers/getCustomer')
const searchCustomerById = require('../controllers/customerControllers/customerIdSearch');
const updateCustomer = require('../controllers/customerControllers/updateCustomer');
const createCustomer = require('../controllers/customerControllers/createCustomer');
const deleteCustomer = require('../controllers/customerControllers/deleteCustomer');


router.get('/RenVid.com/api/customers', getCustomer);
router.get('/RenVid.com/api/customers/:id', searchCustomerById);
router.put('/RenVid.com/api/customers/:id', updateCustomer);
router.post('/RenVid.com/api/customers', createCustomer);
router.delete('/RenVid.com/api/customers', deleteCustomer);

module.exports = router;