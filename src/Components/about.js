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


       <section className='meet-header'>
           <div className='meet-background'> </div>
           <img className='about-img' src="https://i.imgur.com/o1M1fBU.jpg"/>
           <p className="meet-text">Meet the Trans Time Express Team  </p>
           {/* <div className='about-img' >        </div> */}
           
           
           
           </section>

 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Mona-Toosi.jpg"/>
         <p className='position'>CHIEF EXECUTIVE OFFICER</p>
           <p className='name'>MONA TOOSI</p>
     
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Ali-Sherafaddin.jpg"/>
         <p className='position'>CHIEF OPERATIONS MANAGER</p>
         <p className='name'>ALI SHERAFADDIN</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Bobby-Sharafeddin.jpg"/>
         <p className='position'>VP_OPERATIONS MANAGER</p>
         <p className='name'>BOBBY SHARAFEDDIN</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Sean-Molkara.jpg"/>
         <p className='position'>CHIEF FINANCIAL OFFICER</p>
          <p className='name'>SEAN MOLKARA</p>
        
     </div>
 </section>
 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Ben-Diyoun.jpg"/>
         <p className='position'>OFFICE MANAGER</p>
          <p className='name'>BEN DIYOUN</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/AJ-Sharafeddin.jpg"/>
         <p className='position'>REGIONAL MANAGER</p>
           <p className='name'>AJ SHARAFEDDIN</p>
      
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Scott-Smolinski.jpg"/>
         <p className='position'>LOGISTICS MANAGER</p>
          <p className='name'>SCOTT SMOLINSKI</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Scott-Kristiansen.jpg"/>
         <p className='position'>LOGISTICS MANAGER</p>
          <p className='name'>SCOTT KRISTIANSEN</p>
       
     </div>
 </section>
 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Naz-Zori.jpg"/>
         <p className='position'>ACCOUNT EXECUTIVE</p>
         <p className='name'>NAZ ZORI</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/TC-Barbett.jpg"/>
         <p className='position'>CSR MANAGER</p>
          <p className='name'>TC BARBETT</p>
      
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Bob_white.jpg"/>
         <p className='position'>WAREHOUSE MANAGER</p>
          <p className='name'>BOB WHITE</p>
       
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Joe-Schaufele.jpg"/>
         <p className='position'>DIRECTOR OF SPECIAL OPERATIONS</p>
          <p className='name'>JOE SCHAUFELE</p>
         
     </div>
 </section>
{/* <div className='meet-header'>
    <p>Testimonials</p>
</div> */}
 {/* <section>
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
 </section> */}


        </body>
        )     
    
}
}
export default (About)