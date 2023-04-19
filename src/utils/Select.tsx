import { UseFormRegister, useForm } from "react-hook-form";
import categories from "expense-tracker/Categories";

// import { z } from "zod";

// const minLength = 3;
// const maxLength = 20;

// const schema = z.object({
//   description: z
//     .string()
//     .nonempty({ message: "Please provide a description." }) // should this be in?
//     .min(minLength, { message: "Please enter at least 2 characters." })
//     .max(maxLength, {
//       message: `Description cannot exceed ${maxLength} characters.`,
//     }),
//   amount: z
//     .number({ invalid_type_error: "Number is required" }) // when empty string
//     .min(0.01, { message: "Amount must be at least £0.01." })
//     .nonnegative({ message: "Amount cannot be negative." })
//     .max(1_000),
//   category: z.enum(categories, {
//     errorMap: () => ({
//       message: "Category cannot be empty",
//     }),
//   }),
// });

// const required?

// type TExpense = z.infer<typeof schema>;

interface IProps {
  register: any;
  // UseFormRegister<TExpense>; // QUESTION -- what is this or how do i find the type [exhausted attempt above]
  errors: any; // QUESTION -- what is this or how do i find the type
  title: string;
  options: readonly string[]; // QUESTION -- is readonly right to implement here?
}

const Select = ({ register, errors, options, title }: IProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={title} className="form-label">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </label>
      <select {...register(title)} id={title} className="form-select">
        <option value=""></option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}
    </div>
  );
};

export default Select;
