import React from 'react'
import './score.css'

interface ScoreProps {
  score: number
}

const Score = ({ score }: ScoreProps) => {
  return (
    <div className="score-container">
      <h4 className="score-title">score</h4>
      <span className="score-number">{score}</span>
    </div>
  )
}

export default Score
