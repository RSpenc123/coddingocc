import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './news.css'
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

    







render(){
  const {isListOpen, headerTitle} = this.state;
  const {list} = this.props;
    return(
<body className='body'>







<section className='main-section1'>
<div className='call'>
  {/* <b className='cTA'>Call to action</b> */}
  <p className='home-number'>(800) 222-4959</p>
  <p className='cTA-info'>Proven courier company with over 35 years of experience delivering quality and timely services with 24/7/365 coverage with over 300 qualified drivers utilizing state-of-the-art technology providing near real-time driver and package tracking with mobile capability with live agents to meet your current and future needs.</p>
  {/* <button className='cTA-button'> <b>Button</b></button> */}
  
</div>



</section>



<div className='services-header'>
<h className='service-header-text'>OUR SERVICES</h></div>

<section className='item-right'>
<div>
  <img className = "imageright" src="https://veteransdistribution.com/wp-content/uploads/2020/07/pre-delivery-inspections.jpeg"/>
  <div className='textright'> 
  <p className='service-bold'>What we do for you</p>
  
  <div className='service-box'>
    <img className='dot' src ="https://i.imgur.com/io8nvnm.png"/>
  <div> <p className='services-content'> 24/7/365 Coverage
  </p>
  <p className='service-desc'> Our customers trust us to deliver their packages locally on time and accurately, which is why we serve so many of the areas professional firms.</p>
  </div>
  </div>
  <div className='service-box'>
    <img className='dot' src ="https://i.imgur.com/QdNBndw.png"/>
  <div> <p className='services-content'> Medical Logistics
  </p>
  <p className='service-desc'> We specialize in urgent, on-demand medical, pharmaceutical and healthcare deliveries with tailored solutions to meet your client's needs and 24/7/365 availability.</p>
  </div>
  </div>
  <div className='service-box'>
    <img className='dot' src ="https://i.pinimg.com/originals/99/91/a4/9991a4b887eeee54f30b282f222a42a8.png"/>
  <div> <p className='services-content'> Warehouse / Storage
  </p>
  <p className='service-desc'> Whether you need storage for weeks or months, we are ready to store your inventory and offer distribution and final mile services anywhere in the DMV area.</p>
  </div>
  </div>
  <div className='service-box'>
    <img className='dot' src ="https://i.imgur.com/AgBEgE4.png"/>
  <div> <p className='services-content'> Office Move 
  </p>
  <p className='service-desc'> We offer complete office relocation services along with warehousing and storage solutions for all your moving needs.</p>
  </div>
  </div>

  </div>
</div>

</section>
{/* 
<img className="driver-image"src="https://i.imgur.com/7epXEyQ.png"/> */}




        </body>
        
    )
}
}
export default (Class)