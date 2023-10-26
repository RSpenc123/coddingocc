import React, {useRef} from 'react'
import {Link, withRouter} from "react-router-dom"
import emailjs from '@emailjs/browser';
import "./Register.css"

const Register = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nlcg4oq', 'template_4bdueel', form.current, 'TodtX9pFFUvwnQfDw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

}

    return (
        <body className='body'>
<div className='reg-head'>
<h1 className='reg-header-text'>New Account</h1>
</div>

<div className='form-header'>
    <p className='form-text'>Please fill out this form and one of our customer service representatives will be in touch with you shortly.</p>
</div>




        <div>
<form ref={form} className='e'   onSubmit={sendEmail}>
<section>
<div>
  
<input className='register-mid' placeholder='Full Name'   name="full_name"></input>
<input className='register-mid' placeholder='Title' name="title"></input>
<input className='register60' placeholder='Company Name'  name="company_name"></input>
<input className='register30' placeholder='Company Classification' name="company_classification"></input>
<input className='register-mid' placeholder='Your Phone Number' name="phone_number"></input>
<input className='register-mid' placeholder='After Hours Phone Number' name="after_hours_phone_number"></input>
<input className='register-full' placeholder='Your Fax Number' name="fax_number" ></input>
<input className='register-full' placeholder='Your E-Mail Address'  name="email"></input>
</div>

<p className='reg-head-text'>Address</p>
<div>
<input className='register-small' placeholder='Your Address' name="address"></input>
<input className='register-small' placeholder='City' name="city"></input>
<input className='register-small' placeholder='State' name="state"></input>
<input className='register-small' placeholder='Zipcode' name="zipcode"></input>
</div>

<p className='reg-text'>Courier Account Contact</p>
<input className='register-full' placeholder='Full Name' name="account_contact"></input>
<p className='reg-text'>Authorized callers</p>
<input className='register-full' placeholder='Full Name' name="authorized_caller"></input>
<p className='reg-text'>Accounts Payable Contact</p>
<input className='register-full' placeholder='Full Name' name="accounts_payable_contact"></input>
<div className='reg-text-box'>
<p className='reg-text2'>Online User Name</p> <p className='reg-text2'>Online Password</p>
</div>
<input className='register-mid' placeholder='Online User Name' name="user_name" ></input>

<input className='register-mid' placeholder='Online Password' name="password" ></input>
<Link to="/">
<button type= "submit" className='reg-button'>Submit</button>
</Link>


</section>
</form>


        </div>

        </body>
    )


}
export default Register
