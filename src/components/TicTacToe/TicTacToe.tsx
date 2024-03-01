import { useState } from "react";
import styles from "./TicTacToe.module.scss";

const TicTacToe = () => {
  const [isX, setIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const currentPlayer = isX ? "X" : "0";

  const calculateWinner = (squares: Array<number>) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  };

  const handleValue = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = isX ? "X" : "0";
    setSquares(newSquares);
    setIsX(!isX);
  };

  const isBoardFull = (squares: Array<number>) => {
    return squares.every((square) => square !== null);
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && isBoardFull(squares);

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    isDraw ? setIsX(true) : setIsX(!isX);
  };

  return (
    <div>
      <h2>5. Tic Tac Toe</h2>
      <div className={styles.board}>
        {squares.map((square, index) => (
          <button
            key={index}
            className={styles.square}
            onClick={() => {
              handleValue(index);
              calculateWinner(squares);
            }}
          >
            {square}
          </button>
        ))}
      </div>
      {winner ? (
        <p className={styles.message}> The winner is: {winner}</p>
      ) : isDraw ? (
        <p className={styles.message}>It's a draw! </p>
      ) : (
        <p className={styles.message}> Current player: {currentPlayer}</p>
      )}

      <button className={styles[`reset-button`]} onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
