// Steps to making a component
// import react
// making our class based component, it needs render

import React from 'react'
import RapperCard from './RapperCard'
import RapperForm from './RapperForm'
import RapperSearch from './RapperSearch'

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
    rappers: [],
    searchTerm: ""
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

  // We put submit function at Rapper container to
  // ensure we update THIS component's state
  handleSubmit = (e, rapper) => {
    e.preventDefault()
    console.log('Here is the value of rapper: ', rapper)
    // Directly Mutating State
    // this.state.rappers.push(rapper)
    const newRappers = [rapper, ...this.state.rappers]

    //
    // fetch("http://localhost:3005/rappers", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ id: 1, ...rapper, rating: 0})
    // })
    // .then(res => res.json())
    // .then(data => {
          this.setState({
            rappers: newRappers
          })
    // })

  }


  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }



  render(){
    return(
      <div>
        <h1>This is RapperContainer</h1>
        <RapperForm handleSubmit={this.handleSubmit} />
        <RapperSearch searchTerm={this.state.searchTerm} beef={this.handleSearchChange} />
        {this.state.rappers.filter(rapper => rapper.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map(rapper => <RapperCard
          name={rapper.name}
          happyImage={rapper.happyImage}
          sadImage={rapper.sadImage}/>)}
      </div>
    )
  }
}

export default RapperContainer
