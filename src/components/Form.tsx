import { FormEvent, useRef } from "react";

type TPerson = {
  name?: string;
  age?: number;
};

const Form = () => {
  // NTS: must initialise all to null
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person: TPerson = {
    // name: "",
    // age: 0, // ANSWERED -- why intialised to 0?
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <form
      onSubmit={
        handleSubmit
        // (event) => console.log("test") // NTS: start here to see typeof for 'event'
      }
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} name="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
