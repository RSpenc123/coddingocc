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
                <img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"/>
                <div className='services'>
                    <b> Services</b>
                </div>
                <div>
                <img className='arrow' src='https://i.imgur.com/VoLjlGR.png'/>
                    <b className='company'> Company</b>
                </div>
                <div className='transport-buttons'>
                    <b> Contact</b>
                </div>
                <div className='transport-buttons'>
                    <b> Career</b>
                </div>
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