import categories from "expense-tracker/Categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const minLength = 3;
const maxLength = 20;

const schema = z.object({
  description: z
    .string()
    .nonempty({ message: "Please provide a description." }) // should this be in?
    .min(minLength, { message: "Please enter at least 2 characters." })
    .max(maxLength, {
      message: `Description cannot exceed ${maxLength} characters.`,
    }),
  amount: z
    .number({ invalid_type_error: "Number is required" }) // when empty string
    .min(0.01, { message: "Amount must be at least £0.01." })
    .nonnegative({ message: "Amount cannot be negative." })
    .max(1_000),
  category: z.enum(categories, {
    errorMap: () => ({
      message: "Category cannot be empty",
    }),
  }),
});

// const required?

type TExpense = z.infer<typeof schema>; // QUESTION -- should it be TExpenseFormData or is this name ok?

interface IProps {
  onSubmit: (expense: TExpense) => void;
}

const ExpenseFormHook = ({ onSubmit }: IProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TExpense>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data: TExpense) => {
        onSubmit(data);
        reset();
      })}
    >
      <h1>Expense Display - Second Practise</h1>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")} // QUESTION -- what does register do?? Does it replace value & onChange for React?
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      {/* QUESTION -- Can these be extracted to components for ease?? */}
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
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
          {/* ToDo export select component? */}
        </select>
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
  );
};

export default ExpenseFormHook;
