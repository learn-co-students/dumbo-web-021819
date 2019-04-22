import React from 'react'

class CohortName extends React.Component {
  render() {
    console.log('Here are the props from CohortName', this.props.name)
    // CANNOT ASSIGN PROPS IN THE COMPONENT ITSELF
    // MUST COME FROM THE PARENT
    // this.props.nickname = "Cool Cats"
    return (
      <div>{this.props.name} - {this.props.startDate}</div>
    )
  }
}

export default CohortName
