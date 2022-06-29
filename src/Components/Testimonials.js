import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ReactDOM } from 'react'
import axios from 'axios'
import './about.css'
import './Contact'
import {Link, withRouter} from "react-router-dom"



class Testimonials extends Component{
    render(){



        return(
        <body className='body'>





 

<div className='meet-header'>
    <p>Testimonials</p>
</div>
 <section>
     <div className='testimonial-section'>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
  
     </div>
 </section>

 <section>
     <div className='testimonial-section'>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
  
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
export default (Testimonials)