import { useState } from "react";
import produce from "immer";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleNameChange = () => {
    console.log("clicked");
    setGame({ ...game, player: { ...game.player, name: "Joe" } });
  };

  return (
    <div>
      {game.player.name}
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
};

export default Game;
