import { FormEvent, useRef, useState } from "react";

type TExpense = {
  description?: string; // QUESTION should these be optional?
  amount?: number;
  category?: string; // TODO: to figure out how to make options!
};

const ExpenseTracker = () => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const expense: TExpense = {};
  console.log(expense, "empty expense");

  // const [expenses, setExpenses] = useState({
  //   description: "test",
  //   amount: 0,
  //   category: "test", // ToDo preselected list?
  // });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (descriptionRef.current !== null) {
      expense.description = descriptionRef.current.value;
    }
    if (amountRef.current !== null) {
      expense.amount = parseInt(amountRef.current.value);
    }
    if (categoryRef.current !== null) {
      expense.category = categoryRef.current.value;
    }

    console.log("submitted expense tracker", expense);
    // setExpenses([...expenses]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Expense Tracker</h1>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            ref={descriptionRef}
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
            ref={amountRef}
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
            ref={categoryRef}
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
