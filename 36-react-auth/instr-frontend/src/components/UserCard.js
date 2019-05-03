import React from 'react'

import { Link } from 'react-router-dom'


const UserCard = (props) => {
  return (
    <div style={{border: "1px solid black", padding:"10px", margin:"10px"}}>
      <h1>{props.display_name} ({props.title})</h1>
      <p>{props.bio.substring(0, 140) + "..."}</p>
      <Link to={`/users/${props.id}`}>See more</Link>
    </div>
  )
}

export default UserCard
