import React from 'react'
import './button.css';

function Button({ position, player, board, winner, setBox }) {

  return (
    <div className='button-container' onClick={() => setBox(position, player, board, winner)}>
      {board[position]}
    </div>
  )
}

export default Button;