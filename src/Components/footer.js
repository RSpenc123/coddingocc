import React, {Component} from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './footer.css'
import './Contact'
import {Link, withRouter} from "react-router-dom"
import Dropdown from './dropdown'



class Footer extends Component{ 
    render(){
        
        return(
        <body className='body'>
            




        {/* <div className='filler-footer'> filler footer here</div> */}

<footer className='footer'>
    <div className='footer-left'>
<img className="trans-logo-footer" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/>
<p className='footer-cc'>Trans Time Mobile. All Rights Reserved
</p>
</div>
<div className='footer-box1'> 
<Link to={"/Services"} className='footer-text'> <p className='footer-head'>Services</p></Link>
<Link to={"/News"} className='footer-text'> <p className='footer-text'>News</p></Link>
<Link to={"/Job"} className='footer-text'>  <p className='footer-text'> Career</p></Link>
<Link to={"/Contact"} className='footer-text'>  <p className='footer-text'> Contact</p></Link>
   
    </div>

    <div className='footer-box2'> 
    
    <Link to={"/About"} className='footer-text'> <p className='footer-head'> About</p></Link>
    <Link to={"/Customers"} className='footer-text'> <p className='footer-text'>Clients</p></Link>
    <Link to={"/"} className='footer-text'><p >Community</p></Link>
    <div className='foot-style'><Link to={"/Testimonials"} className='footer-text'> <p className='footer-text'>Testimonials</p></Link></div>

    </div>
    
</footer>
        </body>
        )     
    
}
}
export default (Footer)