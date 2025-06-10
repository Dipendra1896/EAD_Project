// Folder: backend/controllers/expenseController.js
const Expense = require('../models/expenseModel');

// Get all expenses from the database
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find(); // Fetch all documents
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new expense document
exports.createExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body); // Create a new Expense instance
    await newExpense.save(); // Save to the database
    res.status(201).json(newExpense); // Send created expense as response
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id); // Find and delete by ID
    res.status(204).end(); // No content response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
