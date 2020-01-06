import React from 'react';

class Signup extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      show: false
    }
  }
  show(){
    this.setState({
      show: !this.state.show
    })
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  render(){
    return(
      <div>
      <button id='signup' onClick={()=>{this.show()}}>Sign Up</button>
      {
        this.state.show
        ? <form onSubmit={()=>{this.props.setuser(this.state.username)}}>
            <input type='text' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
            <br/>
            <input type='text' id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
            <br/>
            <input id='submit' type='submit'/>
          </form>
        : null
      }
      </div>
    )
  }
}

export default Signup
