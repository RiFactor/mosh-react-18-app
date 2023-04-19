type TExpense = {
  description: string;
  amount: number;
  category: string;
};

interface IProps {
  expenses: TExpense[];
  selectedExpenseCategory: string;
  onDelete: (id: number) => void;
}

const ExpenseTable = ({ expenses, onDelete }: IProps) => {
  const total = expenses.reduce((acc, expense) => expense.amount + acc, 0);

  return (
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
        {expenses.map((expense: any, index: number) => {
          // ToDo type
          return (
            <tr key={index}>
              <th scope="row">{expense.description}</th>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <th>Total</th>
          <th>{total}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
