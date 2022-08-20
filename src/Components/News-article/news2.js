import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ReactDOM } from 'react'
import axios from 'axios'
// import "../Testimonials.css"
// import './Contact'
import {Link, withRouter} from "react-router-dom"
import "./News-article.css"



class News2 extends Component{
    render(){



        return(
        <body className='body'>



<section className='meet-header'>
           <div className='news-background'> </div>
           <img className='about-img' src="https://i.imgur.com/tfAg0Qp.jpg"/>
           <p className="contact-text">News </p>
           {/* <div className='about-img' >        </div> */}
           
           
           
           </section>
<section className='article-box'>
           <div className='news-article'>
    <b>Trans Time Express deploys its latest version of Courier and Dispatch Software to further enhance its delivery model for its clients </b>
<p>(Rockville, MD) August 12, 2022 – Trans Time Express continues to enhance its capabilities through the deployment of the latest version of Courier and Dispatch Software across all of its locations.  The new technology platform will enable Trans Time Express to more accurately track all of its deliveries through tight integration across its driver network.  The new capability also provides optimized delivery routes and schedule daily runs and track drivers in real-time via iOS or Android devices.  The capability is also extended to clients who can more accurately track their packages and get the latest status across their courier package delivery cycle.  
</p>
<img className='article-img' src="https://i.imgur.com/T9EjI1i.png"/>
<p className='article-underline'>About Trans Time Express</p>
            <p>Trans Time Express is a proven courier company with over 35 years of experience delivering quality and timely services with 24/7/365 coverage with over 300 qualified drivers utilizing state-of-the-art technology providing near real-time driver and package tracking with mobile capability with live agents to meet your current and future needs.</p>
            <p>For more information, visit  
            <Link to={'/'}>www.transtimeexpress.com </Link>
                
                
                   or call 800-222-4959.</p>
  
           </div>

           </section>


        </body>
        )     
    
}
}
export default (News2)