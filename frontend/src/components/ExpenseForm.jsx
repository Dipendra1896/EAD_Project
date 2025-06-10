// Folder: frontend/src/components/ExpenseForm.jsx
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

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
    <form onSubmit={handleSubmit}>
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
      <input
        placeholder="Category"
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
}