const express = require('express');
const path = require('path');
const productsController = require('../controllers/products');

const router = express.Router();


// /admin/add-products => get
router.get('/add-product', productsController.getAddProducts );

// /admin/add-products => post
router.post('/add-product', productsController.postAddProducts);

module.exports = router;
