// controllers/userController.js
const User = require('../Models/usermodels');

// Controller for registering email
exports.registerEmail = async (req, res) => {
  const { email } = req.body;

  // Validate the email format (basic example)
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create new user
    const newUser = new User({ email });
    await newUser.save();

    res.status(200).json({ message: "Email registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
