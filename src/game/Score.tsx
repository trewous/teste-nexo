import React from 'react'

interface ScoreProps {
  score: number
}

const Score = ({ score }: ScoreProps) => {
  return (
    <div>
      <h4>score</h4>
      <span>{score}</span>
    </div>
  )
}

export default Score
