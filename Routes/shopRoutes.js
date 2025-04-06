const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');
const validateShop = require('../Middleware/validateShop');

// 🛍️ Shop Registration Route
router.post('/register', validateShop, shopController.registerShop);

// 📦 Get All Shops
router.get('/all', shopController.getAllShops);

module.exports = router;
