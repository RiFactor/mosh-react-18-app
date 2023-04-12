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
      // QUESTION why doesn't mapping the items need to be in a array? [cart.items.map(...)] (b/c it creates an array? only map arrays not objects?)
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
            <div key={item.id}>
              <li>
                {item.title} {item.quantity}
              </li>
              <button
                onClick={() => {
                  handleIncrement(item.id);
                }}
              >
                <span>&#43;</span>
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
