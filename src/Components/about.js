import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './about.css'
import './Contact'
import {Link, withRouter} from "react-router-dom"



class About extends Component{
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
           
                {/* <div className='trans-sign'>
                    <b> Sign-Up</b>
                </div> */}
                <a className='trans-sign' target="_blank" href="https://www.transtimeexpress.com/account/">Sign-Up</a>
                <div className='trans-log'>
                    <img className="profile" src='https://i.imgur.com/mugWDO5.png'/>
                    {/* <b className='login'>Log in</b> */}
                    <a className='login' target="_blank" href="https://order.mydispatch.com/Default.aspx?OfficeAccount=250478">Log in</a>
                </div>
            </header>

        </section>

       <div>
           <p className='meet-header'>Meet the Tran Time Express Team</p>
           </div>

 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Mona-Toosi.jpg"/>
         <p>Mona Toosi</p>
         <p>Chief Executive Officer</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Ali-Sherafaddin.jpg"/>
         <p>ALI SHERAFADDIN</p>
         <p>CHIEF OPERATIONS MANAGER</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Bobby-Sharafeddin.jpg"/>
         <p>BOBBY SHARAFEDDIN</p>
         <p>VP_OPERATIONS MANAGER</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Sean-Molkara.jpg"/>
         <p>SEAN MOLKARA</p>
         <p>CHIEF FINANCIAL OFFICER</p>
     </div>
 </section>
 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Ben-Diyoun.jpg"/>
         <p>BEN DIYOUN</p>
         <p>OFFICE MANAGER</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/AJ-Sharafeddin.jpg"/>
         <p>AJ SHARAFEDDIN</p>
         <p>REGIONAL MANAGER</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Scott-Smolinski.jpg"/>
         <p>SCOTT SMOLINSKI</p>
         <p>LOGISTICS MANAGER</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Scott-Kristiansen.jpg"/>
         <p>SCOTT KRISTIANSEN</p>
         <p>LOGISTICS MANAGER</p>
     </div>
 </section>
 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Naz-Zori.jpg"/>
         <p>NAZ ZORI</p>
         <p>ACCOUNT EXECUTIVE</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/TC-Barbett.jpg"/>
         <p>TC BARBETT</p>
         <p>CSR MANAGER</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Bob_white.jpg"/>
         <p>BOB WHITE</p>
         <p>WAREHOUSE MANAGER</p>
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Joe-Schaufele.jpg"/>
         <p>JOE SCHAUFELE</p>
         <p>DIRECTOR OF SPECIAL OPERATIONS</p>
     </div>
 </section>
<div className='meet-header'>
    <p>Testimonials</p>
</div>
 <section>
     <div className='testimonial-section'>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
  
     </div>
 </section>

 <section>
     <div className='testimonial-section'>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
  
     </div>
 </section>
        {/* <div className='filler-footer'> filler footer here</div> */}


        </body>
        )     
    
}
}
export default (About)