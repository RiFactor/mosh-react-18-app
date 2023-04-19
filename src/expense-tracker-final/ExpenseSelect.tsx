import categories from "expense-tracker/Categories";

interface IProps {
  selectedExpenseCategory: string;
  onSelect: (category: string) => void; // rename to category rather than event
}

const ExpenseSelect = ({ selectedExpenseCategory, onSelect }: IProps) => {
  return (
    <select
      className="form-select"
      //   value={selectedExpenseCategory} // Don't need this?
      onChange={(event) => {
        onSelect(event.target.value);
      }}
    >
      <option value="">All Categories</option>
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default ExpenseSelect;
