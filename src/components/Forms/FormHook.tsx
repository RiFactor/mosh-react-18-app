import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface IFormData {
  // NTS: to improve dev experience for autocompletion e.g. 'errors.name' to access error props & typesafety
  name: string;
  age: number;
}

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>(); // QUESTION -- this is passed as the generic to say the structure of the form is this interface

  console.log("errors", errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(
        //QUESTION calling fn directly, not passing arrow fn or equating, is this b/c react doens't render onSubmit so there's nothing to intialise erroneously
        onSubmit
        // data => console.log(data) // NTS: To see typeof 'data'
      )}
    >
      <h3>Form Hook</h3>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 2 })} // QUESTION -- arbritray name but tied to where it is placed? tested by renaming
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Please provide a name.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least two letters long.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })} // QUESTION -- is required a nested obj inside register?
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Please provide an age.</p>
        )}
        {/* // QUESTION -- why does only type need optional chaining and not errors?b/c not checking if errors exists, but checking if name exists?? */}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormHook;
