import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Shoehorn", quantity: 2 },
      { id: 2, title: "Cup of tea", quantity: 1 },
      { id: 3, title: "Dog flea treatment", quantity: 1 },
    ],
  });

  const handleIncrement = (id: number) => {
    console.log("clicked", id);

    setCart({
      ...cart,
      // QUESTION why doesn't mapping the items need to be in a array? [cart.items.map(...)]
      items: cart.items.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      }),
    });
  };

  return (
    <div>
      Cart
      <ul>
        {cart.items.map((item) => {
          return (
            <li
              onClick={() => {
                handleIncrement(item.id);
              }}
              key={item.id}
            >
              {item.title} {item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
