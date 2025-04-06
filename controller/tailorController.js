const Tailor = require("../Models/tailorModel");

exports.registerTailor = async (req, res) => {
  try {
    const tailor = await Tailor.create(req.body);
    res.status(201).json(tailor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTailors = async (req, res) => {
  try {
    const tailors = await Tailor.find();
    res.status(200).json(tailors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
