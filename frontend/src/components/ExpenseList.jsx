
import axios from 'axios';
import toast from 'react-hot-toast';
import  './ExpenseList.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function ExpenseList({ expenses, onDelete }) {
  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/expenses/${id}`); 
      onDelete(id); 
      toast.success('Expense deleted');
    } catch {
      toast.error('Failed to delete');
    }
  };

  return (
    <div className="expense-list">
    <h2>Expense List</h2>
    {/* Display the list of expenses */}
    <ul className="expense-ul">
  {expenses.map(exp => (
    <li key={exp._id} className="expense-item">
      <span className="expense-text">
        {exp.title} - NRs.{exp.amount} ({exp.category})
      </span>
      <button className="delete-btn" onClick={() => handleDelete(exp._id)}>
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
}
