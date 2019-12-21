import React from 'react';

class Comment extends React.Component{
  constructor(){
    super()
    this.state = {
      username: '',
      vendorid: '',
      content: '',
      id: '',
      show: false
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleUpdate(this.state)
    this.setState({
      show: false
    })
  }
  show(){
    this.setState({
      show: !this.state.show
    })
  }
  componentDidMount(){
    this.setState({
      username: this.props.comment.username,
      vendorid: this.props.comment.vendorid,
      content: this.props.comment.content,
      id: this.props.comment.id
    })
  }
  render(){
    return(
      <div className='comment'>
        <h4>{this.props.comment.username}</h4>
        <span>{this.props.comment.commentdate}</span>
        <p>{this.props.comment.content}</p>
        {
          this.props.comment.username === this.props.user
          ? <div className='editdelete'>
              <button onClick={()=>{this.props.handleDelete(this.props.comment.id)}}>Delete</button>
              <button onClick={()=>{this.show()}}>Edit</button>
            </div>
          : null
        }
        {
          this.state.show
          ? <form onSubmit={this.handleSubmit}>
              <textarea id='content' value={this.state.content} onChange={this.handleChange}></textarea>
              <input type='submit' value='Confirm Change'/>
            </form>
          : null
        }
      </div>
    )
  }
}

export default Comment;
