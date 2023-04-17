import { FieldValues, useForm } from "react-hook-form";

type TExpense = {
  description?: string; // QUESTION should these be optional?
  amount?: number;
  category?: string; // ToDo: to figure out how to make options!
};

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TExpense>(); // QUESTION -- no obj, null, nothing passed in brackets here?

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
            {...register("description", { required: true, minLength: 2 })}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">Please provide a description.</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-danger">Please enter at least 2 characters.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { required: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">Please provide an amount</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          {/* ToDo selection? */}
          <input
            {...register("category", { required: true, minLength: 2 })}
            id="category"
            type="text"
            className="form-control"
          />
          {/* what does htmlFor and input do?? */}
          {errors.category?.type === "required" && (
            <p className="text-danger">Please provide a category.</p>
          )}
          {errors.category?.type === "minLength" && (
            <p className="text-danger">Please enter at least 2 characters.</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
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
