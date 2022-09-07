import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ReactDOM } from 'react'
import axios from 'axios'
// import "../Testimonials.css"
// import './Contact'
import {Link, withRouter} from "react-router-dom"
import "./Register.css"



class Register extends Component{
    render(){



        return(
        <body className='body'>
<div className='reg-head'>
<h1 className='reg-header-text'>New Account</h1>
</div>

<div className='form-header'>
    <p className='form-text'>Please fill out this form and one of our customer service representatives will be in touch with you shortly.</p>
</div>

<section>
<div>
  
<input className='register-mid' placeholder='Full Name'></input>
<input className='register-mid' placeholder='Title'></input>
<input className='register60' placeholder='Company Name'></input>
<input className='register30' placeholder='Company Classification'></input>
<input className='register-mid' placeholder='Your Phone Number'></input>
<input className='register-mid' placeholder='After Hours Phone Number'></input>
<input className='register-full' placeholder='Your Fax Number'></input>
<input className='register-full' placeholder='Your E-Mail Address'></input>
</div>

<p className='reg-head-text'>Address</p>
<div>
<input className='register-small' placeholder='Your Address'></input>
<input className='register-small' placeholder='City'></input>
<input className='register-small' placeholder='State'></input>
<input className='register-small' placeholder='Zipcode'></input>
</div>

<p className='reg-text'>Courier Account Contact</p>
<input className='register-full' placeholder='Full Name'></input>
<p className='reg-text'>Authorized callers</p>
<input className='register-full' placeholder='Full Name'></input>
<p className='reg-text'>Accounts Payable Contact</p>
<input className='register-full' placeholder='Full Name'></input>
<div className='reg-text-box'>
<p className='reg-text2'>Online User Name</p> <p className='reg-text2'>Online Password</p>
</div>
<input className='register-mid' placeholder='Online User Name'></input>

<input className='register-mid' placeholder='Online Password'></input>

<button className='reg-button'>Submit</button>


</section>

 


        </body>
        )     
    
}
}
export default (Register)