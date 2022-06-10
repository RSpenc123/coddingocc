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

        <section className='career-header'>Careers</section>

        <section>
            <div className='pitch'>
                <p className='pitch-text'>Pitch to attract workers</p>
                <p className='pitch-desc'> Some benefits in working for us</p>
            </div>
        </section>
        <section>
            <p className='pitch-text'> Available Positions</p>
            <div className='list-position' >
               <li className='position'>position 1</li> 
               <li className='position'>position 2</li>
               <li className='position'>position 3</li>
               {/* <li className='position'>position 1</li> */}
            </div>
        </section>
        <section>
<h1>-Job 1-</h1>
<p>functions</p>
<div className='functions'>
<li className='function'>function1</li>
<li className='function'>function2</li>
<li className='function' >function3</li>
<li className='function'>function4</li>
<li className='function'>function5</li>
<li className='function'>function6</li>
</div>
<p>physical requirements</p>
<div className='functions'>
<li className='function'>function1</li>
<li className='function'>function2</li>
<li className='function' >function3</li>
<li className='function'>function4</li>
<li className='function'>function5</li>
<li className='function'>function6</li>
</div>
<p>basic requirements</p>
<div className='functions'>
<li className='function'>function1</li>
<li className='function'>function2</li>
<li className='function' >function3</li>
<li className='function'>function4</li>
<li className='function'>function5</li>
<li className='function'>function6</li>
</div>
            
            <button>apply here</button>
        </section>


        <div className='filler-footer'> filler footer here</div>


        </body>
        )     
    
}
}
export default (Worker)