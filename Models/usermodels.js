// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  // You can add other fields like name, password later
});

const User = mongoose.model('User', userSchema);

module.exports = User;
