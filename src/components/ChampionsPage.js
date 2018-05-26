import React from 'react'
import { getChampions } from '../utils/api'

class ChampionsPage extends React.Component {
  state = {
    champions: []
  }

  componentDidMount() {
    this.getChampions()
  }

  getChampions = async () => {
    const result = await getChampions()
    console.log(result)
  }
  render() {
    return (
      <div>
          ChampionsPage
      </div>
    )
  }
}

export default ChampionsPage
