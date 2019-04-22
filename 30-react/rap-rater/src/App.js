import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CohortName from './CohortName'
import SecondCohortName from './SecondCohortName'
import Header from './Header'

class App extends Component {
  render(){
    const cohorts = [
      {
        name: "Hip Hip Array",
        startDate: "021819"
      }, {
        name: "Tom",
        startDate: "012819"
      }, {
        name: "\"Cheese\"",
        startDate: "121018"
      }, {
        name: "Straight Outta Terminal",
        startDate: "051418"
      }
    ]
    return (
      <div className="button">
        <Header />
        {cohorts.map(cohort => {
          return <CohortName name={cohort.name} startDate={cohort.startDate} />
        })}
        {/*<CohortName name="Hip Hip Array" startDate="021819"/>
        <CohortName name="Tom" startDate="012819" /> */}
      </div>
    )
  }
}



export default App;

// Why only one element to render
