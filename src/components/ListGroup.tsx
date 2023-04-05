import { Fragment } from "react";
import { MouseEvent } from "react";

let cities = [
  { name: "New York" },
  { name: "Paris" },
  { name: "London" },
  { name: "Tokyo" },
];

// cities = [];

const getCities = () => {
  // can be a function if taking a param, better to be a var if not
  return cities.length === 0 && <p>No Cities Found Here.</p>;
};

const handleCityClicked = (
  event: MouseEvent
  // , city: string, index: number // Question --- want to pass these params with TS
) => console.log(event);

const ListGroup = () => {
  return (
    <>
      {/* // Question -- when should you use fragment as above, and when should div / section (other element be used) */}
      <h1>Cities</h1>
      {getCities()}
      {cities.length === 0 && <p>No Cities Found.</p>}

      <ul className="list-group">
        {cities?.map((city, index) => (
          <li
            className="list-group-item"
            key={city.name}
            onClick={handleCityClicked}
          >
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
