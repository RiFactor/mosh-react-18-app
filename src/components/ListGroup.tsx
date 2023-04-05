import { Fragment } from "react";

let cities = [
  { name: "New York" },
  { name: "Paris" },
  { name: "London" },
  { name: "Tokyo" },
];

cities = [];

const getCities = () => {
  // can be a function if taking a param, better to be a var if not
  return cities.length === 0 && <p>No Cities Found Here.</p>;
};

const ListGroup = () => {
  return (
    // Question -- when should you use fragment, and when should div / section (other element be used)
    <>
      <h1>Cities</h1>
      {getCities()}
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
