import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseTracker from "./ExpenseTracker";

const ExpenseView = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "games", amount: 5, category: "Entertainment" },
    { id: 2, description: "books", amount: 2, category: "Entertainment" },
    { id: 3, description: "shampoo", amount: 4, category: "Toiletries" },
    { id: 4, description: "lightbulb", amount: 1, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  if (expenses.length === 0) return null;

  return (
    <div>
      <div className="m-3">
        <ExpenseFilter />
      </div>
      <div className="m-3">
        <ExpenseList expenses={expenses} onDelete={(id) => handleDelete(id)} />
      </div>
      <div className="m-3">
        <ExpenseTracker />
      </div>
    </div>
  );
};

export default ExpenseView;
