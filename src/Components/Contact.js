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
          

        <section>
            <div className='contact-header'> Contact Us</div>
        </section>
        <section className='contact-services'>
            <div className='phone'>
                <img className="contact-icons" src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"/>
                (800) 222-4959 </div>
                <div className='phone'>
                <img className="contact-icons2" src="http://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png"/>
                <p>Sales@Transtimeexpress.com</p> </div>
                <div className='phone'>
                <img className="contact-icons2" src="https://media.istockphoto.com/vectors/printer-icon-modern-thin-line-design-vector-line-icon-vector-id1128788131?k=20&m=1128788131&s=612x612&w=0&h=LZQWiL0uxjH1l0FVlCe4DlhAaHeuqifCgkAXzsx_AYE="/>
                <p>877-525-5206</p> </div>
                {/* <div className='phone'>
                <img className="contact-icons" src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"/>
               Hours here </div> */}
                <a  target="_blank" href="https://www.linkedin.com/company/trans-time-express"> <img className='contact-icons' 
                src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"/></a>
               
                <a  target="_blank" href="https://www.facebook.com/Trans-Time-Express-236099153618807/"> <img className='contact-icons' 
                src="https://www.freeiconspng.com/thumbs/facebook-logo-png/photos-facebook-logo-png-transparent-background-13.png"/></a>
               
        </section>
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