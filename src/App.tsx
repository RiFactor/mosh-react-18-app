import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { MouseEvent } from "react";
import { useState } from "react";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

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
    setShowAlert(true);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectCity}
      />
      {showAlert && (
        <Alert>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            onClick={() => setShowAlert(false)}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Alert>
      )}

      <Button buttonType="danger" onClick={handlePrimaryButtonClick}>
        Click Here
      </Button>
    </div>
  );
};

export default App;
