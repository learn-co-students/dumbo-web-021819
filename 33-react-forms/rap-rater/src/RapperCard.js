import React, { Component } from 'react'

class RapperCard extends Component {

  // When writing state
  // we need initial state
  state = {
    clicked: false
  }

  handleClick = (event) => {
    // I want to change when I click
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    // Ternary Operator
    const imgSrc = this.state.clicked ? this.props.happyImage : this.props.sadImage
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img onClick={this.handleClick} alt={this.props.name} src={imgSrc}/>
      </div>
    )
  }
}

export default RapperCard
