import React from 'react'
import Contestants from './Contestants'
import { connect } from 'react-redux'

class MainContainer extends React.Component {

  increaseVote = (contestantId) => {
    this.setState({
      contestants: {
        ...this.state.contestants,
        [contestantId]: {
          ...this.state.contestants[contestantId],
          votes: this.state.contestants[contestantId]["votes"] + 1
        }
      }
    })
  }


  render() {
    console.log(this.props, "rendering......")
    return (
      <div>
        <Contestants
          increaseVote={this.increaseVote}
          decreaseVote={this.props.decreaseVote}
          contestants={this.props.contestants} />
        <h1> THANKS FOR VOTING </h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    contestants: state.contestants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decreaseVote: (contestantId) => dispatch({ type: "DECREASE_VOTE", payload: contestantId })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
