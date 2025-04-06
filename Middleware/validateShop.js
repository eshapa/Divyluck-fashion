const { body, validationResult } = require('express-validator');

const validateShop = [
  body('shopName').notEmpty().withMessage('Shop name is required'),
  body('owner').notEmpty().withMessage('Owner name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) throw new Error('Passwords do not match');
    return true;
  }),
  body('contact').isLength({ min: 10 }).withMessage('Contact must be at least 10 digits'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

module.exports = validateShop;
