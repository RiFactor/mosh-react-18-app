import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import classNames from "classnames";

interface IItemsProps {
  items: IItemProps[];
  heading: string;
}

interface IItemProps {
  name: string;
}

const ListGroup = ({ items, heading }: IItemsProps) => {
  const [selectedCity, setSelectedCity] = useState(-1); // NTS: copies of components will have their own state, if we import listgroup twice into the app, the states will be independent

  const getCities = items.length === 0 && <p>No {heading} Found Here.</p>; // NTS: can be a function if taking a param, better to be a var if not

  const handleCityClicked = (
    event: MouseEvent,
    index: number,
    name: string // NTS: param order matters!
  ) => console.log("test", index + 1, name, event);

  const handleSelectedCity = (index: number) => {
    selectedCity === index ? setSelectedCity(-1) : setSelectedCity(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {getCities}
      {items.length === 0 && <p>No {heading} Found.</p>}

      <ul className="list-group">
        {items?.map((item, index) => (
          <li
            className={classNames(
              "list-group-item",
              selectedCity === index && "active"
            )}
            key={item.name}
            onClick={(event) => {
              handleCityClicked(event, index, item.name);
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
