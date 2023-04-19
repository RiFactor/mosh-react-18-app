import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import ExpenseSelect from "./ExpenseSelect";
import categories from "expense-tracker/Categories";

// // ToDo:
// 1. Get entry to add to array,
// 2. Dropdown arrow (styling?)

const minimumLength = 3;

const schema = z.object({
  description: z
    .string()
    .nonempty({ message: "Please provide a description." }) // should this be in?
    .min(minimumLength, { message: "Please enter at least 2 characters." }),
  amount: z
    .number({ invalid_type_error: "Number is required" }) // when empty string
    .min(0.01, { message: "Amount must be at least £0.01." })
    .nonnegative({ message: "Amount cannot be negative." }),
  category: z.enum(["groceries", "utilities", "toiletries"]), // ToDo get a drop down list
});

// const required?

type TExpense = z.infer<typeof schema>;

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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TExpense>({ resolver: zodResolver(schema) });

  // console.log(register("category")); // should exist but will let you enter non-existent value

  const onSubmit = (data: FieldValues) => {
    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        description: "item",
        amount: 1.5,
        category: "utilities",
      },
    ]);
    console.log(data, "submit data");
    console.log(expenses, "final expenses");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Expense Display - Second Practise</h1>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          {/* ToDo selection? */}
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          {/* QUESTION -- what does htmlFor and input do?? */}
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button
          // disabled={!isValid}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
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
