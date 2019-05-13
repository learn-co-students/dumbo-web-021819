import React from 'react'
import WizardCard from './WizardCard'
import { connect } from 'react-redux'

class WizardDisplay extends React.Component{

  render(){
    // console.log("WizardDisplay Props", this.props);
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {

            this.props.wizards.map(wizardObject => (
              <WizardCard
                key={wizardObject.name}
                wizard={wizardObject}
              />)
            )

          }
        </ul>
      </div>
    )
  }
}

// Return value will get merged into props
const mapStateToProps = (state) => {
  return {
    wizards: state.wizards
  }
}


const someFunction = connect(mapStateToProps)
const someComponent = someFunction(WizardDisplay)

export default someComponent

















//
