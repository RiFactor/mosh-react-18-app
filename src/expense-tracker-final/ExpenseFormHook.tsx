import categories from "expense-tracker/Categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Select from "components/FormItems/Select";
import Input from "components/FormItems/Input";

const minLength = 2;
const maxLength = 20;

const schema = z.object({
  description: z
    .string()
    .nonempty({ message: "Please provide a description." }) // basic QUESTION should nonempty be used?
    .min(minLength, {
      message: `Please enter at least ${minLength} characters.`,
    })
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
// .required(); // ToDo -- want all the fields to be required: zod.dev Docs, make a separate required const

type TExpense = z.infer<typeof schema>; // basic QUESTION -- should it be TExpenseFormData or is this name ok?

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
      <Input
        register={register}
        errors={errors.description}
        title="description"
      />
      <Input
        register={register}
        errors={errors.amount}
        title="amount"
        isNumber={true}
      />

      <Select
        errors={errors}
        register={register}
        title="category"
        options={categories}
      />
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
