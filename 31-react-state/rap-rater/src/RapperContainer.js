// Steps to making a component
// import react
// making our class based component, it needs render

import React from 'react'
import RapperCard from './RapperCard'

class RapperContainer extends React.Component {
  // When dealing with state
  // We need to tell it the initial state
  // constructor() {
  //   super()
  //   this.state = {
  //       rappers: []
  //   }
  // }

  state = {
    rappers: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/rappers")
    .then(res => res.json())
    .then(rappersJSON => {
      // Once we have access to the rappers from our backend
      // We need to keep track of them

      // Once the fetch request has resolved, I need to change state
      this.setState({
        rappers: rappersJSON
      })

      // this.state = {
      //   rappers: rappersJSON
      // }
      // How to describe the FP way of thinking about React

    })
  }


  render(){
    return(
      <div>
        <h1>This is RapperContainer</h1>
        {this.state.rappers.map(rapper => <RapperCard
          name={rapper.name}
          happyImage={rapper.happyImage}
          sadImage={rapper.sadImage}/>)}
      </div>
    )
  }
}

export default RapperContainer
