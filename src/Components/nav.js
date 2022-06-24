import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import {Link, withRouter} from "react-router-dom"



class Class extends Component{

    constructor(props) {
        super(props);
        this.state = {
         isListOpen: false,
         headerTitle: this.props.title
        };
        this.dropProfile = React.createRef();
        this.dropLog = React.createRef();
        this.dropBurger = React.createRef();
      }

    // toggleList = () => {
    //   this.setState((prevState) => ({
    //     isListOpen: !prevState.isListOpen
    //   }));
    // };

    // selectItem = (item) => {
    //   const { resetThenSet} = this.props;
    //   const { title, id, key} = item;
      
    //   this.setState({
    //     headerTitle: title,
    //     isListOpen: false,
    //   }, () =>resetThenSet(id, key)
    //     );
    // }

    // resetThenSet = (id, key) => {
    //   const temp = [...this.state[key]];

    //   temp.forEach(item) => item.select=false;
    //   temp[id].selected = true;

    //   this.setState({
    //     [key]: temp,
    //   });
    // }
  
    // <Dropdown
    // title="select location"
    // list = {this.state.location}
    // resetThenSet={this.resetThenSet}
    // />
      
    







render(){
  const {isListOpen, headerTitle} = this.state;
  const {list} = this.props;
    return(
<body className='body'>


{/* <div className='dd-wrapper'>
  <button
  type="button"
  className='dd-head'
  onClick={this.toggleList}>
<div className='dd-header-title'>
  {headerTitle}
</div>

  </button>
  
</div>


<div className='dd-box'>
  <div className='dd-wrapper'>
<div className='dd-base'></div>
  </div>
<div className='dd-items'>
  <div className='dd-item'></div>
  <div className='dd-item'></div>
  <div className='dd-item'></div>
</div>


</div> */}





<section> 
            <header className='transport-header'>
                <Link to={`/nav`}> <img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/> </Link>
               
                <Link to ={'services'}>  <div className='services'>
                    <b> Services</b>
                </div> </Link>
                <Link to ={'customers'}><div>
                <img className='arrow' src='https://i.imgur.com/VoLjlGR.png'/>
                    <b className='company'> Company</b>
                </div></Link>
                <Link to ={'contact'}>
                <div className='transport-buttons'>
                    <b> Contact</b>
                </div> </Link>
                <Link to ={'Job'}>
                <div className='transport-buttons'>
                    <b> Career</b>
                </div> </Link>
       
                <Link to ={'News'}>
                <div className='transport-buttons'>
                    <b> News</b>
                </div> </Link>
           
                {/* <div className='trans-sign'>
                    <b> Sign-Up</b>
                </div> */}
                <a className='trans-sign' target="_blank" href="https://www.transtimeexpress.com/account/">Sign-Up</a>
                <div className='trans-log'>
                    <img className="profile" src='https://i.imgur.com/mugWDO5.png'/>
                    {/* <b className='login'>Log in</b> */}
                    <a className='login' target="_blank" href="https://order.mydispatch.com/Default.aspx?OfficeAccount=250478">Log in</a>
                </div>
            </header>

        </section>
<section className='main-section'>
<div className='call'>
  <b className='cTA'>Call to action</b>
  <p className='home-number'>(800) 222-4959</p>
  <p className='cTA-info'>Proven courier company with over 35 years of experience delivering quality and timely services with 24/7/365 coverage with over 300 qualified drivers utilizing state-of-the-art technology providing near real-time driver and package tracking with mobile capability with live agents to meet your current and future needs.</p>
  {/* <button className='cTA-button'> <b>Button</b></button> */}
  
</div>
<div className='imager'>
  <img className='over-image' src="https://i.imgur.com/xabYtmt.png"/>
  <img className='over-image' src="https://i.imgur.com/h9TQKJu.png"/>
  <img className='over-image' src="https://i.imgur.com/2wyJOBf.png"/>
 

</div>
</section>
{/* <div className='services-header'>
<p className='service-header-text'>OUR SERVICES</p></div>
<section>
<div className='item-left'>
  <img className = "imageleft" src="https://i.imgur.com/h9TQKJu.png"/>
  <div className='textleft'> 
  <b className='service-bold'>Service</b>
  <p className='service-content'>something about the sevice here, this is more text to fill in space, this is more text to fill in space,
  this is more text to fill in space, this is more text to fill in space
  </p>
  <button className='cTA-button2'> <b>Button</b></button>
  </div>
</div>


</section>
<section className='item-right'>
<div>
  <img className = "imageright" src="https://i.imgur.com/h9TQKJu.png"/>
  <div className='textright'> 
  <b className='service-bold'>Service</b>
  <p className='service-content'>something about the sevice here, this is more text to fill in space, this is more text to fill in space,
  this is more text to fill in space, this is more text to fill in space
  </p>
  <button className='cTA-button2'> <b>Button</b></button>
  </div>
</div>

</section>

<section>
<div className='item-left'>
  <img className = "imageleft" src="https://i.imgur.com/h9TQKJu.png"/>
  <div className='textleft'> 
  <b className='service-bold'>Service</b>
  <p className='service-content'>something about the sevice here, this is more text to fill in space, this is more text to fill in space,
  this is more text to fill in space, this is more text to fill in space
  </p>
  <button className='cTA-button2'> <b>Button</b></button>
  </div>
</div>

</section> */}


<div className='services-header'>
<h className='service-header-text'>OUR SERVICES</h></div>

<section className='item-right'>
<div>
  <img className = "imageright" src="https://veteransdistribution.com/wp-content/uploads/2020/07/pre-delivery-inspections.jpeg"/>
  <div className='textright'> 
  <p className='service-bold'>What we do for you</p>
  
  <div className='service-box'>
    <img className='dot' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1200px-Location_dot_black.svg.png"/>
  <div> <p className='services-content'> 24/7/365 Coverage
  </p>
  <p className='service-desc'> Something about the service, more tex to fill in space. More text to fill in space. more text to fill in space</p>
  </div>
  </div>
  <div className='service-box'>
    <img className='dot' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1200px-Location_dot_black.svg.png"/>
  <div> <p className='services-content'> Medical Logistics
  </p>
  <p className='service-desc'> Something about the service, more tex to fill in space. More text to fill in space. more text to fill in space</p>
  </div>
  </div>
  <div className='service-box'>
    <img className='dot' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1200px-Location_dot_black.svg.png"/>
  <div> <p className='services-content'> Warehouse / Storage
  </p>
  <p className='service-desc'> Something about the service, more tex to fill in space. More text to fill in space. more text to fill in space</p>
  </div>
  </div>
  <div className='service-box'>
    <img className='dot' src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1200px-Location_dot_black.svg.png"/>
  <div> <p className='services-content'> Office Move as 4th Service
  </p>
  <p className='service-desc'> Something about the service, more tex to fill in space. More text to fill in space. more text to fill in space</p>
  </div>
  </div>

  </div>
</div>

</section>
{/* 
<img className="driver-image"src="https://i.imgur.com/7epXEyQ.png"/> */}


<footer className='footer'>
    <div className='footer-left'>
<img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/>
<p className='footer-cc'>Trans Time Mobile. All Rights Reserved
</p>
</div>
<div className='footer-box1'> 
    <p>Services</p>
    <p>News</p>
    <p>Career</p>
    <p>Contact</p>
   
    </div>

    <div className='footer-box2'> 
    <p>Company</p>
    <p>About</p>
    <p>History</p>
    <p>Community</p>
    <p>Site Map</p>
    </div>
    
</footer>

        </body>
        
    )
}
}
export default (Class)