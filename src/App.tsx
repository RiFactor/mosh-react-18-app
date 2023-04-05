// import Message from "./Message";
import ListGroup from "./components/ListGroup";

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
        handleSelectItem={handleSelectCity}
      />
      {/* <ListGroup /> */}
    </div>
  );
};

export default App;
