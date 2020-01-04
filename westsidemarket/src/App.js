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
        <div id='interactive'>
          <div id='produce-north'>
            <div id='top-row'>
              <div className='station left one'>Marina's Produce</div>
              <div className='station right one'></div>
              <div className='station left two'>Tony's Produce</div>
              <div className='station right two'></div>
              <div className='station left three'>Sunshine Produce</div>
              <div className='station right three'></div>
              <div className='station left four'>A-1 Quality Produce</div>
              <div className='station right four'></div>
              <div className='station left five'>Habib's Produce</div>
              <div className='station right five'></div>
              <div className='station six'><div className='sideways'>Angelo's Produce</div></div>
              <div className='doorway'></div>
              <div className='station seven'><div className='sideways'>Jonathan's Produce</div></div>
              <div className='station left eight'>Michael's Produce</div>
              <div className='station right eight'></div>
              <div className='station left nine'>Bacha Produce</div>
              <div className='station right nine'></div>
              <div className='station left'></div>
              <div className='station right'></div>
              <div className='station left ten'>Harb Produce</div>
              <div className='station right ten'></div>
              <div className='station left eleven'>Mena's Produce</div>
              <div className='station right eleven'></div>
              <div className='station left twelve'>Calabrese Produce</div>
              <div className='station middle twelve'></div>
              <div className='station right twelve'></div>
              <div className='station left thirteen'>Luca's Produce</div>
              <div className='station middle thirteen'></div>
              <div className='station right thirteen'></div>
            </div>
            <div id='bottom-row'>
              <div className='station left one'>Marina's Produce</div>
              <div className='station right one'></div>
              <div className='station fourteen'><div className='sideways'>Mark's Produce</div></div>
              <div className='doorway'></div>
              <div className='station fifteen'><div className='sideways'>Kilani's Produce</div></div>
              <div className='station left fourteen'>Mark's Produce</div>
              <div className='station right fourteen'></div>
              <div className='station left fifteen'>Tito's Produce</div>
              <div className='station right fifteen'></div>
              <div className='station left sixteen'>Shadi Produce</div>
              <div className='station middle sixteen'></div>
              <div className='station right sixteen'></div>
              <div className='doorway'></div>
              <div className='station seventeen'><div className='sideways'>King Produce</div></div>
              <div className='station left eighteen'>Iskander's Produce</div>
              <div className='station right eighteen'></div>
              <div className='station left nineteen'>Brothers Produce</div>
              <div className='station middle nineteen'></div>
              <div className='station middle nineteen'></div>
              <div className='station middle nineteen'></div>
              <div className='station right nineteen'></div>
              <div className='doorway'></div>
              <div className='station left twenty'>Boutros Brothers Produce</div>
              <div className='station middle twenty'></div>
              <div className='station right twenty'></div>
              <div className='station left twentyone'>Christiano's Produce</div>
              <div className='station right twentyone'></div>
              <div className='station left twentytwo'>Miriam's Produce</div>
              <div className='station right twentytwo'></div>
              <div className='station left twentythree'>Ehab's Produce</div>
              <div className='station right twentythree'></div>
            </div>
          </div>
          <div id='produce-east'>
            <div id='left-row'>
              <div className='stand top twentyfour'>Basketeria Produce</div>
              <div className='stand mid twentyfour'></div>
              <div className='stand bottom twentyfour'></div>
              <div className='stand twentyfive'>Dave's Produce</div>
              <div className='stand top twentysix'>A&J Produce</div>
              <div className='stand bottom twentysix'></div>
              <div className='stand twentyseven'>Fritz's Produce</div>
              <div className='stand twentyeight'>That's Nuts</div>
              <div className='stand top'></div>
              <div className='stand bottom'></div>
              <div className='stand top twentynine'>Rooted in Cleveland</div>
              <div className='stand bottom twentynine'></div>
            </div>
            <div id='right-row'>
              <div className='stand top thirty'>Greg's Produce</div>
              <div className='stand bottom thirty'></div>
              <div className='stand top thirtyone'>Decaro's Produce</div>
              <div className='stand bottom thirtyone'></div>
              <div className='stand thirtytwo'>Ohio City Flowers</div>
              <div className='stand'></div>
              <div className='stand thirtythree'>Jorgensen's Apiary</div>
              <div className='stand thirtyfour'>Maple Valley Sugarbush</div>
              <div className='stand top'></div>
              <div className='stand bottom'></div>
              <div className='stand'></div>
              <div className='stand thirtyfive'>Paradise Flowers</div>
            </div>
          </div>
          <div id='main-floor'>
            <div id='first-row'>
              <div id='row-A'>
                <div className='booth lefty thirtysix'>Mediterranean Imported Foods</div>
                <div className='booth righty thirtysix'></div>
                <div className='booth thirtyseven'>Frank's II</div>
                <div className='door'></div>
                <div className='booth lefty thirtyeight'>Annemarie's Dairy</div>
                <div className='booth righty thirtyeight'></div>
                <div className='door'></div>
                <div className='booth lefty thirtynine'>Spanos Bakery</div>
                <div className='booth righty thirtynine'></div>
                <div className='door'></div>
                <div className='booth lefty forty'>The Cheese Shop</div>
                <div className='booth righty forty'></div>
                <div className='door'></div>
                <div className='booth lefty fortyone'>Irene Dever</div>
                <div className='booth righty fortyone'></div>
                <div className='door'></div>
                <div className='booth fortytwo'>Oooh... Fudge</div>
                <div className='booth lefty fortythree'>Maha's Falafel</div>
                <div className='booth righty fortythree'></div>
                <div className='booth lefty fortyfour'>Dani's Seafood</div>
                <div className='booth righty fortyfour'></div>
                <div className='door'></div>
                <div className='booth'></div>
              </div>
              <div id='row-B'>
                <div className='booth lefty'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
                <div className='booth fortyfive'>Frank's Brat</div>
                <div className='door'></div>
                <div className='booth lefty fortysix'>Sebastian's Meats</div>
                <div className='booth righty fortysix'></div>
                <div className='door'></div>
                <div className='booth fortyseven'>Vince's Meats</div>
                <div className='booth fortysix'>Seb. Meats</div>
                <div className='door'></div>
                <div className='booth fortyeight'>O.C. Sausage</div>
                <div className='booth fortynine'>Weincek Meats</div>
                <div className='door'></div>
                <div className='booth fifty'>Rita's</div>
                <div className='booth fiftyone'>D.A. Russ</div>
                <div className='door'></div>
                <div className='booth fiftytwo'>K&K Bakery</div>
                <div className='booth lefty fortythree'>Maha's Falafel</div>
                <div className='booth righty fortythree'></div>
                <div className='booth lefty'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
              </div>
              <div id='row-C'>
                <div className='booth'></div>
                <div className='booth lefty fiftythree'>Dohar/ Lovaszy</div>
                <div className='booth righty fiftythree'></div>
                <div className='booth fiftyfour'>Noodle Cat</div>
                <div className='door'></div>
                <div className='booth lefty fiftyfive'>Foster's Meats</div>
                <div className='booth righty fiftyfive'></div>
                <div className='door'></div>
                <div className='booth lefty fiftysix'>Orale</div>
                <div className='booth righty fiftysix'></div>
                <div className='door'></div>
                <div className='booth fiftyseven'>Steve Check Jr.</div>
                <div className='booth fiftyeight'>Lance's Beef</div>
                <div className='door'></div>
                <div className='booth lefty fiftynine'>Vera's Bakery</div>
                <div className='booth righty fiftynine'></div>
                <div className='door'></div>
                <div className='booth lefty sixty'>Kate's fish</div>
                <div className='booth middly sixty'></div>
                <div className='booth righty sixty'></div>
                <div className='booth lefty'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
              </div>
            </div>
            <div id='second-row'>
              <div id='row-D'>
                <div className='booth sixtyone'>Classic Seafood</div>
                <div className='door'></div>
                <div className='booth sixtytwo'>Urban Herbs</div>
                <div className='booth sixtythree'>Ohio City Pasta</div>
                <div className='door'></div>
                <div className='booth sixtyfour'>Pork Chop Shop</div>
                <div className='booth sixtyfive'>Pierogi Palace</div>
                <div className='door'></div>
                <div className='booth lefty sixtysix'>Jim's Meats</div>
                <div className='booth righty sixtysix'></div>
                <div className='door'></div>
                <div className='booth lefty sixtyseven'>D.W. Whitakers Meats</div>
                <div className='booth righty sixtyseven'></div>
                <div className='door'></div>
                <div className='booth sixtyseven'>D.W.W.s Meats</div>
                <div className='booth sixtyeight'>Narrin's Spice + Sauce</div>
                <div className='door'></div>
                <div className='booth sixtynine'>Apple Cured Meats</div>
                <div className='booth seventy'>Steve's Gyro</div>
                <div className='booth lefty'></div>
                <div className='booth middly'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
              </div>
              <div id='row-F'>
                <div className='booth sixtyone'>Classic Seafood</div>
                <div className='door'></div>
                <div className='booth seventyone'>Michael's Bakery</div>
                <div className='booth seventytwo'>Walker Meats</div>
                <div className='door'></div>
                <div className='booth lefty seventythree'>Fernengels</div>
                <div className='booth righty seventythree'></div>
                <div className='door'></div>
                <div className='booth seventyfour'>Theresa Bakery</div>
                <div className='booth seventyfive'>Cake Royale</div>
                <div className='door'></div>
                <div className='booth seventysix'>Rolston Poultry</div>
                <div className='booth seventyseven'>EDW. Badstuber & Son</div>
                <div className='door'></div>
                <div className='booth seventyeight'>Larry Vistein's</div>
                <div className='booth seventynine'>Turczyk's Meats</div>
                <div className='door'></div>
                <div className='booth eighty'>Wiencek Poultry</div>
                <div className='booth eightyone'>Juice Garden</div>
                <div className='booth lefty'></div>
                <div className='booth middly'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
              </div>
            </div>
            <div id='third-row'>
              <div id='row-G'>
                <div className='booth'></div>
                <div className='booth eightytwo'>City Roast</div>
                <div className='booth eightythree'>Crepes De Luxe</div>
                <div className='booth eightyfour'>Kauffman Poultry</div>
                <div className='door'></div>
                <div className='booth lefty eightyfive'>M&M Foods/Toney's Baloney</div>
                <div className='booth righty eightyfive'></div>
                <div className='door'></div>
                <div className='booth eightysix'>Tayse Meats</div>
                <div className='booth eightyseven'>Nonno Joe's</div>
                <div className='door'></div>
                <div className='booth lefty eightyeight'>Dionne's Meats</div>
                <div className='booth righty eightyeight'></div>
                <div className='door'></div>
                <div className='booth eightynine'>Christopher's Bakery</div>
                <div className='booth ninety'>Reilly's</div>
                <div className='door'></div>
                <div className='booth ninetyone'>Michelle's Bakery</div>
                <div className='booth ninetytwo'>Campbell's Popcorn</div>
                <div className='booth lefty'></div>
                <div className='booth middly'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
              </div>
              <div id='row-H'>
                <div className='booth lefty'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
                <div className='booth eightyfour'>Kauffman Poultry</div>
                <div className='door'></div>
                <div className='booth lefty ninetythree'>Pinzone's Meats</div>
                <div className='booth righty ninetythree'></div>
                <div className='door'></div>
                <div className='booth ninetyfour'>J&J Meats</div>
                <div className='booth ninetyfive'>Dionne's Poultry</div>
                <div className='door'></div>
                <div className='booth lefty ninetysix'>Mediterra Bakehouse</div>
                <div className='booth righty ninetysix'></div>
                <div className='door'></div>
                <div className='booth lefty ninetyseven'>Czuchraj Meats</div>
                <div className='booth righty ninetyseven'></div>
                <div className='door'></div>
                <div className='booth ninetyone'>Michelle's Bakery</div>
                <div className='booth lefty ninetyeight'>West Side Market Cafe</div>
                <div className='booth middly'></div>
                <div className='booth middly'></div>
                <div className='booth middly'></div>
                <div className='booth righty'></div>
              </div>
              <div id='row-I'>
                <div className='booth lefty ninetynine'>Johnny Hot Dog</div>
                <div className='booth righty ninetynine'></div>
                <div className='booth'></div>
                <div className='booth onehundred'>P-Nut Gallery</div>
                <div className='door'></div>
                <div className='booth lefty onehundredone'>Meister Foods</div>
                <div className='booth righty onehundredone'></div>
                <div className='door'></div>
                <div className='booth lefty onehundredtwo'>Judy's Oasis</div>
                <div className='booth righty onehundredtwo'></div>
                <div className='door'></div>
                <div className='booth onehundredthree'>Frickaccio</div>
                <div className='booth onehundredfour'>Grandma Campbell's</div>
                <div className='door'></div>
                <div className='booth lefty onehundredfive'>Kim Se</div>
                <div className='booth righty onehundredfive'></div>
                <div className='door'></div>
                <div className='booth onehundredsix'>Olive & Grape</div>
                <div className='booth lefty ninetyeight'>West Side Market Cafe</div>
                <div className='booth middly ninetyeight'></div>
                <div className='booth middly ninetyeight'></div>
                <div className='booth middly ninetyeight'></div>
                <div className='booth righty ninetyeight'></div>
              </div>
            </div>
          </div>
          <div id='w25th'>WEST 25TH</div>
          <span id='lorain'>LORAIN AVENUE</span>
        </div>
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
