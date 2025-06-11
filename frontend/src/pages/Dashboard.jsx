// Folder: frontend/src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import toast, { Toaster } from 'react-hot-toast';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]); // Track all expenses

  // Fetch expenses when component mounts
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/expenses`)
      .then(res => setExpenses(res.data)) // Store fetched data
      .catch(() => toast.error('Failed to fetch expenses'));
  }, []);

  // Add a new expense to the list
  const addExpense = (newExp) => setExpenses([...expenses, newExp]);

  // Remove an expense by ID
  const deleteExpense = (id) => setExpenses(expenses.filter(e => e._id !== id));

  // Calculate total amount spent
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className= "container">
      <Toaster position="top-right" />
      <h1>Expense Tracker</h1>
      {/* Show total expenses */}
      <p className ="total"><strong>Total:</strong> NRs.{total}</p>
      {/* Form to add expense */}
      <ExpenseForm onAdd={addExpense} />
      {/* List of expenses */}
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

