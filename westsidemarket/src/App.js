import React from 'react';
import Vendor from './components/Vendor.js';

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
  componentDidMount(){
    this.fetchMarket()
    this.fetchComments()
  }
  render(){
    return(
      <div id='container'>
        <h1>My Marketplace: A Guide to the West Side Market</h1>
        {
          this.state.vendors.map((vendor, index) => (
            <Vendor user={this.state.user} vendor={vendor} key={index} comments={this.state.comments} handleCreate={this.handleCreate}/>
          ))
        }
      </div>
    )
  }
}

export default App;
