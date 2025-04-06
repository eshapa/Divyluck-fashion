const mongoose = require("mongoose");

const tailorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  shopName: String,
  tailorType: String,
  experience: Number,
  specialty: String,
  city: String,
  location: String,
  pricingModel: String,
  portfolioImages: [String],
  profilePicture: String,
});

module.exports = mongoose.model("Tailor", tailorSchema);
