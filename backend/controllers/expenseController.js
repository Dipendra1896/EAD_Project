const Expense = require('../models/expenseModel');

// Get all expenses from the database
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find(); 
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new expense document
exports.createExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body); 
    await newExpense.save(); 
    res.status(201).json(newExpense); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(204).end(); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
