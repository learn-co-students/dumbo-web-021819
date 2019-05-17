import React from 'react'
import { Card, Image, Menu } from 'semantic-ui-react';
import { addItemToWishlist, removeItemFromWishlist, addItemtoCart } from '../redux/actions'

import { connect } from 'react-redux'

const ProductCard = props => (
  <Card style={props.style}>
    <Image src={props.product.image} wrapped ui={false} 
      style={{ display: 'flex', minHeight: 290, flexDirection: 'column', justifyContent: 'center' }} />
    <Card.Content>
      <Card.Header>{props.product.name}</Card.Header>
      <Card.Description>
        {props.product.description} | &nbsp;
        <span style={{color: 'green',fontWeight: 'bold'}}>${(props.product.price / 100).toFixed(2)}</span>
        { props.product.quantity && <p>{props.product.quantity}</p>}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Menu widths={2}>
      {
        props.wishlist.find(item => item.id === props.product.id) ?
          <Menu.Item as='a' onClick={() => props.removeItemFromWishlist(props.product)}>
            Wishlisted
          </Menu.Item> :
          <Menu.Item as='a' onClick={() => props.addItemToWishlist(props.product)}>
            Wishlist
          </Menu.Item>
      }
      <Menu.Item as='a' onClick={() => props.addItemtoCart(props.product)}>
        Add to Cart
      </Menu.Item>
    </Menu>
    </Card.Content>
  </Card>
)

ProductCard.defaultProps = {
  name: 'Name',
  description: 'description',
  price: 0,
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PlaceholderLC.png/480px-PlaceholderLC.png'
}

const actionToProps = dispatch => ({
  addItemToWishlist: item => dispatch(addItemToWishlist(item)),
  removeItemFromWishlist: item => dispatch(removeItemFromWishlist(item)),
  addItemtoCart: item => dispatch(addItemtoCart(item))
})

const stateToProps = state => {
  console.log(state, 'inside product card')
  return { wishlist: state.wishlist }
}

export default connect(stateToProps, actionToProps)(ProductCard)