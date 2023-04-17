type IExpense = {
  // DIFF - type, not interface
  id: number;
  description: string;
  amount: number;
  category: string;
  // "Groceries" | "Utlities" | "Toiletries" | "Entertainment"; // DIFF - put options, not string; // ToDo: add 'id' and value
};

interface IProps {
  // QUESTION -- why is type = {}; but no '=' for IProps, not Props = {}, just Props {}
  expenses: IExpense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: IProps) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount (£)</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => {
          return (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {expenses
              .reduce((acc, expense) => acc + expense.amount, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
