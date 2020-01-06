import React from 'react';

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      show: false
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  show(){
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    return(
      <div>
      <button id='login' onClick={()=>{this.show()}}>Log In</button>
      {
        this.state.show
        ? <div id='loginthings'>
          <form onSubmit={()=>{this.props.setuser(this.state.username)}}>
            <input type='text' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
            <br/>
            <input type='password' id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
            <br/>
            <input id='submit' type='submit'/>
          </form>
          </div>
        : null
      }
      </div>
    )
  }
}

export default Login
