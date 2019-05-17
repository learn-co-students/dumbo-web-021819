import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ProductList from './ProductList'

class CartContainer extends Component {

  render() {
    return (
      <Container>
        <header>
          <h1>Cart</h1>
        </header>
        {
          this.props.cart.length > 0 ?
            <ProductList products={this.props.cart} /> :
            <Segment fluid="true">
              <p>Nothing in your cart :(</p>
              <Link to="/products">Shop Now</Link>
            </Segment>
        }
        <Segment>
          Total:
          <span style={{fontWeight: 'bold'}}>
            ${(this.props.cart.reduce((accum, item) => accum + (item.price * item.quantity), 0) / 100).toFixed(2)}
          </span>
        </Segment>
      </Container>
    )
  }
}

const stateToProps = state => ({
  cart: state.cart
})

export default connect(stateToProps)(CartContainer)