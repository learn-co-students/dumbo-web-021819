import React, {Component} from 'react'


class RapperCard extends Component {
  state = {
    clicked: false
  }

  handleClick = (event) => {
    // I want to change the state of my card

    this.setState({
      clicked: !this.state.clicked
    })
  }


  render(){
    const { happyImage, sadImage, name } = this.props.rapper
    return (
      <div>
        <h2>{name}</h2>
        <img alt={name} onClick={this.handleClick} src={this.state.clicked ? happyImage : sadImage}/>
      </div>
    )
  }
}

export default RapperCard
