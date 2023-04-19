import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import ExpenseSelect from "./ExpenseSelect";
import ExpenseFormHook from "./ExpenseFormHook";

const ExpenseTracker = () => {
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "test",
      amount: 1,
      category: "Groceries",
    },
    {
      id: 2,
      description: "test2",
      amount: 2,
      category: "Utilities",
    },
  ]); // want an aray of objects

  // console.log(register("category")); // should exist but will let you enter non-existent value

  const onSubmit = (expense: any) => {
    // ToDo Type
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const handleDelete = (id: number) => {
    console.log(expenses);

    setExpenses(expenses.filter((expense) => expense.id !== id));
    console.log(id);
  };

  // const handleSelectedExpenseCategory = (event: HTMLSelectElement) => {
  //   setSelectedExpenseCategory(event.target.value);
  // };

  const filteredExpenses = selectedExpenseCategory
    ? expenses.filter((expense) => expense.category === selectedExpenseCategory)
    : expenses;

  return (
    <>
      <ExpenseFormHook onSubmit={onSubmit} />
      <h3 className="mb-3">Expenses</h3>
      <div className="mb-3">
        <ExpenseSelect
          selectedExpenseCategory={selectedExpenseCategory}
          onSelect={(selectedExpenseCategory) =>
            setSelectedExpenseCategory(selectedExpenseCategory)
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseTable
          expenses={filteredExpenses}
          selectedExpenseCategory={selectedExpenseCategory}
          onDelete={(id) => handleDelete(id)}
        />
      </div>
    </>
  );
};

export default ExpenseTracker;
