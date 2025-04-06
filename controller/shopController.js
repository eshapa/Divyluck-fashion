const Shop = require('../Models/shopModels');
const bcrypt = require('bcryptjs');

exports.registerShop = async (req, res) => {
    try {
        const {
            shopName,
            owner,
            email,
            password,
            confirmPassword,
            contact,
            location,
            businessLicense,
            shopImage,
            profileImage,
            logo,
            categories
        } = req.body;

        const existingShop = await Shop.findOne({ email });
        if (existingShop) {
            return res.status(400).json({ message: 'Shop already registered with this email.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newShop = new Shop({
            shopName,
            owner,
            email,
            password: hashedPassword,
            contact,
            location,
            businessLicense,
            shopImage,
            profileImage,
            logo,
            categories
        });

        await newShop.save();
        res.status(201).json({ message: 'Shop registered successfully!', shop: newShop });
    } catch (error) {
        console.error('Error registering shop:', error.message);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

exports.getAllShops = async (req, res) => {
    try {
        const shops = await Shop.find();
        res.status(200).json(shops);
    } catch (error) {
        console.error('Error fetching shops:', error.message);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
