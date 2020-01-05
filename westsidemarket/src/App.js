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
      user: 'Becca',
      vendor: [{}]
    }
  }
  fetchVendor = (id) => {
    fetch(`${baseUrl}/market`)
    .then(data => data.json())
    .then(jData => {
      const vendor = jData.filter(vend => vend.id === id)
      this.setState({
        vendor: vendor
      })
    }).catch(error => console.log(error))
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
    console.log('comment inside handlecreate function', comment)
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
        console.log(jsonedComment)
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
  closeVendor(){
    this.setState({
      vendor: [{}]
    })
  }
  render(){
    return(
      <div id='container'>
        <h1 id='heading'>My Marketplace: A Guide to the West Side Market</h1>
        <div id='interactive'>
          <div id='produce-north'>
            <div id='top-row'>
              <div onClick={()=>{this.fetchVendor('one')}} className='station left one'>Marina's Produce</div>
              <div onClick={()=>{this.fetchVendor('one')}} className='station right one'></div>
              <div onClick={()=>{this.fetchVendor('two')}} className='station left two'>Tony's Produce</div>
              <div onClick={()=>{this.fetchVendor('two')}} className='station right two'></div>
              <div onClick={()=>{this.fetchVendor('three')}} className='station left three'>Sunshine Produce</div>
              <div onClick={()=>{this.fetchVendor('three')}} className='station right three'></div>
              <div onClick={()=>{this.fetchVendor('four')}}className='station left four'>A-1 Quality Produce</div>
              <div onClick={()=>{this.fetchVendor('four')}}className='station right four'></div>
              <div onClick={()=>{this.fetchVendor('five')}}className='station left five'>Habib's Produce</div>
              <div onClick={()=>{this.fetchVendor('five')}}className='station right five'></div>
              <div onClick={()=>{this.fetchVendor('six')}}className='station six'><div className='sideways'>Angelo's Produce</div></div>
              <div className='doorway'></div>
              <div onClick={()=>{this.fetchVendor('seven')}}className='station seven'><div className='sideways'>Jonathan's Produce</div></div>
              <div onClick={()=>{this.fetchVendor('eight')}}className='station left eight'>Michael's Produce</div>
              <div onClick={()=>{this.fetchVendor('eight')}}className='station right eight'></div>
              <div onClick={()=>{this.fetchVendor('nine')}} className='station left nine'>Bacha Produce</div>
              <div onClick={()=>{this.fetchVendor('nine')}}className='station right nine'></div>
              <div className='station left'></div>
              <div className='station right'></div>
              <div onClick={()=>{this.fetchVendor('ten')}}className='station left ten'>Harb's Produce</div>
              <div onClick={()=>{this.fetchVendor('ten')}}className='station right ten'></div>
              <div onClick={()=>{this.fetchVendor('eleven')}}className='station left eleven'>Mena's Produce</div>
              <div onClick={()=>{this.fetchVendor('eleven')}}className='station right eleven'></div>
              <div onClick={()=>{this.fetchVendor('twelve')}}className='station left twelve'>Calabrese Produce</div>
              <div onClick={()=>{this.fetchVendor('twelve')}}className='station middle twelve'></div>
              <div onClick={()=>{this.fetchVendor('twelve')}}className='station right twelve'></div>
              <div onClick={()=>{this.fetchVendor('thirteen')}}className='station left thirteen'>Lucas' Produce</div>
              <div onClick={()=>{this.fetchVendor('thirteen')}}className='station middle thirteen'></div>
              <div onClick={()=>{this.fetchVendor('thirteen')}}className='station right thirteen'></div>
            </div>
            <div id='bottom-row'>
              <div onClick={()=>{this.fetchVendor('one')}}className='station left one'>Marina's Produce</div>
              <div onClick={()=>{this.fetchVendor('one')}}className='station right one'></div>
              <div onClick={()=>{this.fetchVendor('fourteen')}}className='station fourteen'><div className='sideways'>Mark's Produce</div></div>
              <div className='doorway'></div>
              <div onClick={()=>{this.fetchVendor('kilani')}}className='station kilani'><div className='sideways'>Kilani Produce</div></div>
              <div onClick={()=>{this.fetchVendor('fourteen')}}className='station left fourteen'>Mark's Produce</div>
              <div onClick={()=>{this.fetchVendor('fourteen')}}className='station right fourteen'></div>
              <div onClick={()=>{this.fetchVendor('fifteen')}}className='station left fifteen'>Tito's Produce</div>
              <div onClick={()=>{this.fetchVendor('fifteen')}}className='station right fifteen'></div>
              <div onClick={()=>{this.fetchVendor('sixteen')}}className='station left sixteen'>Shadi Produce</div>
              <div onClick={()=>{this.fetchVendor('sixteen')}}className='station middle sixteen'></div>
              <div onClick={()=>{this.fetchVendor('sixteen')}}className='station right sixteen'></div>
              <div className='doorway'></div>
              <div onClick={()=>{this.fetchVendor('seventeen')}}className='station seventeen'><div className='sideways'>King Produce</div></div>
              <div onClick={()=>{this.fetchVendor('eighteen')}}className='station left eighteen'>Iskander Produce</div>
              <div onClick={()=>{this.fetchVendor('eighteen')}}className='station right eighteen'></div>
              <div onClick={()=>{this.fetchVendor('nineteen')}}className='station left nineteen'>Brothers Produce</div>
              <div onClick={()=>{this.fetchVendor('nineteen')}}className='station middle nineteen'></div>
              <div onClick={()=>{this.fetchVendor('nineteen')}}className='station middle nineteen'></div>
              <div onClick={()=>{this.fetchVendor('nineteen')}}className='station middle nineteen'></div>
              <div onClick={()=>{this.fetchVendor('nineteen')}}className='station right nineteen'></div>
              <div className='doorway'></div>
              <div onClick={()=>{this.fetchVendor('twenty')}}className='station left twenty'>Boutros Brothers Produce</div>
              <div onClick={()=>{this.fetchVendor('twenty')}}className='station middle twenty'></div>
              <div onClick={()=>{this.fetchVendor('twenty')}}className='station right twenty'></div>
              <div onClick={()=>{this.fetchVendor('twentyone')}}className='station left twentyone'>Christiano's Produce</div>
              <div onClick={()=>{this.fetchVendor('twentyone')}}className='station right twentyone'></div>
              <div onClick={()=>{this.fetchVendor('twentytwo')}}className='station left twentytwo'>Miriam's Produce</div>
              <div onClick={()=>{this.fetchVendor('twentytwo')}}className='station right twentytwo'></div>
              <div onClick={()=>{this.fetchVendor('twentythree')}}className='station left twentythree'>Ehab's Produce</div>
              <div onClick={()=>{this.fetchVendor('twentythree')}}className='station right twentythree'></div>
            </div>
          </div>
          <div id='produce-east'>
            <div id='left-row'>
              <div onClick={()=>{this.fetchVendor('twentyfour')}}className='stand top twentyfour'>Basketeria Organics</div>
              <div onClick={()=>{this.fetchVendor('twentyfour')}}className='stand mid twentyfour'></div>
              <div onClick={()=>{this.fetchVendor('twentyfour')}}className='stand bottom twentyfour'></div>
              <div onClick={()=>{this.fetchVendor('twentyfive')}}className='stand twentyfive'>Dave's Produce</div>
              <div onClick={()=>{this.fetchVendor('twentysix')}}className='stand top twentysix'>A&J Produce</div>
              <div onClick={()=>{this.fetchVendor('twentysix')}}className='stand bottom twentysix'></div>
              <div onClick={()=>{this.fetchVendor('twentyseven')}}className='stand twentyseven'>Fritz's Produce</div>
              <div onClick={()=>{this.fetchVendor('twentyeight')}}className='stand twentyeight'>That's Nuts</div>
              <div className='stand top'></div>
              <div className='stand bottom'></div>
              <div onClick={()=>{this.fetchVendor('twentynine')}}className='stand top twentynine'>Rooted in Cleveland</div>
              <div onClick={()=>{this.fetchVendor('twentynine')}}className='stand bottom twentynine'></div>
            </div>
            <div id='right-row'>
              <div onClick={()=>{this.fetchVendor('thirty')}}className='stand top thirty'>Greg's Produce</div>
              <div onClick={()=>{this.fetchVendor('thirty')}}className='stand bottom thirty'></div>
              <div onClick={()=>{this.fetchVendor('thirtyone')}}className='stand top thirtyone'>Decaro's Produce</div>
              <div onClick={()=>{this.fetchVendor('thirtyone')}}className='stand bottom thirtyone'></div>
              <div onClick={()=>{this.fetchVendor('thirtytwo')}}className='stand thirtytwo'>Ohio City Flowers</div>
              <div className='stand'></div>
              <div onClick={()=>{this.fetchVendor('thirtythree')}}className='stand thirtythree'>Jorgensen's Apiary</div>
              <div onClick={()=>{this.fetchVendor('thirtyfour')}}className='stand thirtyfour'>Maple Valley Sugarbush</div>
              <div className='stand top'></div>
              <div className='stand bottom'></div>
              <div className='stand'></div>
              <div onClick={()=>{this.fetchVendor('thirtyfive')}}className='stand thirtyfive'>Paradise Flowers</div>
            </div>
          </div>
          <div id='main-floor'>
            <div id='first-row'>
              <div id='row-A'>
                <div onClick={()=>{this.fetchVendor('thirtysix')}}className='booth lefty thirtysix'>Mediterranean Imported Foods</div>
                <div onClick={()=>{this.fetchVendor('thirtysix')}}className='booth righty thirtysix'></div>
                <div onClick={()=>{this.fetchVendor('thirtyseven')}}className='booth thirtyseven'>Frank's II</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('thirtyeight')}}className='booth lefty thirtyeight'>Annemarie's Dairy</div>
                <div onClick={()=>{this.fetchVendor('thirtyeight')}}className='booth righty thirtyeight'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('thirtynine')}}className='booth lefty thirtynine'>Spanos Bakery</div>
                <div onClick={()=>{this.fetchVendor('thirtynine')}}className='booth righty thirtynine'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('forty')}}className='booth lefty forty'>The Cheese Shop</div>
                <div onClick={()=>{this.fetchVendor('forty')}}className='booth righty forty'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fortyone')}}className='booth lefty fortyone'>Irene Dever</div>
                <div onClick={()=>{this.fetchVendor('fortyone')}}className='booth righty fortyone'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fortytwo')}}className='booth fortytwo'>Ooo... Fudge</div>
                <div onClick={()=>{this.fetchVendor('fortythree')}}className='booth lefty fortythree'>Maha's Falafel</div>
                <div onClick={()=>{this.fetchVendor('fortythree')}}className='booth righty fortythree'></div>
                <div onClick={()=>{this.fetchVendor('fortyfour')}}className='booth lefty fortyfour'>Dani's Seafood</div>
                <div onClick={()=>{this.fetchVendor('fortyfour')}}className='booth righty fortyfour'></div>
                <div className='door'></div>
                <div className='door'></div>
              </div>
              <div id='row-B'>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fortyfive')}} className='booth fortyfive'>Frank's Brat</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fortysix')}}className='booth lefty fortysix'>Sebastian's Meats</div>
                <div onClick={()=>{this.fetchVendor('fortysix')}}className='booth righty fortysix'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fortyseven')}}className='booth fortyseven'>Vince's Meats</div>
                <div onClick={()=>{this.fetchVendor('fortysix')}}className='booth sebmeats fortysix'>Seb. Meats</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fortyeight')}}className='booth fortyeight'>O.C. Sausage</div>
                <div onClick={()=>{this.fetchVendor('fortynine')}}className='booth fortynine'>Weincek Meats</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fifty')}}className='booth fifty'>Rita's</div>
                <div onClick={()=>{this.fetchVendor('fiftyone')}}className='booth fiftyone'>D.A. Russ</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fiftytwo')}}className='booth fiftytwo'>K&K Bakery</div>
                <div onClick={()=>{this.fetchVendor('fortythree')}}className='booth lefty maha fortythree'>Maha's Falafel</div>
                <div onClick={()=>{this.fetchVendor('fortythree')}}className='booth righty maha fortythree'></div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
              </div>
              <div id='row-C'>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fiftythree')}}className='booth lefty fiftythree'>Dohar/ Lovaszy</div>
                <div onClick={()=>{this.fetchVendor('fiftythree')}}className='booth righty fiftythree'></div>
                <div onClick={()=>{this.fetchVendor('fiftyfour')}}className='booth fiftyfour'>Noodle Cat</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fiftyfive')}}className='booth lefty fiftyfive'>Foster's Meats</div>
                <div onClick={()=>{this.fetchVendor('fiftyfive')}}className='booth righty fiftyfive'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fiftysix')}}className='booth lefty fiftysix'>Orale</div>
                <div onClick={()=>{this.fetchVendor('fiftysix')}}className='booth righty fiftysix'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fiftyseven')}}className='booth fiftyseven'>Steve Check Jr.</div>
                <div onClick={()=>{this.fetchVendor('fiftyeight')}}className='booth fiftyeight'>Lance's Beef</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('fiftynine')}}className='booth lefty fiftynine'>Vera's Bakery</div>
                <div onClick={()=>{this.fetchVendor('fiftynine')}}className='booth righty fiftynine'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('sixty')}}className='booth lefty sixty'>Kate's Fish</div>
                <div onClick={()=>{this.fetchVendor('sixty')}}className='booth middly sixty'></div>
                <div onClick={()=>{this.fetchVendor('sixty')}}className='booth righty sixty'></div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
              </div>
            </div>
            <div id='second-row'>
              <div id='row-D'>
                <div onClick={()=>{this.fetchVendor('sixtyone')}}className='booth sixtyone'>Classic Seafood</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('sixtytwo')}}className='booth sixtytwo'>Urban Herbs</div>
                <div onClick={()=>{this.fetchVendor('sixtythree')}}className='booth sixtythree'>Ohio City Pasta</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('sixtyfour')}}className='booth sixtyfour'>Pork Chop Shop</div>
                <div onClick={()=>{this.fetchVendor('sixtyfive')}}className='booth sixtyfive'>Pierogi Palace</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('sixtysix')}}className='booth lefty sixtysix'>Jim's Meats</div>
                <div onClick={()=>{this.fetchVendor('sixtysix')}}className='booth righty sixtysix'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('sixtyseven')}}className='booth lefty sixtyseven'>D.W. Whitaker Meats</div>
                <div onClick={()=>{this.fetchVendor('sixtyseven')}}className='booth righty sixtyseven'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('sixtyseven')}}className='booth sixtyseven'>D.W.W.s Meats</div>
                <div onClick={()=>{this.fetchVendor('sixtyeight')}}className='booth sixtyeight'>Narrin's Spice + Sauce</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('sixtynine')}}className='booth sixtynine'>Apple Cured Meats</div>
                <div onClick={()=>{this.fetchVendor('seventy')}}className='booth seventy'>Steve's Gyros</div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
              </div>
              <div id='row-F'>
                <div onClick={()=>{this.fetchVendor('sixtyone')}}className='booth sixtyone'>Classic Seafood</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('seventyone')}}className='booth seventyone'>Michael's Bakery</div>
                <div onClick={()=>{this.fetchVendor('seventytwo')}}className='booth seventytwo'>Walker Meats</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('seventythree')}}className='booth lefty seventythree'>Fernengels</div>
                <div onClick={()=>{this.fetchVendor('seventythree')}}className='booth righty seventythree'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('seventyfour')}}className='booth seventyfour'>Theresa Bakery</div>
                <div onClick={()=>{this.fetchVendor('seventyfive')}}className='booth seventyfive'>Cake Royale</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('seventysix')}} className='booth seventysix'>Rolston Poultry</div>
                <div onClick={()=>{this.fetchVendor('seventyseven')}}className='booth seventyseven'>EDW. Badstuber & Son</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('seventyeight')}}className='booth seventyeight'>Larry Vistein's</div>
                <div onClick={()=>{this.fetchVendor('seventynine')}}className='booth seventynine'>Turczyk's Meats</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('eighty')}}className='booth eighty'>Wiencek Poultry</div>
                <div onClick={()=>{this.fetchVendor('eightyone')}}className='booth eightyone'>Juice Garden</div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
              </div>
            </div>
            <div id='third-row'>
              <div id='row-G'>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('eightytwo')}}className='booth eightytwo'>City Roast</div>
                <div onClick={()=>{this.fetchVendor('eightythree')}}className='booth eightythree'>Crepes De Luxe</div>
                <div onClick={()=>{this.fetchVendor('eightyfour')}}className='booth eightyfour'>Kauffman Poultry</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('eightyfive')}}className='booth lefty eightyfive'>M&M Foods/Toney's Baloney</div>
                <div onClick={()=>{this.fetchVendor('eightyfive')}}className='booth righty eightyfive'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('eightysix')}}className='booth eightysix'>Tayse Meats</div>
                <div onClick={()=>{this.fetchVendor('eightyseven')}} className='booth eightyseven'>Nonno Joe's</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('eightyeight')}}className='booth lefty eightyeight'>Dionne's Meats</div>
                <div onClick={()=>{this.fetchVendor('eightyeight')}}className='booth righty eightyeight'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('eightynine')}}className='booth eightynine'>Chris's Bakery</div>
                <div onClick={()=>{this.fetchVendor('ninety')}}className='booth ninety'>Reilly's</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('ninetyone')}}className='booth michelle ninetyone'>Michelle's Bakery</div>
                <div onClick={()=>{this.fetchVendor('ninetytwo')}}className='booth ninetytwo'>Campbell's Popcorn</div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
              </div>
              <div id='row-H'>
                <div className='door'></div>
                <div className='door'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('eightyfour')}}className='booth kauffman eightyfour'>Kauffman Poultry</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('ninetythree')}}className='booth lefty ninetythree'>Pinzone's Meats</div>
                <div onClick={()=>{this.fetchVendor('ninetythree')}}className='booth righty ninetythree'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('ninetyfour')}}className='booth ninetyfour'>J&J Meats</div>
                <div onClick={()=>{this.fetchVendor('ninetyfive')}}className='booth ninetyfive'>Dionne's Poultry</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('ninetysix')}}className='booth lefty ninetysix'>Mediterra Bakehouse</div>
                <div onClick={()=>{this.fetchVendor('ninetysix')}}className='booth righty ninetysix'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('ninetyseven')}}className='booth lefty ninetyseven'>Czuchraj Meats</div>
                <div onClick={()=>{this.fetchVendor('ninetyseven')}}className='booth righty ninetyseven'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('ninetyone')}}className='booth bakery ninetyone'>Michelle's Bakery</div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth wscafe lefty ninetyeight'></div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth wscafe middly ninetyeight'></div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth wscafe middly ninetyeight'>West Side Market Cafe</div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth wscafe middly ninetyeight'></div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth wscafe righty ninetyeight'></div>
              </div>
              <div id='row-I'>
                <div onClick={()=>{this.fetchVendor('ninetynine')}}className='booth lefty ninetynine'>Johnny Hot Dog</div>
                <div onClick={()=>{this.fetchVendor('ninetynine')}}className='booth righty ninetynine'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('onehundred')}}className='booth onehundred'>P-Nut Gallery</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('onehundredone')}}className='booth lefty onehundredone'>Meister Foods</div>
                <div onClick={()=>{this.fetchVendor('onehundredone')}}className='booth righty onehundredone'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('onehundredtwo')}}className='booth lefty onehundredtwo'>Judy's Oasis</div>
                <div onClick={()=>{this.fetchVendor('onehundredtwo')}}className='booth righty onehundredtwo'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('onehundredthree')}}className='booth onehundredthree'>Frickaccio</div>
                <div onClick={()=>{this.fetchVendor('onehundredfour')}}className='booth onehundredfour'>Grandma Campbell's</div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('onehundredfive')}}className='booth lefty onehundredfive'>Kim Se</div>
                <div onClick={()=>{this.fetchVendor('onehundredfive')}}className='booth righty onehundredfive'></div>
                <div className='door'></div>
                <div onClick={()=>{this.fetchVendor('onehundredsix')}}className='booth onehundredsix'>Olive Cleveland</div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth lefty ninetyeight'></div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth middly ninetyeight'></div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth middly ninetyeight'>West Side Market Cafe</div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth middly ninetyeight'></div>
                <div onClick={()=>{this.fetchVendor('ninetyeight')}}className='booth righty ninetyeight'></div>
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
          this.state.vendor[0].name
          ? <div>
            <Vendor user={this.state.user} vendor={this.state.vendor} comments={this.state.comments} handleCreate={this.handleCreate} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
            <button onClick={()=>{this.closeVendor()}}>Close</button>
            </div>
          : null
        }
      </div>
    )
  }
}

export default App;
