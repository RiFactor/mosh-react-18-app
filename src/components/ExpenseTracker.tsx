import { FormEvent, useRef, useState } from "react";

type TExpense = {
  description?: string; // QUESTION should these be optional?
  amount?: number;
  category?: string; // TODO: to figure out how to make options!
};

const ExpenseTracker = () => {
  const [expense, setExpense] = useState<TExpense>({});

  // const [expenses, setExpenses] = useState({
  //   description: "test",
  //   amount: 0,
  //   category: "test", // ToDo preselected list?
  // });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted expense tracker", expense);
    // setExpenses([...expenses]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Expense Tracker</h3>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={(event) => {
              setExpense({ ...expense, description: event.target.value });
            }}
            value={expense.description || ""}
            id="description"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            onChange={(event) => {
              setExpense({ ...expense, amount: parseInt(event.target.value) });
            }}
            value={expense.amount || ""}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          {/* ToDo selection? */}
          <input
            onChange={(event) => {
              setExpense({ ...expense, category: event.target.value });
            }}
            value={expense.category || ""}
            id="category"
            type="text"
            className="form-control"
          />
          {/* what does htmlFor and input do?? */}
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
