import React from 'react';
import Comment from './Comment.js';
import Form from './Form.js';

class Vendor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  render(){
  let comments = this.props.comments.filter(comment => comment.vendorid === this.props.vendor.id)
    return(
      <div key={this.props.index} className='vendor'>
        <h2>{this.props.vendor.name}</h2>
        <img src={this.props.vendor.image} alt={this.props.vendor.image}/>
        <h4>{this.props.vendor.description}</h4>

        <div className='commentsection'>
          <h4>Comments</h4>
          {
            comments.map((comment, index) => (
              <Comment user={this.props.user} comment={comment} key={index} handleDelete={this.props.handleDelete}handleUpdate={this.props.handleUpdate}/>
            ))
          }
          <Form user={this.props.user} vendor={this.props.vendor} handleCreate={this.props.handleCreate}/>
        </div>
      </div>
    )
  }
}

export default Vendor;
