import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import ExpenseTable from "./ExpenseTable";

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

const options = [
  { value: "groceries", label: "Groceries" },
  { value: "utilities", label: "Utilities" },
  { value: "toiletries", label: "Toiletries" },
];

type TExpense = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "test",
      amount: 1,
      category: "groceries",
    },
    {
      id: 2,
      description: "test2",
      amount: 2,
      category: "utilities",
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

  const filteredList = () => {
    const filteredExpenses = expenses.filter((expense) =>
      selectedExpenseCategory === ""
        ? expense
        : expense.category === selectedExpenseCategory
    );

    let amount = 0;

    filteredExpenses.map((expense) => {
      amount += expense.amount;
    });

    console.log(filteredExpenses);
    return amount;
  };

  const filteredExpenses = selectedExpenseCategory
    ? expenses.filter((expense) => expense.category !== selectedExpenseCategory)
    : expenses;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Expense Tracker</h3>
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
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
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
        <h1>Expenses</h1>

        <select
          className="form-select"
          value={selectedExpenseCategory}
          onChange={(event) => {
            setSelectedExpenseCategory(event.target.value);
          }}
        >
          <option value="">Everything</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <ExpenseTable
          expenses={expenses}
          selectedExpenseCategory={selectedExpenseCategory}
          onDelete={(id) => handleDelete(id)}
          // filteredList={filteredList}
        />
      </div>
    </>
  );
};

export default ExpenseTracker;
