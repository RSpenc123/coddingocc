import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ReactDOM } from 'react'
import axios from 'axios'
import "../Testimonials.css"
import './Contact'
import {Link, withRouter} from "react-router-dom"



class Testimonial1 extends Component{
    render(){



        return(
        <body className='body'>





 

<div className='meet-header'>
    <p>Testimonials</p>
</div>
 <section>
     <div className='testimonial-section'>
         <div className='testimonial'>
            <p>"On behalf of the Microbiology Lab, MedStar Washington Hospital Center, we are grateful for your team's 
                exceptional and outstanding job they performed in the lab today.  We asked for their
          help coordinating with another shipping company who was being difficult.  I was on the phone while your team 
          was coordinating the discussion with the 3rd party.  It was overwhelming to hear 
          how persistent your team was in communicating with the other shipping company for the sake of your customer. 
          That to us is an exceptional Quality CUSTOMER SERVICE!!!"</p>
          <p>Great job, Kudos!</p>
          <p>Medstar Health</p>
          </div>
    
  
     </div>
 </section>

 






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
export default (Testimonial1)