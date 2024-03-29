import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./Categories";
import { useId } from "react";

const validationLimits = {
  minLength: 3,
  maxLength: 50,
  minValue: 0.01,
  maxValue: 100_000, // separate for readability
}; // QUESTION -- is this ok to put all in an obj or messy (& real-world, would this come from the server)

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

  const id = useId();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // {handleSubmit(onSubmit)} // QUESTION -- why can this just work without passing data
        onSubmit(data);
        reset();
      })}
      className="mb-3"
    >
      <div className="mb-3">
        <label htmlFor={"description" + id} className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id={"description" + id}
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={"amount" + id} className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id={"amount" + id}
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
