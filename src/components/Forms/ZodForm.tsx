import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const minimumLength = 3;

const schema = z.object({
  name: z.string().min(minimumLength, {
    message: `Name must be at least ${minimumLength} characters`,
  }), // QUESTION should the minimum value be put into a constant - is there a better way
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18" })
    .nonnegative(), // ToDo -- nonnegative not working
});

type TFormData = z.infer<typeof schema>;

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormData>({ resolver: zodResolver(schema) });

  console.log("errors", errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Zod Form</h3>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })} // basic QUESTION is value as number a nested obj?
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ZodForm;
