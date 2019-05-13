import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/actions'

class Header extends Component {

  handleClick = () => {
    this.props.addWizard({
      name: "Hip Hip Array",
      house: "Flatiron",
      redux: "Wizards"
    })
  }

  render() {
    return (
      <header className="App-header">
        <button onClick={this.handleClick}>Click On Me to add a Wizard!</button>
        <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
        <p>Harry Potter of Redux</p>
      </header>
    );
  }

}

export default connect(null, {addWizard})(Header);
