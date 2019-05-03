import React, {Component} from 'react'


class Login extends Component {

  state = {
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="test@example.com" value={this.state.email} onChange={this.handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="hunter2" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login
