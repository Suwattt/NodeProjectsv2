const express = require('express');
const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
    windowMs: 1000*60*1,   // 1 minutes
    max: 10,
    message: 'Too many requests, please try again after 1 minutes!'
});

const router = express.Router();
const customerController = require('../controllers/customers');
const productController = require('../controllers/products');

router.post('/customers', customerController.createCustomer);
router.put('/customers', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);
router.get('/customers/:id', customerController.getCustomer);
router.get('/customers/q/:term', customerController.getCustomersByTerm);
router.get('/customers', customerController.getCustomers);

router.post('/products', productController.createProduct);
router.put('/products', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products/:id', productController.getProduct);
router.get('/products/q/:term', productController.getProductByTerm);
router.get('/products', productController.getProduct);

module.exports = router;