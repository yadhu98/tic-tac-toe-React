import { useState } from "react";

export default function Square({ arrItem, onSquareClick, index, count }) {
  const [clicked, setClicked] = useState(false);
  const [player, setPlayer] = useState(null);

  const handleClick = () => {
    if (!clicked) {
      onSquareClick(arrItem);
      setClicked(true);
      setPlayer(count % 2 === 0 ? "player2" : "player1");
    }
  };

  const getColor = () => {
    if (player === "player1") return "red";
    if (player === "player2") return "blue";
    return "white"; // default color
  };

  return (
    <div
      id="square"
      style={{
        backgroundColor: getColor(),
      }}
      onClick={() => {
        handleClick();
      }}
    >
      <div>{arrItem}</div>
    </div>
  );
}
