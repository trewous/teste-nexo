const regras: Regras = {
  pedra: { pedra: 'empate', papel: 'papel', tesoura: 'pedra' },
  papel: { papel: 'empate', pedra: 'papel', tesoura: 'tesoura' },
  tesoura: { tesoura: 'empate', papel: 'tesoura', pedra: 'pedra ' },
}

interface Pick {
  [key: string]: {}
}

interface Regras {
  [key: string]: Pick
}

export const getWinner = (myPick: string, machinePick: string) => {
  let winner

  // if (myPick === 'pedra' && machinePick === 'tesoura') {
  //   winner = 'me'
  // } else if (myPick === 'papel' && machinePick === 'pedra') {
  //   winner = 'me'
  // } else if (myPick === 'tesoura' && machinePick === 'papel') {

  // }

  winner = regras[myPick][machinePick]

  return winner === myPick
    ? 'me'
    : winner === machinePick
    ? 'machine'
    : 'empate'
}
