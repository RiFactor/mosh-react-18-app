// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

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
    </div>
  );
};

export default App;
