import { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["mushrooms", "pepperoni"],
  });

  const handleToppingAdded = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "peppers"] });
  };

  return (
    <div>
      <ul>{pizza.name}</ul>
      {pizza.toppings.map((topping) => {
        return <li key={topping}>{topping}</li>;
      })}
      <button onClick={handleToppingAdded}>Add Topping</button>
    </div>
  );
};

export default Pizza;
