import React from 'react'
import {connect} from 'react-redux';


function ContestantCard(props) {
  // console.log(props);
  const { contestant } = props
  // console.log(props);
  const swapImage = () => {
    if (contestant.votes > 4) {
      return "https://data.whicdn.com/images/173918733/large.jpg"
    } else if (contestant.votes < -4) {
      return "https://media2.giphy.com/media/sw7KSBKL3yme4/480w_s.jpg"
        } else {
      return contestant.image
    }
  }

  return (
    <div className="card">
      <h2>Queen {contestant.name}</h2>
      <p>Votes: {contestant.votes}</p>
      <img alt={contestant.name} src={swapImage()} />
      <br />
      <button onClick={() => {
        props.increaseVote(contestant.id)
      }}>
        Vote
      </button>
      <button onClick={() => props.decreaseVote(contestant.id) }>
        Downvote
      </button>

    </div>
  )
}






// console.log(connect);

const mapDispatchToProps = (dispatch) => {
  return {
    increaseVote: (id) => dispatch({ type: "INCREASE_VOTE", payload: id }),
    decreaseVote: (id) => dispatch({ type: "DECREASE_VOTE", payload: id })
  }
}

export default connect(null, mapDispatchToProps)(ContestantCard)









//
