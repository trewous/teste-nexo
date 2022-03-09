import React, { useState, useEffect } from 'react'
import Score from './Score'
import GameButtons from './GameButtons'
import Button from './Button'
import './game.css'
import { getWinner } from './utils/getWinner'
import { getMachinePick } from './utils/getMachinePick'
import { fetchPlayer } from './Services/player.service'
import { Player } from './Services/player.service'

const Game = () => {
  const [score, setScore] = useState(0)
  const [myPick, setMyPick] = useState('')
  const [machinePick, setMachinePick] = useState('')
  const [machineChoosing, setMachineChoosing] = useState(false)
  const [haveWinner, setHaveWinner] = useState(false)
  const [winner, setWinner] = useState('')
  const [messageWinner, setMessageWinner] = useState('')
  const [player, setPlayer] = useState<Player>({ name: '' })

  const gameButtonClick = (pick: string) => {
    setHaveWinner(false)
    setMyPick(pick)
    setMachineChoosing(true)
    setTimeout(() => {
      setMachineChoosing(false)
      setHaveWinner(true)
    }, 500)
    setMachinePick(getMachinePick())
  }

  useEffect(() => {
    fetchPlayer().then((player) => setPlayer(player[0]))
  }, [])

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

  return (
    <div className="container">
      <h1>{`Olá, ${player.name}`}</h1>
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
      <div className="game-messages">
        {machineChoosing && myPick !== '' && <p>machine is choosing...</p>}
        {!machineChoosing && machinePick !== '' && (
          <p>{`machine selected ${machinePick}`}</p>
        )}
        {messageWinner !== '' && haveWinner && <h3>{messageWinner}</h3>}
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}

export default Game
