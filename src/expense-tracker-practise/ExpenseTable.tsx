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

const ExpenseTable = ({
  expenses,
  selectedExpenseCategory,
  onDelete,
}: IProps) => {
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
        {expenses
          .filter((expense) =>
            // QUESTION - help w/ error (gone after reload?)
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
          {/* <th>£ {filteredList()}</th> */}
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
