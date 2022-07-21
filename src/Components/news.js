import React, {Component} from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './news.css'
import './Contact'
import {Link, withRouter} from "react-router-dom"
import Dropdown from './dropdown'



class News extends Component{ 
    render(){
        
        return(
        <body className='body'>
            



   <section className='news-section'>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Wellspan Client Win</p>
           <button>link here</button>
       </div>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Expanded Capability in our new warehouse in Savage </p>
           <button>link here</button>
       </div>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Children Hospital</p>
           <button>link here</button>
       </div>
   </section>


        {/* <div className='filler-footer'> filler footer here</div> */}

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
export default (News)