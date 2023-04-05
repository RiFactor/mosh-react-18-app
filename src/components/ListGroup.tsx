import { Fragment } from "react";

let cities = [
  { name: "New York" },
  { name: "Paris" },
  { name: "London" },
  { name: "Tokyo" },
];

// cities = [];

const ListGroup = () => {
  return (
    // Question -- when should you use fragment, and when should div / section (other element be used)
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>No Cities Found.</p>}

      <ul className="list-group">
        {cities?.map((city) => (
          <li className="list-group-item" key={city.name}>
            {city.name}
          </li>
        ))}
      </ul>
      <br />
      <p> test</p>
    </>
  );
};

export default ListGroup;
