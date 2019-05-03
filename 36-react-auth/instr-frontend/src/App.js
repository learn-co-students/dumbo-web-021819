import React, { Fragment, Component } from 'react';
import {Route , Switch } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Error from './components/Error'
import Navbar from './components/Navbar'

import Signup from './containers/Signup'
import Login from './containers/Login'
import UserProfile from './containers/UserProfile'
import UsersContainer from './containers/UsersContainer'

class App extends Component {

  state = {
    currentUser: null
  }


  handleLogin = (credentials) => {
    // Considerations
    // - What are the steps we are going to need to have here?
    // - What parts of the app need to have a current user?
  }

  handleSignup = (credentials) => {
    // Considerations
    // - What are the steps we are going to need to have here?
    // - What parts of the app need to have a current user?
  }

  handleLogout = () => {
    // Considerations
    // - What are the steps we are going to need to have here?
  }


  render() {
    return (
      <Fragment>
        <Navbar currentUser={this.state.currentUser} />
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/users/:id" component={UserProfile} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}
export default App;
