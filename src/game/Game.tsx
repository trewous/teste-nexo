import React, { useState } from 'react'
import Score from './Score'

const Game = () => {
  const [score, setScore] = useState(0)

  return (
    <div>
      <Score score={score} />
    </div>
  )
}

export default Game
