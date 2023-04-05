import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import classNames from "classnames";

interface IItemsProps {
  // items: ItemsProps[];
  items: ItemProps[];
  heading: string;
}

interface ItemProps {
  name: string;
}

const ListGroup = ({ items, heading }: IItemsProps) => {
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
      <h1>{heading}</h1>
      {getCities()}
      {items.length === 0 && <p>No {heading} Found.</p>}

      <ul className="list-group">
        {items?.map((item, index) => (
          <li
            className={
              classNames("list-group-item", selectedCity === index && "active") // used classNames import to concatenate :)
            }
            key={item.name}
            onClick={() => {
              handleSelectedCity(index);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <br />
      <p> test</p>
    </>
  );
};

export default ListGroup;
