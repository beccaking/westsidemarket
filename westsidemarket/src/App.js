import React from 'react';
import Vendor from './components/Vendor.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';

let baseUrl = 'https://westsidemarket-api.herokuapp.com';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: 'home',
      comments: [],
      vendors: [],
      user: 'Becca'
    }
  }
  handleUpdate = (updateData) => {
    fetch(`${baseUrl}/comments/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept' : 'applications/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(updatedComment => {
      this.fetchComments()
    }).catch(error=>console.log(error))
  }
  handleDelete = (id) => {
    fetch(`${baseUrl}/comments/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(json => {
      this.setState(prevState => {
        const comments = prevState.comments.filter(comment=> comment.id !== id)
        return {comments}
      })
    }).catch(error=> console.log(error))
  }
  handleSignup = (userInfo) => {
    fetch(`${baseUrl}/users`, {
      body: JSON.stringify(userInfo),
      method: 'POST',
      headers: {
        'Accept' : 'applications/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(created => {
      return created.json()
    }).then(jsonedUsername => {
      this.setState({
        user: jsonedUsername
      })
    }).catch(error => console.log(error))
    console.log(this.state);
  }
  handleCreate = (comment) => {
    fetch(`${baseUrl}/comments`, {
      body: JSON.stringify(comment),
      method: 'POST',
      headers: {
        'Accept' : 'applications/json, text/plain, */*',
        'Content-Type':'application/json'
      }
    }).then(created => {
      return created.json()
    }).then(jsonedComment => {
      this.setState(prevState => {
        prevState.comments = jsonedComment
        return { comments: prevState.comments }
      })
    }).catch(error=>console.log(error))
  }
  fetchMarket = () => {
    fetch(`${baseUrl}/market`)
    .then(data => data.json())
    .then(jData => {
      this.setState({vendors:jData})
    }).catch(error => console.log(error))
  }
  fetchComments = () => {
    fetch(`${baseUrl}/comments`)
    .then(data => data.json())
    .then(jData => {
      this.setState({comments:jData})
    }).catch(error => console.log(error))
  }
  fetchSession = () => {
    fetch(`${baseUrl}/sessions`)
    .then(data => data.json())
    .then(jData => {
      this.setState({user: jData})
    }).catch(error=>console.log(error))
  }
  componentDidMount(){
    this.fetchMarket()
    this.fetchComments()
    this.fetchSession()
  }
  render(){
    return(
      <div id='container'>
        <h1>My Marketplace: A Guide to the West Side Market</h1>
        <img className='map' src='https://i.imgur.com/fC6YP1U.png'/>
        {
          this.state.user
          ? null
          : <div className='signuplogin'>
              <Signup handleSignup={this.handleSignup}/><Login />
            </div>
        }
        {
          this.state.vendors.map((vendor, index) => (
            <Vendor user={this.state.user} vendor={vendor} key={index} comments={this.state.comments} handleCreate={this.handleCreate} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
          ))
        }
      </div>
    )
  }
}

export default App;
