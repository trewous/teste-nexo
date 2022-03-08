export const getMachinePick = () => {
  const picks = ['pedra', 'papel', 'tesoura']

  return picks[Math.floor(Math.random() * picks.length)]
}
