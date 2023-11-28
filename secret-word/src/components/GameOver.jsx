import React from 'react'
import './css/GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div className='game-over'>
      <h1>Game Over</h1>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver