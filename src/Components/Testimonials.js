import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ReactDOM } from 'react'
import axios from 'axios'
import './Testimonials.css'
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
         <div className='testimonial'>
            <p>"Just wanted to take a minute to say thank you.  Your team's professionalism, customer service and 
                responsiveness for our accreditation requests has been much appreciated.  Also, wanted to pass along 
                the surveyor feedback as your team has been a great resource and excellent for being able to articulate 
                your processes such as hazardous cleanups, etc.  In short, your team has been wonderful to deal with by the 
                surveyors.  We appreciate everything your team does for the patients and the Wellspan Health System."</p>
                <p>Wellspan Health Systems </p>
         </div>
         <div className='testimonial'>
            <p>"I just wanted to give a compliment to the new couriers after a detailed selection process.  
                They are extremely polite, dressed in professional uniforms and are very efficient.  
                They greet you and look like they are practically running.  Congratulations to everyone on your great 
                selection of the new courier services."</p>
            <p>Health Network Executive</p>
         </div>
  
     </div>
 </section>

 <section>
     <div className='testimonial-section'>
     <div className='testimonial'>
            <p>"Wanted to provide our compliments to your staff and your handling of our equipment and shipping needs.  
                Your staff has been very gentle and kind with everything they pick up.  We love their politeness, attentiveness 
                and being an overall positive addition to our internal team.  You guys are amazing."</p>
            <p>Federal Gov't Agency</p>
         </div>
         <div className='testimonial'>
            <p>"I want to recognize your company for always coming through for us.  Your team consistently goes above and beyond.  
                Our staff consistently comment on how professional your staff are always and how they deliver our critical documents 
                on-time and every time."</p>
            <p>Major Law Firm</p>
         </div>
         <div className='testimonial'>
            <p>"Thanks for being such a significant part of our company.  Your partnership allows us to focus on our core business.  
                We appreciate your investment in the tools you and your drivers utilize and the real-time dashboards we can access to 
                view status of our deliveries."</p>
            <p>Pharmacy Services Firm</p>
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
export default (Testimonials)