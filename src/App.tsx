// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

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

  const handleWarningButtonClick = () => {
    console.log("warning button clicked"); // don't need 'return' for console log?
  };

  const handlePrimaryButtonClick = () => {
    console.log("primary button clicked");
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectCity}
      />
      {/* <ListGroup /> */}

      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button
        onClick={handleWarningButtonClick}
        buttonType="warning"
        // buttonType="string"
      >
        Click Me
      </Button>
      <Button onClick={handlePrimaryButtonClick} buttonType="primary">
        Click Here
      </Button>
    </div>
  );
};

export default App;
