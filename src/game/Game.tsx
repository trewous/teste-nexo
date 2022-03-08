import React, { useState, useEffect } from 'react'
import Score from './Score'
import GameButtons from './GameButtons'
import { getWinner } from './utils/getWinner'
import { getMachinePick } from './utils/getMachinePick'

const Game = () => {
  const [score, setScore] = useState(0)
  const [myPick, setMyPick] = useState('')
  const [machinePick, setMachinePick] = useState('')
  const [machineChoosing, setMachineChoosing] = useState(false)
  const [winner, setWinner] = useState('')

  const machinePickMessage = `machine selected ${machinePick}`

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
      setWinner(getWinner(myPick, machinePick))
    }
  }, [myPick, machinePick])

  useEffect(() => {
    if (winner === 'me') {
      setScore(score + 1)
    }
  }, [winner])

  console.log(winner)

  return (
    <div>
      <Score score={score} />
      <div>
        <div onClick={() => gameButtonClick('pedra')}>
          <GameButtons type="pedra" />
        </div>
        <div onClick={() => gameButtonClick('papel')}>
          <GameButtons type="papel" />
        </div>
        <div onClick={() => gameButtonClick('tesoura')}>
          <GameButtons type="tesoura" />
        </div>
      </div>
      <div>
        {machineChoosing && myPick !== '' && <p>machine is choosing...</p>}
      </div>
    </div>
  )
}

export default Game
