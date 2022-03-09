import axios from 'axios'

export interface Player {
  name: string
}

const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchPlayer = async () => {
  const response = await axios.get<Player[]>(url)

  return response.data
}
