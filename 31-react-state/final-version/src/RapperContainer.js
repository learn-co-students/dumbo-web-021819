import React from 'react'
import RapperCard from './RapperCard'

class RapperContainer extends React.Component {

  state = {
  rappers: []
}

  componentDidMount(){
    fetch('http://localhost:3005/rappers')
    .then(res => res.json())
    .then(rappers => {
      this.setState({
        rappers: rappers
      })
    })
  }

  render() {
    const rapCards = this.state.rappers.map(rapper => <RapperCard rapper={rapper} />)
    return (
      <div>
        {rapCards}
      </div>
    )
  }
}

export default RapperContainer
