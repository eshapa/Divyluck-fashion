const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Route imports
const userRoutes = require('./Routes/userRoutes');
const shopRoutes = require("./Routes/shopRoutes");
const tailorRoutes = require('./Routes/tailorRoutes');

// const tailorRoutes = require('./routes/tailorRoutes');
// const shopkeeperRoutes = require('./routes/shopkeeperRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use("/api/shops", shopRoutes);
app.use('/api/tailors', tailorRoutes);
// app.use('/api/tailors', tailorRoutes);

// app.use('/api/admin', adminRoutes);
// app.use('/api/orders', orderRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('💃 Divyluck Fashion Portal Backend is Running 🎉');
});

// MongoDB + Server Start
const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/Divyluck", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB: Divyluck');
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
});
