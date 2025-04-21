import { useState, useEffect } from "react";
import Square from "./Square";
import "./styles.css";

export default function App() {
  const [point, setPoint] = useState({
    player1: [],
    player2: [],
  });
  const [count, setCount] = useState(1);
  const [win, setWin] = useState(null);

  function onSquareClick(arrItem) {
    if (count % 2 === 0) {
      point.player2.push(arrItem);
      setPoint(point);
    } else {
      point.player1.push(arrItem);
      setPoint(point);
    }
    setCount(count + 1);
  }

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const winningArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  function checkWin(playerMoves) {
    return winningArray.some((combination) =>
      combination.every((num) => playerMoves.includes(num))
    );
  }

  useEffect(() => {
    const player1Wins = checkWin(point.player1);
    const player2Wins = checkWin(point.player2);
    console.log("player1", player1Wins, "player2", player2Wins);
    if (player1Wins) {
      setWin("Player1");
    } else if (player2Wins) {
      setWin("Player2");
    }
    return () => {
      setWin(null);
    };
  }, [count]);

  return (
    <div>
      <div className="App">
        {array.map((arrItem, index) => {
          return (
            <Square
              index={index}
              arrItem={arrItem}
              count={count}
              onSquareClick={onSquareClick}
            />
          );
        })}
      </div>
      {win !== null && <h1>{win} Wins!</h1>}
    </div>
  );
}
