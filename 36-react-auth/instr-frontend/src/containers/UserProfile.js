import React, {Component} from 'react'

class UserProfile extends Component {

  state = {
    profile: {}
  }

  componentDidMount(){
    fetch(`http://localhost:3005/users/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(userData => {
      console.log('from userprofile: ', userData)
      this.setState({
        profile: userData
      })
    })
  }

  render() {
    const profile = this.state.profile
    return (
      <div style={{ padding:"10px", margin:"10px"}}>
        <h1>{profile.display_name} ({profile.title})</h1>
        <p>You can contact me at <a href={profile.email}>{profile.email}</a></p>
        <p>{profile.bio}</p>
      </div>
    )
  }
}

export default UserProfile
