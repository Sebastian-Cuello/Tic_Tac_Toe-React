import React, { useState } from 'react';
import './board.css';
import { Button } from '../../components/';

function Board() {

  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [board, setBoard] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('O');
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState({
    X: 0,
    O: 0
  });

  const setTurn = (player) => {
    if(player === 'O'){
      setPlayer('X');
    } else {
      setPlayer('O');
    }
  };

  const restart = () => {
    setBoard(Array(9).fill(''));
    setWinner('');
  }

  const updateScore = (player) => {
    const auxScore = {...score}
    auxScore[player] = auxScore[player] + 1;
    setScore(auxScore);
  }

  const checkWinner = (player, board, winner) => {
    if(board.find(item => item === '') === undefined && winner === ''){
      setWinner('Draw');
      setTimeout(restart, 2000);
    }
    for(let i = 0; i < combination.length; i++){
      const [a, b, c] = combination[i];
      if(board[a] === player && board[b] === player && board[c] === player){
        setWinner(player);
        updateScore(player);
        setTimeout(restart, 2000);
      }
    }
    if(winner === ''){
      setTurn(player);
    }
  };

  const setBox = (position, player, board, winner) => {
    if(board[position] === '' && winner === ''){
      const auxBoard = [...board];
      auxBoard[position] = player;
      setBoard(auxBoard);
      checkWinner(player, auxBoard, winner);
    };
  };

  return (
    <div className='board-container'>
        <div className="board-container__row">
          <Button position={0} player={player} board={board} setBox={setBox} winner={winner}/>
          <Button position={1} player={player} board={board} setBox={setBox} winner={winner}/>
          <Button position={2} player={player} board={board} setBox={setBox} winner={winner}/>
        </div>
        <div className="board-container__row">
          <Button position={3} player={player} board={board} setBox={setBox} winner={winner}/>
          <Button position={4} player={player} board={board} setBox={setBox} winner={winner}/>
          <Button position={5} player={player} board={board} setBox={setBox} winner={winner}/>
        </div>
        <div className="board-container__row">
          <Button position={6} player={player} board={board} setBox={setBox} winner={winner}/>
          <Button position={7} player={player} board={board} setBox={setBox} winner={winner}/>
          <Button position={8} player={player} board={board} setBox={setBox} winner={winner}/>
        </div>
        <div className='board-container__points'>
          <div className='board-container__points_score'>
            <strong>X|{score.X} - </strong>
            <strong>O|{score.O}</strong>
          </div>
          {winner !== '' ? 
            <div id='board-container__points_winnerText'>
            <strong>The winner is: {winner}</strong>
          </div> : '' }
        </div>
    </div>
  )
}

export default Board;