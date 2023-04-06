// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { MouseEvent } from "react";
import DismissibleAlert from "./components/DismissibleAlert";

const App = () => {
  let cities = [
    { name: "New York" },
    { name: "Paris" },
    { name: "London" },
    { name: "Tokyo" },
  ];

  // cities = [];

  const handleSelectCity = (city: string) => {
    console.log("pass fn via props", city);
  };

  // const handleWarningButtonClick = () => {
  //   console.log("warning button clicked"); // QUESTION -- don't need 'return' for console log?
  // };

  const handlePrimaryButtonClick = (event: MouseEvent) => {
    console.log(event, "primary button clicked");
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectCity}
      />
      {/* <ListGroup /> */}

      {/* <Button
        onClick={handleWarningButtonClick}
        buttonType="warning"
        // buttonType="string"
      >
        Click Me
      </Button> */}
      <Button buttonType="danger" onClick={handlePrimaryButtonClick}>
        Click Here
      </Button>
      {/* <DismissibleAlert /> */}
    </div>
  );
};

export default App;
