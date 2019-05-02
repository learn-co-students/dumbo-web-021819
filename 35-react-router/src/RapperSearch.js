import React from 'react'


const RapperSearch = (props) =>{
  console.log(props)
  return (
    <input value={props.searchTerm} onChange={props.beef}/>
  )
}

export default RapperSearch
