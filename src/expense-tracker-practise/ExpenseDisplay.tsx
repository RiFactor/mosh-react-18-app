import { FieldValues } from "react-hook-form";
import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import ExpenseSelect from "./ExpenseSelect";
import categories from "expense-tracker/Categories";
import ExpenseFormHook from "./ExpenseFormHook";

// // ToDo:
// 1. Get entry to add to array,
// 2. Dropdown arrow (styling?)

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
      <div>
        <h3>Expenses</h3>

        <div className="mb-3">
          <ExpenseSelect
            selectedExpenseCategory={selectedExpenseCategory}
            onSelect={(selectedExpenseCategory) =>
              setSelectedExpenseCategory(selectedExpenseCategory)
            }
          />
        </div>

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
