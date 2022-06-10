import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Customers.css'
import {Link, withRouter} from "react-router-dom"



class Cutstomers extends Component{
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
        <div className='customer-header'> Meet the happy clients that trust Trans Time Express</div>
        <section>
            <div>
<img className="customer-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/08-CLN.jpg"/>
<img className="customer-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/09-CLN.jpg"/>
<img className="customer-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/06-CLN.jpg"/>
<img className="customer-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/05-CLN.jpg"/>

            </div>
            <div>
<img className="customer-logo2" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Smithsonian_Channel.png"/>
<img className="customer-logo2" src="https://childrensnational.org/images/facebook/CNHSFBdefault.jpg"/>
<img className="customer-logo3" src="https://upload.wikimedia.org/wikipedia/en/9/99/TVOne_2016.png"/>
<img className="customer-logo4" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/03-CLN.jpg"/>

            </div>
        </section>


        {/* <div className='filler-footer'> filler footer here</div> */}


        </body>
        )     
    
}
}
export default (Cutstomers)