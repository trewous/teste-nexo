import React, { useState, useEffect } from 'react'
import Score from './Score'
import GameButtons from './GameButtons'
import './game.css'
import { getWinner } from './utils/getWinner'
import { getMachinePick } from './utils/getMachinePick'

const Game = () => {
  const [score, setScore] = useState(0)
  const [myPick, setMyPick] = useState('')
  const [machinePick, setMachinePick] = useState('')
  const [machineChoosing, setMachineChoosing] = useState(false)
  const [winner, setWinner] = useState('')
  const [messageWinner, setMessageWinner] = useState('')

  const gameButtonClick = (pick: string) => {
    setMyPick(pick)
    setMachineChoosing(true)
    setTimeout(() => {
      setMachineChoosing(false)
    }, 500)
    setMachinePick(getMachinePick())
  }

  useEffect(() => {
    if (myPick !== '' && machinePick !== '') {
      const resultWinner = getWinner(myPick, machinePick)
      setWinner(resultWinner)
    }
  }, [myPick, machinePick])

  useEffect(() => {
    if (winner === 'me') {
      setScore(score + 1)
      setMessageWinner('you win')
    } else if (winner === 'machine') {
      setMessageWinner('you lose')
    } else if (winner === 'empate') {
      setMessageWinner('tie')
    }
  }, [winner])

  const resetGame = () => {
    window.location.reload()
  }

  console.log(winner)

  return (
    <div className="container">
      <Score score={score} />
      <div className="buttons-container">
        <div onClick={() => gameButtonClick('pedra')}>
          <GameButtons type="pedra" />
        </div>
        <div onClick={() => gameButtonClick('papel')}>
          <GameButtons type="papel" />
        </div>
        <div className="break"></div>
        <div onClick={() => gameButtonClick('tesoura')}>
          <GameButtons type="tesoura" />
        </div>
      </div>
      <div>
        {machineChoosing && myPick !== '' && <p>machine is choosing...</p>}
        {!machineChoosing && machinePick !== '' && (
          <p>{`machine selected ${machinePick}`}</p>
        )}
        {messageWinner !== '' && <h3>{messageWinner}</h3>}
      </div>
      <div>
        <button onClick={() => resetGame()}>play again</button>
      </div>
    </div>
  )
}

export default Game
