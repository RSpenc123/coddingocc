import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ReactDOM } from 'react'
import axios from 'axios'
// import "../Testimonials.css"
// import './Contact'
import {Link, withRouter} from "react-router-dom"
import "./News-article.css"



class News1 extends Component{
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
            <b>Trans Time Express enhances its Warehousing / Distribuion and Logisics Management capabilities through expansion of its warehouse</b>
            <p>(Savage, MD) June 2, 2022 – Trans Time Express has recently expanded its warehouse based in Savage, MD.  The facility has over 30,000 square feet with capability for short and long term storage.  The expanded warehouse is open, fully functional and already serving clients.  The expansion was a direct response to market demand and opportunity as this expanded distribution hub will position Trans Time Express and its clients for storage, fast fulfillment and an excellent end to end logistical experience.</p>
            <p> “We are pleased to continue our work in expanding our Warehousing / Distribution and Logistics Management capabilities to meet our client’s needs.  We will continue to work with our clients to expand our capabilities in providing the best services to meet their existing and future needs.” said Mona Toosi, Trans Time Express President.</p>
            <u>About Trans Time Express</u>
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
export default (News1)