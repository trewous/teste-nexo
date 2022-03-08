import React, { useState } from 'react'
import Score from './Score'
import GameButtons from './GameButtons'

const Game = () => {
  const [score, setScore] = useState(0)
  const [myPick, setMyPick] = useState('')
  const [machinePick, setMachinePick] = useState('')
  const [machineChoosing, setMachineChoosing] = useState(false)

  const machinePickMessage = `machine selected ${machinePick}`

  return (
    <div>
      <Score score={score} />
      <div>
        <GameButtons type="pedra" />
        <GameButtons type="papel" />
        <GameButtons type="tesoura" />
      </div>
      <div>
        {machineChoosing && myPick !== '' && <p>machine is choosing...</p>}
      </div>
    </div>
  )
}

export default Game
