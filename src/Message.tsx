const Message = () => {
  const name = "Ri";

  //   if (name) {
  //     return <h1>Hello, {name}</h1>;
  //   } else {
  //     return <h1>Hello, World!</h1>;
  //   }

  return (
    <div>
      {name && <h1>Hello, {name}</h1>}
      <h3>How are you doing?</h3>
    </div>
  );
};

export default Message;
