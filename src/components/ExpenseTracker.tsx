import { FormEvent, useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    {
      description: "test",
      amount: 0,
      category: "test", // ToDo preselected list?
    },
    {
      description: "test2",
      amount: 5,
      category: "test2", // ToDo preselected list?
    },
  ]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted expense tracker");
    setExpenses([...expenses]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Expense Tracker</h1>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          {/* ToDo selection? */}
          <input id="category" type="text" className="form-control" />
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
          <tbody>
            {expenses.map((expense: any, index: number) => {
              return (
                <tr key={index}>
                  <th scope="row">{expense.description}</th>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTracker;
