import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Image } from 'semantic-ui-react'

const Navbar = () => {

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Link className="menu item header" to="/">
          <Image 
            size='mini' src={imgUrl} 
            style={{ marginRight: '1.5em', display: 'inline-block' }} />
          Hip Hip Array
        </Link>
        <Menu.Menu position='right'>
          <Link className="menu item" to="/products">Shop</Link>
          <Link className="menu item" to="/wishlist">Wishlist</Link>
          <Link className="menu item" to="/cart">Cart</Link>
          <Link className="menu item" to="/profile">Profile</Link>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

const imgUrl = "https://cdn.evbuc.com/images/48394057/258081453087/2/logo.png"

export default Navbar