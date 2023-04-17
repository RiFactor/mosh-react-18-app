import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";

const minimumLength = 3;

const schema = z.object({
  description: z
    .string()
    .nonempty({ message: "Please provide a description." })
    .min(minimumLength, { message: "Please enter at least 2 characters." }),
  amount: z
    .number({ invalid_type_error: "Number is required" })
    .min(0.01, { message: "Amount must be at least £0.01." })
    .nonnegative({ message: "Amount cannot be negative." }),
  category: z.enum(["groceries", "utilities", "toiletries"]),
});

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
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TExpense>({ resolver: zodResolver(schema) });

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
          <select
            {...register("category")}
            id="category"
            className="form-control"
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <div>
        <h1>Expenses</h1>

        <select
          className="dropdown-header"
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

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount (£)</th>
              <th scope="col">Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses
              .filter((expense) =>
                selectedExpenseCategory === ""
                  ? expense
                  : expense.category === selectedExpenseCategory
              )
              .map((expense: any, index: number) => {
                return (
                  <tr key={index}>
                    <th scope="row">{expense.description}</th>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(expense.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <th>Total</th>
              <th>£ {filteredList()}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTracker;
