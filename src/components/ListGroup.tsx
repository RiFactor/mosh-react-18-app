import { Fragment, useState } from "react";
import { MouseEvent } from "react";

const ListGroup = () => {
  let cities = [
    { name: "New York" },
    { name: "Paris" },
    { name: "London" },
    { name: "Tokyo" },
  ];

  // cities = [];

  const [selectedCity, setSelectedCity] = useState(-1);

  const getCities = () => {
    // can be a function if taking a param, better to be a var if not
    return cities.length === 0 && <p>No Cities Found Here.</p>;
  };

  // const handleCityClicked = (
  //   event: MouseEvent
  //   // city: string,
  //   // index: number // QUESTION --- want to pass these params with TS
  // ) => console.log(event);

  const handleSelectedCity = (index: number) => {
    selectedCity === index ? setSelectedCity(-1) : setSelectedCity(index);
  };

  return (
    <>
      {/* // QUESTION -- when should you use fragment as above, and when should div / section (other element be used) */}
      <h1>Cities</h1>
      {getCities()}
      {cities.length === 0 && <p>No Cities Found.</p>}

      <ul className="list-group">
        {cities?.map((city, index) => (
          <li
            className={
              selectedCity === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city.name}
            onClick={() => {
              // setSelectedCity(index);
              handleSelectedCity(index);
            }}
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
