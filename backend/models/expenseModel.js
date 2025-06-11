
const mongoose = require('mongoose');

// Define the schema for an expense document
const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  amount: { type: Number, required: true }, 
  category: { type: String }, 
  date: { type: Date, default: Date.now } 
});

// Export the Expense model based on the schema
module.exports = mongoose.model('Expense', expenseSchema);


