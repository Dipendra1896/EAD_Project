// Folder: backend/routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Define route for fetching all expenses
router.get('/', expenseController.getExpenses);

// Define route for creating a new expense
router.post('/', expenseController.createExpense);

// Define route for deleting an expense by ID
router.delete('/:id', expenseController.deleteExpense);

// Export the configured router
module.exports = router;


