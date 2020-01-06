import React from 'react';
import Comment from './Comment.js';
import Form from './Form.js';

class Vendor extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  let comments = this.props.comments.filter(comment => comment.vendorid === this.props.vendor[0].id)
    return(
      <div className='vendor'>
        <h2 className='vendortitle'>{this.props.vendor[0].name}</h2>
        <div className ='vendorcontent'>
              <img className='vendorimg' src={this.props.vendor[0].image} alt={this.props.vendor[0].image}/>
              <h4 id='description'>{this.props.vendor[0].description}</h4>
              <div className='commentsection'>
                {
                  comments.map((comment, index) => (
                    <Comment user={this.props.user} comment={comment} key={index} handleDelete={this.props.handleDelete}handleUpdate={this.props.handleUpdate}/>
                  ))
                }
                {
                  this.props.user
                  ? <Form user={this.props.user} vendor={this.props.vendor[0]} handleCreate={this.props.handleCreate}/>
                  : <span className='signindirect'>Sign in to leave a comment</span>
                }
              </div>
            </div>
      </div>
    )
  }
}

export default Vendor;
