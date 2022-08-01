import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Worker.css'
import {Link, withRouter} from "react-router-dom"



class Worker extends Component{
    render(){
        return(
        <body className='body'>

        {/* <section className='career-header'>Careers</section> */}

        <section>
            <div className='pitch'>
                <p className='pitch-text'>Join our growing team of qualified drivers working for a well-known and established company with over 35 years 
                of experience offering flexible schedules with access to state-of-the-art technology for all dispatch and package delivery capabilities utilizing mobile devices.</p>
                {/* <p className='pitch-desc'> Some benefits in working for us</p> */}
                <p className='pitch-text'>For more information, please contact 800-222-4959 and sales@transtimeexpress.com</p>
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
export default (Worker)