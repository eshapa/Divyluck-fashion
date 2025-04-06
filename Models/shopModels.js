const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category: String,
    image: String,
}, { _id: false });

const shopSchema = new mongoose.Schema({
    shopName: { type: String, required: true },
    owner: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    businessLicense: { type: String },
    shopImage: { type: String },
    profileImage: { type: String },
    logo: { type: String },
    categories: [categorySchema],
}, { timestamps: true });

module.exports = mongoose.model('Shop', shopSchema);
