import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ProfileContainer extends Component {

  render() {
    return (
      <Container>
        <header>
          <h1>Profile</h1>
        </header>
        <Segment>Coming Soon...</Segment>
      </Container>
    )
  }
}

const stateToProps = state => ({
  cart: state.cart
})

export default connect(stateToProps)(ProfileContainer)