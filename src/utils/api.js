// api key: RGAPI-667e8863-61f8-4466-aa5c-c3cc3b40274f
import axios from 'axios'

const server = 'https://na1.api.riotgames.com'
const proxy = "https://cors-anywhere.herokuapp.com/"
const API_KEY = 'RGAPI-667e8863-61f8-4466-aa5c-c3cc3b40274f'


export const getChampions = async () => {
  const result = await axios(`${proxy}${server}/lol/static-data/v3/champions?api_key=${API_KEY}`)

  return result.data
}
