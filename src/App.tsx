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
import ExpandableText from "components/ExpandableText";
import ExpandableTextSolution from "components/ExpandableTextSolution";
import Form from "components/Forms/Form";
import ControlledForm from "components/Forms/ControlledForm";
import FormHook from "components/Forms/FormHook";
import ZodForm from "components/Forms/ZodForm";
import ExpenseTracker from "expense-tracker/ExpenseTracker";
import ExpenseDisplay from "expense-tracker-final/ExpenseDisplay";
import ExpenseView from "expense-tracker/ExpenseView";
import ConnectingToTheBackend from "components/ServerModule/ConnectingToTheBackend";
import ProductList from "components/ServerModule/ProductList";
import ProductDisplay from "components/ServerModule/ProductDisplay";

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
      {/* <NavBar count={cartItems.length} />
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
      <ExpandableText />
      <ExpandableTextSolution>
        ETS: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        dolore optio vitae, architecto hic praesentium totam, culpa sed dolorum
        illum ab officiis fugiat neque nostrum, voluptatum ratione magni. Ipsa
        quibusdam quam blanditiis velit temporibus molestiae consequatur quae
        recusandae maxime provident voluptates veniam necessitatibus ea
        perferendis, asperiores nobis libero est omnis illum commodi praesentium
        repellat. Eligendi, nobis fuga, culpa rem rerum, enim distinctio numquam
        et accusamus debitis minus sequi reprehenderit dignissimos error
        voluptatem non temporibus blanditiis iusto! Corporis dignissimos vero
        cupiditate nisi, dolor iusto inventore tempora voluptatum, unde aliquam
        rerum adipisci quo voluptatibus nihil eligendi. Eius eos ducimus
        repudiandae facilis ratione!
      </ExpandableTextSolution>

      <Form />
      <ControlledForm />
      <FormHook />
      <ZodForm /> */}
      <ExpenseView />
      <ExpenseDisplay />
      <ExpenseTracker />
      <ConnectingToTheBackend />
      <ProductDisplay />
    </div>
  );
};

export default App;
