import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'',
      vendorid: '',
      content: ''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreate(this.state)
    this.setState({
      content: ''
    })
  }
  componentDidMount(){
    this.setState({
      username: this.props.user,
      vendorid: this.props.vendor.id
    })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea id='content' className='commentbox' placeholder='Leave a comment...' value={this.state.content} onChange={this.handleChange}></textarea>
        <input type='submit' value='Share'/>
      </form>
    )
  }
}

export default Form
