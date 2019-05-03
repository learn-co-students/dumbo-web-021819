import React, { Fragment, Component } from 'react';
import {Route , Switch, withRouter } from 'react-router-dom'
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

  componentDidMount(){
    // We are using the componentDidMount to ensure that we can find the current
    // user upon the app loading. It is considered to have a user IF there is a
    // token inside of the localstorage.
    if(this.state.currentUser === null && localStorage.getItem("token") !== null){
        fetch("http://localhost:3005/current_user", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => res.json())
      .then(user => {
          this.setState({
            currentUser: user
          })
      })
    }
  }

  handleLogin = (event, credentials) => {
    event.preventDefault()
    // Considerations
    // - What are the steps we are going to need to have here?
    // - What parts of the app need to have a current user?

    fetch("http://localhost:3005/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(userJSON => {
      console.log('We received this from the backend', userJSON)
      localStorage.setItem('token', userJSON.jwt)
      this.setState({
        currentUser: userJSON.user
      }, () => this.props.history.push("/users"))
    })
  }

  handleSignup = (credentials) => {
    // Considerations
    // - What are the steps we are going to need to have here?
    // - What parts of the app need to have a current user?
  }

  handleLogout = () => {
    // Considerations
    // - What are the steps we are going to need to have here?
    localStorage.removeItem("token")
    this.setState({
      currentUser: null
    })
  }


  render() {
    return (
      <Fragment>
        <Navbar currentUser={this.state.currentUser} logout={this.handleLogout} />
        <main>
          <Switch>
            <Route path="/login" render={(routerProps) => <Login handleLogin={this.handleLogin}/>} />
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

// WithRouter Let's us access the history prop
export default withRouter(App);






///
