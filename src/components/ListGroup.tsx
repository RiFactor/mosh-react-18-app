import { Fragment } from "react";

const cities = [
  { name: "New York" },
  { name: "Paris" },
  { name: "London" },
  { name: "Tokyo" },
];

const ListGroup = () => {
  return (
    // Question -- when should you use fragment, and when should div / section (other element be used)
    <>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city.name}>
            {city.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
