import { useState } from "react";
import produce from "immer";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: "scroll", type: "new" },
    { id: 2, name: "navigation", type: "new" },
  ]);

  const handleClick = () => {
    console.log("clicked");
    // setBugs(
    //   bugs.map((bug) => (bug.id === 1 ? { ...bug, type: "fixed" } : bug))
    // );

    // // Passing anon fn
    // setBugs((state) => {
    //   return state.map((bug) =>
    //     bug.id === 1 ? { ...bug, type: "fixed" } : bug
    //   );
    // });

    // Immer
    setBugs(
      produce((draft: any) => {
        const bug = draft.find((bug: any) => bug.id === 1);
        if (bug) {
          bug.type = "fixed";
        }
      })
    );
  };

  return (
    <>
      <h1>Bugs</h1>
      {bugs.map((bug) => (
        <p key={bug.id} onClick={() => handleClick()}>
          {bug.name} {bug.type === "new" ? "New" : "Fixed"}
        </p>
      ))}
    </>
  );
};

export default Bugs;
