import React from "react";

const BeyCard = (props) => {
  console.log('BeyCard props', props)
  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img onClick={() => { props.handleClick(props.bey) }} src={props.bey.img} alt={props.bey.name}/>
    </div>
  );
};

export default BeyCard;
