import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomeContainer from './components/HomeContainer'
import WishlistContainer from './components/WishlistContainer'
import CartContainer from './components/CartContainer'
import ProfileContainer from './components/ProfileContainer'
import ProductContainer from './components/ProductContainer'
import './App.css';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{marginTop: '7em'}}>
        <Switch>
          <Route exact path='/'   component={HomeContainer} />
          <Route path='/products' component={ProductContainer} />
          <Route path='/wishlist' component={WishlistContainer} />
          <Route path='/cart'     component={CartContainer} />
          <Route path='/profile'  component={ProfileContainer} />
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}

export default Root;
