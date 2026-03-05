const express = require('express');
const products = require('./products');

const router = express.Router();

// GET /products – все
router.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/:brand – за брендом
router.get('/products/:brand', (req, res) => {
  const { brand } = req.params;

  const filtered = products.filter(p => p.brand === brand);

  res.json(filtered);
});

// GET /products/id/:id – за ID
router.get('/products/id/:id', (req, res) => {
  const { id } = req.params;
  const productId = Number(id);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

module.exports = router;
