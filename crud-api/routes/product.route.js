const express = require('express');
const router = express.Router();
const Product = require('../models/product.model')
const { getProducts, getProductById, updateProduct, deleteProduct,createProduct} = require('./controllers/product.controller.js');

// fetch products 
router.get('/', getProducts)

// get products by id
router.get('/:id', getProductById)

// create products
router.post('/', createProduct);

// update product
router.put('/:id', updateProduct)

// delete product
router.delete('/:id',deleteProduct);

module.exports = router;