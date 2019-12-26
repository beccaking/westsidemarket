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
  show(){
    this.setState({
      show: !this.state.show
    })
  }
  render(){
  let comments = this.props.comments.filter(comment => comment.vendorid === this.props.vendor.id)
    return(
      <div key={this.props.index} className='vendor'>
        <h2 className='vendortitle' onClick={()=>{this.show()}}>{this.props.vendor.name}</h2>
        {
          this.state.show
          ? <div className ='vendorcontent'>
              <img className='vendorimg' src={this.props.vendor.image} alt={this.props.vendor.image}/>
              <h4>{this.props.vendor.description}</h4>
              <div className='commentsection'>
                <h4 className='comments'>Notes</h4>
                {
                  comments.map((comment, index) => (
                    <Comment user={this.props.user} comment={comment} key={index} handleDelete={this.props.handleDelete}handleUpdate={this.props.handleUpdate}/>
                  ))
                }
                {
                  this.props.user
                  ? <Form user={this.props.user} vendor={this.props.vendor} handleCreate={this.props.handleCreate}/>
                  : <span className='signindirect'>Sign in to leave a comment</span>
                }
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}

export default Vendor;
