import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Services.css'
import {Link, withRouter} from "react-router-dom"



class Services extends Component{
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

<section className='service-header'>
    <div>
        <p className='service-call'> call to action</p>
        <p className='service-info'> a bit more info</p>
        <button className='service-button'>something here</button> 
    </div>
</section>

<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p>name</p>
     <p> description, here is some filler to fill in the </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p>name</p>
    <p> description, here is some filler to fill in the </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p>name</p>
    <p> description, here is some filler to fill in the </p>
</div>

</section>
<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p>name</p>
     <p> description, here is some filler to fill in the </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p>name</p>
    <p> description, here is some filler to fill in the </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p>name</p>
    <p> description, here is some filler to fill in the </p>
</div>

</section>
        {/* <div className='filler-footer'> filler footer here</div> */}


        </body>
        )     
    
}
}
export default (Services)