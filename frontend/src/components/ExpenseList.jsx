// Folder: frontend/src/components/ExpenseList.jsx
import axios from 'axios';
import toast from 'react-hot-toast';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function ExpenseList({ expenses, onDelete }) {
  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/expenses/${id}`); // Send DELETE request
      onDelete(id); // Update parent state
      toast.success('Expense deleted');
    } catch {
      toast.error('Failed to delete');
    }
  };

  return (
    <ul>
      {expenses.map(exp => (
        <li key={exp._id}>
          {/* Display each expense */}
          {exp.title} - ${exp.amount} ({exp.category})
          <button onClick={() => handleDelete(exp._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
