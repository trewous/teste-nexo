const regras = {
  pedra: { pedra: 'empate', papel: 'papel', tesoura: 'pedra' },
  papel: { papel: 'empate', pedra: 'papel', tesoura: 'tesoura' },
  tesoura: { tesoura: 'empate', papel: 'tesoura', pedra: 'pedra ' },
}

export const getWinner = (myPick: string, machinePick: string) => {
  let winner

  // if (myPick === 'pedra' && machinePick === 'tesoura') {
  //   winner = 'me'
  // } else if (myPick === 'papel' && machinePick === 'pedra') {
  //   winner = 'me'
  // } else if (myPick === 'tesoura' && machinePick === 'papel') {

  // }

  return winner
}
