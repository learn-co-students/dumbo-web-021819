import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'
import { connect } from 'react-redux'

import ProductList from './ProductList'

class ProductContainer extends Component {

  render() {
    // every reducer that has a case for 'LOGOUT_USER' will respond to this dispatch
    this.props.dispatch({ type: 'LOGOUT_USER'})
    return (
      <Container>
        <header>
          <h1>Products</h1>
        </header>

        <ProductList products={this.props.products} />
      </Container>
    )
  }
}

const stateToProps = state => {
  console.log(state)
  return { products: state.products }
}

export default connect(stateToProps, null)(ProductContainer)