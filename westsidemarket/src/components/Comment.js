import React from 'react';

class Comment extends React.Component{
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
            </div>
          : null
        }
      </div>
    )
  }
}

export default Comment;
