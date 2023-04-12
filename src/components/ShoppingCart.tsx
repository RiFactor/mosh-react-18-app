interface IProps {
  items: string[];
  onClick: () => void;
}

const ShoppingCart = ({ items, onClick }: IProps) => {
  return (
    <section>
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={onClick}>Clear</button>
    </section>
  );
};

export default ShoppingCart;
