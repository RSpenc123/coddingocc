import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Contact.css'
import {Link, withRouter} from "react-router-dom"



class Contact extends Component{
    render(){
        return(
        <body className='body'>
          

        {/* <section>
            <div className='contact-header'> Contact Us</div>
        </section> */}
        <section className='meet-header'>
           <div className='contact-background'> </div>
           <img className='about-img' src="https://i.imgur.com/mdNWrgX.jpg"/>
           <p className="contact-text">Contact Us </p>
           {/* <div className='about-img' >        </div> */}
           
           
           
           </section>







        <section className='contact-services'>
            <div className='phone1'>
                <img className="contact-icons" src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"/>
                (800) 222-4959 </div>
                <div className='phone'>
                <img className="contact-icons2" src="https://i.imgur.com/h797BtJ.png"/>
                <button className='email-button' onClick={() => window.location = 'mailto:Sales@Transtimeexpress.com'}>Sales@Transtimeexpress.com</button> </div>
                <div className='phone'>
                <img className="contact-icons3" src="https://i.imgur.com/TIxbnHw.png"/>
                <p className='fax'>877-525-5206</p> </div>
                {/* <div className='phone'>
                <img className="contact-icons" src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"/>
               Hours here </div> */}
                <a  target="_blank" href="https://www.linkedin.com/company/trans-time-express"> <img className='contact-icons5' 
                src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"/></a>
               
                <a  target="_blank" href="https://www.facebook.com/Trans-Time-Express-236099153618807/"> <img className='contact-icons' 
                src="https://www.freeiconspng.com/thumbs/facebook-logo-png/photos-facebook-logo-png-transparent-background-13.png"/></a>
               
        </section>
        {/* <button onClick={() => window.location = 'mailto:Sales@Transtimeexpress.com'}>Contact Me</button> */}
        <section className='offices'>
            <div className='office-box'> 
            <p className='location'>Rockville, MD</p>
            <p>(301) 468-8901</p>
            <p>11820 Parklawn Dr, Ste 205,
Rockville, MD 20852</p>
            </div>
            <div className='office-box'> 
            <p className='location'>Savage, MD</p>
            <p>(301) 490-5000</p>
            <p>8840 Greenwood Pl, Ste B,
Savage, MD 20763</p>
</div>
        </section>
        <section className='offices'>
            <div className='office-box'> 
            <p className='location'>York, PA</p>
            <p>(717) 318-5174</p>
            <p>2224-A South Queen St
York, PA 17402</p>
            </div>
            <div className='office-box'> 
            <p className='location'>West McLean, VA</p>
            <p>(703) 790-4666</p>
            <p>PO BOX 3303,
West McLean, VA 22103</p>
</div>
        </section>




        </body>
        )     
    
}
}
export default (Contact)