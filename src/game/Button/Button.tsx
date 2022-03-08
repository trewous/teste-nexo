import React from 'react'
import './button.css'

const Button = () => {
  const resetGame = () => {
    window.location.reload()
  }

  return (
    <button className="restart-button" onClick={() => resetGame()}>
      play again
    </button>
  )
}

export default Button
