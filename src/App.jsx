import { useState } from "react";
import "./App.css";   // <-- CSS import

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="container">
      <h1>💰 Expenses Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">➕ Add Expense</button>
      </form>

      <div>
        {expenses.length === 0 ? (
          <p>No expenses yet!</p>
        ) : (
          expenses.map((exp) => (
            <div key={exp.id} className="expense-item">
              <div>
                <p><b>{exp.title}</b></p>
                <p>{exp.date}</p>
              </div>
              <p>₹{exp.amount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
