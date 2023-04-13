import { FormEvent, useRef, useState } from "react";

const ControlledForm = () => {
  const [person, setPerson] = useState({
    // QUESTION -- is it better to use useRef or state here (see Form.tsx)
    name: "",
    age: 0, // QUESTION -- To stop '0' displaying on UI, the example uses "" but that is a string (TS error). Tried null, didn't work
  });

  const handleSubmit = (event: FormEvent) => {
    // console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Controlled Form</h1>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
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
          value={person.age}
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
