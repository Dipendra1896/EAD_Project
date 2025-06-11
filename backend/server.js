
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB with URI from .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Use expense routes for API endpoints
const expenseRoutes = require('./routes/expenseRoutes');
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000; // Use PORT from env or fallback to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));