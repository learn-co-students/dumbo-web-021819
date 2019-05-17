import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ProductList from './ProductList'

class WishlistContainer extends Component {

  render() {
    return (
      <Container>
        <header>
          <h1>Wishlist</h1>
        </header>

        {
          this.props.wishlist.length > 0 ? 
            <ProductList products={this.props.wishlist} /> :
            <Segment fluid="true">
              <p>Nothing in your wishlist :(</p>
              <Link to="/products">Shop Now</Link>
            </Segment>
        }
      </Container>
    )
  }
}

const stateToProps = state => ({
  wishlist: state.wishlist
})

export default connect(stateToProps)(WishlistContainer)