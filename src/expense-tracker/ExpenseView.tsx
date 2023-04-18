import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseTracker from "./ExpenseTracker";
import ExpenseForm from "./ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

const ExpenseView = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "games", amount: 5, category: "Entertainment" },
    { id: 2, description: "books", amount: 2, category: "Entertainment" },
    { id: 3, description: "bread", amount: 4, category: "Groceries" },
    { id: 4, description: "lightbulb", amount: 1, category: "Utilities" },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory) //  QUESTION why is filteredExpenses not a fn?
    : expenses;
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  if (expenses.length === 0) return null;

  return (
    <div>
      <h1>Expense View - Mosh</h1>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="mb-3">
        <ExpenseList
          expenses={filteredExpenses}
          onDelete={(id) => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default ExpenseView;
