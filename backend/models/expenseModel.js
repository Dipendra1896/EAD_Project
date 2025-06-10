// Folder: backend/models/expenseModel.js
const mongoose = require('mongoose');

// Define the schema for an expense document
const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Expense title is required
  amount: { type: Number, required: true }, // Expense amount is required
  category: { type: String }, // Optional category field
  date: { type: Date, default: Date.now } // Defaults to current date
});

// Export the Expense model based on the schema
module.exports = mongoose.model('Expense', expenseSchema);


