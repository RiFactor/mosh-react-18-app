import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { MouseEvent } from "react";
import { useState } from "react";

const App = () => {
  const [showAlert, setShowAlert] = useState(true);

  let cities = [
    { name: "New York" },
    { name: "Paris" },
    { name: "London" },
    { name: "Tokyo" },
  ];

  // cities = [];

  const handleSelectCity = (city: string) => {
    console.log("pass fn via props", city); // QUESTION -- don't need 'return' for console log?
  };

  const handlePrimaryButtonClick = (event: MouseEvent) => {
    console.log(event, "primary button clicked");
    // setShowAlert(true); // NTS: could create a toggle function
  };

  const handleShowAlert = () => {
    setShowAlert(!showAlert);
    // showAlert ? setShowAlert(false) : setShowAlert(true);
  };

  return (
    <div>
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
        buttonType="danger"
        onClick={(event: MouseEvent) => {
          handleShowAlert();
          handlePrimaryButtonClick(event);
        }}
      >
        Click Here
      </Button>
    </div>
  );
};

export default App;
