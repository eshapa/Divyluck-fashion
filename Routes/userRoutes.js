// routes/userRoutes.js
const express = require('express');
const { registerEmail } = require('../controller/usercontroller'); // Import from userController
const router = express.Router();

// Route for Step 1: Register Email
router.post('/register-email', registerEmail);

module.exports = router;
