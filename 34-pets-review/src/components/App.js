import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    // this is what => does this
    // this.handleAdoption = this.handleAdoption.bind(this)
  }

    componentDidMount(){
      fetch('/api/pets')
      .then(res => res.json())
      .then(petData => {

        this.setState({
          pets: petData
        })
      })
    }

  // Execution Context => This
   handleAdoption = (clickedPet) => {
     console.log('What is the value of `this`: ', this)
     console.log('here we have our adoption for this pet: ', clickedPet)
     // Change the state
     // Change the isAdopted for the particularly clicked on pet

     // I want to update the array of pets
     // How to make a new copy of an array
     let newPetsArray = [...this.state.pets]
     newPetsArray = newPetsArray.map(pet => {
       if(pet.id === clickedPet.id) {
         // update that item
         return {...pet, isAdopted: true}
       } else {
         // return back the old pet
         return pet
       }
     })

     this.setState({
       pets: newPetsArray
     })


  }

  onChangeType = (event) => {
    console.log('This is the value:', event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }


  handleFindPets = () => {
    // if(this.state.filters.type === 'all') {
    //
    // } else if(this.state.filters.type === 'dog') {
    //
    // }else if(this.state.filters.type === 'cat') {
    //
    // } else if(this.state.filters.type === 'micropig') {
    //
    // }
    if(this.state.filters.type === 'all') {
      fetch("/api/pets")
      .then(res => res.json())
      .then(petData => {
        this.setState({
          pets: petData
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(petData => {
        this.setState({
          pets: petData
        })
      })
    }
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleFindPets={this.handleFindPets} type={this.state.filters.type} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser handleAdoption={this.handleAdoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
