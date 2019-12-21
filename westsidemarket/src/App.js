import React from 'react';

let baseUrl = 'https://westsidemarket-api.herokuapp.com';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: 'home',
      comments: [],
      vendors: []
    }
  }
  fetchMarket = () => {
    fetch(`${baseUrl}/market`)
    .then(data => data.json())
    .then(jData => {
      this.setState({vendors:jData})
    }).catch(error => console.log(error))
  }
  componentDidMount(){
    this.fetchMarket()
  }
  render(){
    return(
      <div id='container'>
        <h1>My Marketplace: A Guide to the West Side Market</h1>
        {
          this.state.vendors.map((vendor, index) => (
            <div key={index} className='vendor'>
              <h2>{vendor.name}</h2>
              <img src={vendor.image} alt={vendor.image}/>
              <h4>{vendor.description}</h4>
            </div>
          ))
        }
      </div>
    )
  }
}

export default App;
