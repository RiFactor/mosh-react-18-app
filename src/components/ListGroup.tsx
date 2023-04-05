import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import classNames from "classnames";

interface ItemsProps {
  // items: ItemsProps[];
  items: string[];
  heading: string;
}

// interface ItemProps {
//   name: string;
// } // QUESTION -- want to pass an array of objects

const ListGroup = ({ items, heading }: ItemsProps) => {
  // cities = [];

  const [selectedCity, setSelectedCity] = useState(-1); // copies of components will have their own state, if we import listgroup twice into the app, the states will be independent

  const getCities = () => {
    // can be a function if taking a param, better to be a var if not
    return items.length === 0 && <p>No {heading} Found Here.</p>;
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
      <h1>{heading}</h1>
      {getCities()}
      {items.length === 0 && <p>No {heading} Found.</p>}

      <ul className="list-group">
        {items?.map((item, index) => (
          <li
            className={
              classNames("list-group-item", selectedCity === index && "active") // used classNames import to concatenate :)
            }
            key={item}
            onClick={() => {
              // setSelectedCity(index);
              handleSelectedCity(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <br />
      <p> test</p>
    </>
  );
};

export default ListGroup;
