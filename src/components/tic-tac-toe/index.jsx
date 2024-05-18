import React, { useEffect, useState } from 'react';
import './styles.css';

const WinMethod = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Square({ value, onclick }) {
  return (
    <button onClick={onclick} className="square">
      {value}
    </button>
  );
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(''));
  }

  function handleClick(CurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[CurrentSquare]) return;
    cpySquares[CurrentSquare] = isXTurn ? 'X' : 'O';
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function getWinner() {
    for (let i = 0; i < WinMethod.length; i++) {
      const [x, y, z] = WinMethod[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== '')) {
      setStatus('和局 ! 請重新開始');
    } else if (getWinner(squares)) {
      setStatus(`玩家${getWinner(squares)} 獲勝 !`);
    } else {
      setStatus(`當前玩家是 ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onclick={() => handleClick(0)} />
        <Square value={squares[1]} onclick={() => handleClick(1)} />
        <Square value={squares[2]} onclick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onclick={() => handleClick(3)} />
        <Square value={squares[4]} onclick={() => handleClick(4)} />
        <Square value={squares[5]} onclick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onclick={() => handleClick(6)} />
        <Square value={squares[7]} onclick={() => handleClick(7)} />
        <Square value={squares[8]} onclick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>重新開始</button>
    </div>
  );
};

export default TicTacToe;
