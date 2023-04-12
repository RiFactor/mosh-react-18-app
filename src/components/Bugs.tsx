import { useState } from "react";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: "scroll", type: "new" },
    { id: 2, name: "navigation", type: "new" },
  ]);

  const handleClick = () => {
    console.log("clicked");
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, type: "fixed" } : bug))
    );
  };

  return (
    <>
      <h1>Bugs</h1>
      {bugs.map((bug) => (
        <p key={bug.id} onClick={() => handleClick()}>
          {bug.name} {bug.type === "new" ? "new" : "fixed"}
        </p>
      ))}
    </>
  );
};

export default Bugs;
