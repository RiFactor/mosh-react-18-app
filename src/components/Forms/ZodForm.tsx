import { FormEvent, useRef, useState } from "react";
type TPerson = {
  // NTS: Prefer to create types and not initialise state values
  name?: string;
  age?: number;
};

const ControlledForm = () => {
  const [person, setPerson] = useState<TPerson>({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Controlled Form</h3>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          value={person.name || ""} // QUESTION -- these are falsy so if I pass || "derek", it will render this b/c those are falsy
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age || ""}
          // NTS resolve console error for undefined input value from state
          name="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
