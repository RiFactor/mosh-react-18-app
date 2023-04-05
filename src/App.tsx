// import Message from "./Message";
import ListGroup from "./components/ListGroup";

const App = () => {
  let cities = [
    "New York",
    "Paris",
    "London",
    "Tokyo",
    // { name: "New York" },
    // { name: "Paris" },
    // { name: "London" },
    // { name: "Tokyo" },
  ];

  // cities = [];

  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      {/* <ListGroup /> */}
    </div>
  );
};

export default App;
