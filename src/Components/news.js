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
            
            {/* <div>
           <p className='news-header'>News</p>
           </div> */}
           
           
           <section className='meet-header'>
           <div className='news-background'> </div>
           <img className='about-img' src="https://i.imgur.com/tfAg0Qp.jpg"/>
           <p className="contact-text">News </p>
           {/* <div className='about-img' >        </div> */}
           
           
           
           </section>












   <section className='news-section'>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>New Dispatch Software</p>
           <Link to="/news2"> <button className='news-button'>Read More</button></Link>
       </div>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Expanded Capability in our new warehouse in Savage </p>
          <Link to="/news1"> <button className='news-button'>Read More</button></Link>
       </div>
       {/* <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Children Hospital</p>
           <button className='news-button'>Read More</button>
       </div>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Wellspan Client Win</p>
           <button className='news-button'>Read More</button>
       </div>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Expanded Capability in our new warehouse in Savage </p>
           <button className='news-button'>Read More</button>
       </div>
       <div className='news-box'>
           <img className='news-image' src="https://www.pinclipart.com/picdir/big/124-1248076_cutting-edge-articles-vector-graphics-clipart.png"/>
           <p className='news-text'>Children Hospital</p>
           <button className='news-button'>Read More</button>
       </div> */}
   </section>


        {/* <div className='filler-footer'> filler footer here</div> */}


        </body>
        )     
    
}
}
export default (News)