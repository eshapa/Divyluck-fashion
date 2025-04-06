const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/usercontroller');


router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/profile', validateUser, getUserProfile); // protected route

module.exports = router;
