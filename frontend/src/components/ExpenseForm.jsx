// Folder: frontend/src/components/ExpenseForm.jsx
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './ExpenseForm.css';

// Fallback to localhost if env variable isn't set
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function ExpenseForm({ onAdd }) {
  // State to track form inputs
  const [form, setForm] = useState({ title: '', amount: '', category: '' });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) {
      toast.error('Title and Amount are required');
      return;
    }
    try {
      const payload = { ...form, amount: Number(form.amount) }; // Convert amount to number
      const res = await axios.post(`${API_BASE_URL}/api/expenses`, payload);
      onAdd(res.data);
      setForm({ title: '', amount: '', category: '' });
      toast.success('Expense added successfully');
    } catch {
      toast.error('Failed to add expense');
    }
  };

  return (
    <div className="expense-form-container">
    <form onSubmit={handleSubmit} className="expense-form">
      {/* Input for title */}
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      {/* Input for amount */}
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })}
      />
      {/* Input for category */}
      <select
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="Loan">Loan</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="fee">Fee</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Insurance">Insurance</option>
        <option value="Housing">Housing</option>
        <option value="groceries">Groceries</option>
        <option value="gifts">Gifts</option>
        <option value="Subscriptions">Subscriptions</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add</button>
    </form>
    </div>
  );
}