import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends Component {

    state = {
      beys: []
    }

    componentDidMount() {
      fetch("http://localhost:4000/beys")
      .then(res => res.json())
      .then(beysJSON => {
        // console.log(beysJSON)

        this.setState({
          beys: beysJSON
        })
      })
    }

    // WON'T WORK
    // handleClick(){
    //   console.log('It was clicked')
    // }
    handleClick = (clickedBey) => {
      console.log('When clicked, the value I get back is?', clickedBey)

      // Breaks React convention of no mutating state
      // // Making a copy of state
      // let newBeys = [...this.state.beys]
      // // Finding the bey to update
      // let thisBey = newBeys.find(bey => bey.id === clickedBey.id)
      // // Changing its value of favorite
      // thisBey.favorite = !thisBey.favorite
      // // Updating state with the new beys
      // this.setState({
      //   beys: newBeys
      // })

      // Persists the data
      // fetch("http://localhost:4000/beys/" + clickedBey.id , {
      //   method: "PATCH",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     favorite: !clickedBey.favorite
      //   })
      // })

      const newBeys = this.state.beys.map(bey => {
        if(bey.id === clickedBey.id){
          return {...bey, favorite: true}
        } else  {
          return bey
        }
      })
      this.setState({
        beys: newBeys
      })


    }

    handleRemove = (clickedBey) => {
      const newBeys = this.state.beys.map(bey => {
        if(bey.id === clickedBey.id){
          return {...bey, favorite: false}
        } else  {
          return bey
        }
      })
      this.setState({
        beys: newBeys
      })


    }


    allFavorited = () => {
        // Through State and find out which one are favorite
        return this.state.beys.filter(bey => bey.favorite === true)
    }

  render(){
      return (
      <div className="container">
        <BeyContainer handleClick={this.handleClick} beys={this.state.beys}/>
        <Favorites beef={this.handleRemove} favoritedBeys={this.allFavorited()} />
      </div>
    );
  }
};

export default App;
