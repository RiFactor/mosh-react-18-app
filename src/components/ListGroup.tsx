import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import classNames from "classnames";
import styles from "../styles/ListGroup.module.css";
import { FcLinux } from "react-icons/fc";
import { ImTongue } from "react-icons/im";

type TItem = {
  name: string; //  NTS preferred to define this above for readability;
};

interface IItemsProps {
  items: TItem[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: IItemsProps) => {
  const [selectedItem, setSelectedItem] = useState(-1); // NTS: copies of components will have their own state, if we import listgroup twice into the app, the states will be independent

  const getItems = items.length === 0 && <p>No {heading} Found Here.</p>; // NTS: can be a function if taking a param, better to be a var if not

  const handleItemClicked = (
    event: MouseEvent,
    index: number,
    name: string // NTS: param order matters!
  ) => console.log("test", index + 1, name, event);

  const handleSelectedItem = (index: number) => {
    selectedItem === index ? setSelectedItem(-1) : setSelectedItem(index);
  };

  const object2 = {
    backgroundColor: "red",
    padding: "15px",
  };

  return (
    <>
      {/* NTS: No layers w/ react, nesting w/ div or alternate */}
      <h1>{heading}</h1>
      {getItems}
      {items.length === 0 && <p>No {heading} Found.</p>}
      {/* <ul className={styles.listGroup}> */}
      <ul
        className={[styles.listGroup, styles.container].join(" ")}
        style={{
          backgroundColor: "red",
          padding: "15px",
        }} // ANSWERED -- how do you make this an object
      >
        {items?.map((item, index) => (
          <li
            className={classNames(
              "list-group-item",
              selectedItem === index && "active"
            )}
            key={item.name}
            onClick={(event) => {
              handleItemClicked(event, index, item.name);
              handleSelectedItem(index);
              onSelectItem(item.name);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <br />
      <FcLinux size={60} />
      <ImTongue color="blue" size={60} />
      <p> test</p>
    </>
  );
};

export default ListGroup;
