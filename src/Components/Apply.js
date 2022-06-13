import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Contact'
import {Link, withRouter} from "react-router-dom"



class Apply extends Component{
    render(){
        return(
        <body className='body'>
             <section> 
            <header className='transport-header'>
                <Link to={`/nav`}> <img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/> </Link>
               
                <Link to ={'services'}>  <div className='services'>
                    <b> Services</b>
                </div> </Link>
                <Link to ={'customers'}><div>
                <img className='arrow' src='https://i.imgur.com/VoLjlGR.png'/>
                    <b className='company'> Company</b>
                </div></Link>
                <Link to ={'contact'}>
                <div className='transport-buttons'>
                    <b> Contact</b>
                </div> </Link>
                <Link to ={'Job'}>
                <div className='transport-buttons'>
                    <b> Career</b>
                </div> </Link>
       
                <div className='transport-buttons'>
                    <b> News</b>
                </div>
           
                <div className='trans-sign'>
                    <b> Sign-Up</b>
                </div>
                <div className='trans-log'>
                    <img className="profile" src='https://i.imgur.com/mugWDO5.png'/>
                    <b className='login'>Log in</b>
                </div>
            </header>

        </section>


        <div className='filler-footer'> filler footer here</div>


        </body>
        )     
    
}
}
export default (Apply)