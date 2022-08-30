import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Worker.css'
import {Link, withRouter} from "react-router-dom"



class Worker extends Component{
    render(){
        return(
        <body >
            {/* <div>
           <p className='work-header'>Join The Team</p>
           </div> */}
           <section className='meet-header'>
           <div className='work-background'> </div>
           <img className='about-img' src="https://i.imgur.com/HLjKei1.jpgg"/>
           <p className="contact-text">Join The Team </p>
           {/* <div className='about-img' >        </div> */}
           
           
           
           </section>









        {/* <section className='career-header'>Careers</section> */}

        <section>
            <div className='pitch'>
                <p className='pitch-text'>Join our growing team of qualified drivers working for a well-known and established company with over 35 years 
                of experience offering flexible schedules with access to state-of-the-art technology for all dispatch and package delivery capabilities utilizing mobile devices.</p>
                {/* <p className='pitch-desc'> Some benefits in working for us</p> */}
                <p className='pitch-text'>For more information, please contact <b>800-222-4959</b> </p>
                <button className='email-button' onClick={() => window.location = 'mailto:Sales@Transtimeexpress.com'}><b className='email-hover'>Sales@Transtimeexpress.com</b></button>
            </div>
        </section>
        




        </body>
        )     
    
}
}
export default (Worker)