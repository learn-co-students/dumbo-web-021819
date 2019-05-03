import React, { Component } from 'react'

import UserCard from '../components/UserCard'

class UsersContainer extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/users")
    .then(res => res.json())
    .then(usersJSON => {
      this.setState({
        users: usersJSON
      })
    })
  }

  render() {
    let userCards = this.state.users.map((user,index) => {
      return <UserCard {...user} key={index}/>
    })
    return (
      <div>
        {userCards}
      </div>
    )
  }
}

export default UsersContainer
