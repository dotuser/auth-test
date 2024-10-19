const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
