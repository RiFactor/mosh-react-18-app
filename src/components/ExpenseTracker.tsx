import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
  category: z
    // ToDo: to figure out how to make options!; zod enum
    .string()
    .min(minimumLength, { message: "Please enter at least 2 characters." }),
});

// const required?

type TExpense = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    {
      description: "test",
      amount: "2",
      category: "groceries",
    },
  ]); // want an aray of objects

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TExpense>({ resolver: zodResolver(schema) });

  console.log(register("category")); // should exist but will let you enter non-existent value

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
          {/* ToDo selection? */}
          <input
            {...register("category")}
            id="category"
            type="text"
            className="form-control"
          />
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          {/* <tbody>
            {expenses.map((expense: any, index: number) => {
              return (
                <tr key={index}>
                  <th scope="row">{expense.description}</th>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default ExpenseTracker;
