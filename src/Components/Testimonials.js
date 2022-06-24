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