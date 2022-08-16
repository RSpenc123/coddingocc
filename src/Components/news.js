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
            
            <div>
           <p className='news-header'>News</p>
           </div>


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


        </body>
        )     
    
}
}
export default (News)