import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addWizard } from '../Redux/actions'

class WizardForm extends Component {

  state ={
    name: "",
    house: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Submitted!");
    let newWizardObject = this.state
    this.props.addWizard(newWizardObject)
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
        <label>
          House
        </label>
          <input type="text" name="house" onChange={this.handleChange} value={this.state.house}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" onChange={this.handleChange} value={this.state.redux}/>
        <input type="submit"/>
      </form>
    );
  }

}

// Return value will get merged into props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWizard: (newWizardObject) => {dispatch( {type: "ADD_WIZARD", payload: newWizardObject} )}
//   }
// }

// const mapStateToProps = (state) => {
//   return state
// }

export default connect(null, { addWizard })(WizardForm);
















//
