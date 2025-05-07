const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./Routes/userRoutes');
const shopRoutes = require('./routes/shopRoutes');
const tailorRoutes = require('./routes/tailorRoutes');
const tempEmailRoutes = require('./Routes/tempEmailRoutes');
// If you later need these, you can uncomment and add them
// const adminRoutes = require('./routes/adminRoutes');
// const orderRoutes = require('./routes/orderRoutes');

// Middleware routes
app.use('/api/users', userRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/tailors', tailorRoutes);
app.use('/api/temp', tempEmailRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('💃 Divyluck Fashion Portal Backend is Running 🎉');
});

// MongoDB + Server Start
const PORT = process.env.PORT || 5000;

// Replace process.env.MONGO_URI with your MongoDB connection string directly
const mongoURI = "mongodb://localhost:27017/Divyluck"; // your MongoDB connection string

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
