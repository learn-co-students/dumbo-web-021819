import React from "react";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {

  render() {
    console.log('What are my props?', this.props)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.props.beys.map(bey => <BeyCard handleClick={this.props.handleClick} bey={bey} />)}
      </div>
    );
  }
}

export default BeyContainer;
