import { MouseEvent } from "react";
import { useState } from "react";
import "App.css";

import ListGroup from "components/ListGroup"; // NTS: install vite plugin for absolute path
import Alert from "components/Alert";
import Button from "components/Button";
import Like from "components/Like";
import Tags from "components/Tags";
import Bugs from "components/Bugs";
import NavBar from "components/NavBar";
import ShoppingCart from "components/ShoppingCart";
import Game from "components/Game";
import Pizza from "components/Pizza";
import Cart from "components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState(["shirt", "hat"]);

  const [showAlert, setShowAlert] = useState(false); // NTS: this is destructuring props from useState

  let cities = [
    { name: "New York" },
    { name: "Paris" },
    { name: "London" },
    { name: "Tokyo" },
  ];

  // cities = [];

  const handleSelectCity = (city: string) => {
    console.log("pass fn via props", city); // NTS: don't need 'return' for console log b/c returns void
  };

  const handlePrimaryButtonClick = (event: MouseEvent) => {
    console.log(event, "primary button clicked");
  };

  const handleShowAlert = () => {
    setShowAlert(!showAlert);
  };

  const handleLike = () => {
    console.log("clicked");
    return true;
  };

  const handleClear = () => {
    setCartItems([]);
  };

  return (
    <div>
      <NavBar count={cartItems.length} />
      <ShoppingCart items={cartItems} onClick={handleClear} />
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectCity}
      />
      {showAlert && (
        <Alert onClose={handleShowAlert}>
          <strong>Oops!</strong> Close to dismiss this
        </Alert>
      )}

      <Button
        buttonType="primary"
        onClick={(event: MouseEvent) => {
          handleShowAlert();
          handlePrimaryButtonClick(event);
        }}
      >
        Click Here
      </Button>
      <Like onClick={handleLike} />
      <Tags />
      <Bugs />
      <Game />
      <Pizza />
      <Cart />
    </div>
  );
};

export default App;
