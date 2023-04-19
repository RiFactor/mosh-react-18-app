import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./Categories";

const validationLimits = {
  minLength: 3,
  maxLength: 50,
  minValue: 0.01,
  maxValue: 100_000, // separate for readability
};

const schema = z.object({
  description: z
    .string()
    .min(validationLimits.minLength, {
      message: `Please enter at least ${validationLimits.minLength} characters.`,
    })
    .max(validationLimits.maxLength, {
      message: `Maximum number of characters exceeded ${validationLimits.maxLength}.`,
    }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(validationLimits.minValue, {
      message: `Minumum value cannot be below ${validationLimits.minValue}.`,
    })
    .max(validationLimits.maxValue, {
      message: `Maximum value cannot exceed ${validationLimits.maxValue}.`,
    }),
  category: z.enum(categories, {
    errorMap: () => ({
      message: "Category is required.",
    }),
  }),
});

type TExpenseFormData = z.infer<typeof schema>;

interface IProps {
  onSubmit: (data: TExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: IProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit=// {handleSubmit(onSubmit)} // QUESTION -- why can this just work without passing data
      {handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className="mb-3"
    >
      <div className="mb-3">
        <label htmlFor="descriptiom" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
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
        <label htmlFor="category" className="form-label"></label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
