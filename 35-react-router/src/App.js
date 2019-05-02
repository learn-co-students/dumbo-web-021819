import React, { Component } from 'react';
import './App.css';

import RapperContainer from './RapperContainer'
import Home from './Home'
import Error from './Error'

import { Route, Switch } from 'react-router-dom'


class App extends Component {
  render(){

    return (
      <div>
        <Switch>
          <Route path="/rappers" component={RapperContainer} />
          <Route path="/home" component={Home}/>
          <Route path="/" component={Error} />
        </Switch>
      </div>
    )
  }
}



export default App;
