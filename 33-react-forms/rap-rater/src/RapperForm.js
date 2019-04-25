import React from 'react'

// const RapperForm = (props) => {
//
// }

class RapperForm extends React.Component {
  state = {
    name: "",
    happyImage: "",
    sadImage: ""
  }

  handleChange = (event) => {
    // console.log(event)
    // console.log(event.target.value)
    // if(event.target.name === "name"){
    //   this.setState({
    //     name: event.target.value
    //   })
    // } else if(event.target.name === "happyImage") {
    //   this.setState({
    //     happyImage: event.target.value
    //   })
    // } else if(event.target.name === "sadImage"){
    //   this.setState({
    //     sadImage: event.target.value
    //   })
    // }
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
        <label>Name</label>
        <input onChange={this.handleChange} name="name" value={this.state.name}/>
        <label>happyImage</label>
        <input onChange={this.handleChange} name="happyImage" value={this.state.happyImage}/>
        <label>sadImage</label>
        <input onChange={this.handleChange} name="sadImage" value={this.state.sadImage}/>
        <input type="submit"/>
      </form>
    )
  }
}


export default RapperForm
