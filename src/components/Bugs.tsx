import { useState } from "react";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: "scroll", type: "new" },
    { id: 2, name: "navigation", type: "new" },
  ]);

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.name} {bug.type === "new" ? "new" : "fixed"}
        </p>
      ))}
    </div>
  );
};

export default Bugs;
