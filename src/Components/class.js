import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './Class.css'
import {Link, withRouter} from "react-router-dom"




class Class extends Component{
render(){
    return(
        <div className="contact-box">
            <div className="header"><div className="header-text"><b className="cod">CODING </b> 
            <div className="it"><b className="oc">OC</b></div>
            <Link to="/"> 
            <button className="header-but">Home</button>
            </Link>

           
            <Link to="/Class1">
            <button className="header-but">Courses</button>
            </Link>
            </div>
            </div>
          

            <div > <img className="first-image1" src="https://cdn-e-careers.scdn5.secure.raxcdn.com/images/kids-coding-introduction-to-html-css-javascript.jpg"/> </div>
            <div className="info1"><b className="info-title2">Info</b>
            <div className="class-info-1"> 
          
          <p className="idk"><b>Pricing: </b>$150 per student</p>
           <p className="idk"> <b>Hours:</b> Monday-Friday from 4-5 pm</p>
           <p className="idk"><b>Course Length: </b>2 weeks</p>
           <p className="idk"><b>Language:</b> HTML, CSS</p>
           <p className="idk"><b>Ages:</b> 11-15</p>
           <p className="idk"><b>prerequisite:</b> none</p>
           <p className="idk"><b>Skills:</b> Web Development</p>
           <p className="idk"><b>Difficulty:</b> Beginner</p>
           </div>
                </div>

                <div className="classses"> 
            <div className="class-info-1">
               <img className="class-pic" src="https://codewizardshq.com/wp-content/uploads/2016/08/kids_coding_website_tie_dye_girl.jpg"/>
               <div className="class-text">
                   <div className= "classheader"></div>
                   <h1 className= "classheader1">Junior Web Design</h1>
                   <p className="text-class">Students will learn the basics of HTML and CSS, giving them the building blocks to 
                       learn about the advanced uses of web design.</p></div>
           </div>
            
                    </div>
           
           <div className="contact-box">
              <div className="tech-stack"> </div>
           <div className="class-info-1">
               <div className="class-text">
               <div className= "classheader"></div>
                   <h1 className= "classheader1">Students will learn</h1>
                   <p className="text-class">-The Basics of html and css</p>
                   <p className="text-class2">-General web design tips</p>
                   <p className="text-class2">-How to create their own web aplication</p>
                  
                   <p className="text-class2">-The ability to clone most websites</p></div>
               <img className="class-pic2" src="https://www.intego.com/mac-security-blog/wp-content/uploads/2017/06/kids-coding-safer-online.jpg"/>

           </div>

           
           <div className="code-box2">

           <div className="classes1"> 
            <div className="class-info-1">
               <img className="class-pic3" src="https://factsmgt.com/wp-content/uploads/KidsCoding.jpg"/>
               <div className="class-text">
                   <h3 className= "classheader1">Available courses</h3>
                   <p className= "classheader2">Course 1</p>
                   <p className="text-class2">Nov 9- Nov 20</p>
                   <p className="text-class2">Monday - Friday from 4 - 5</p>
                
                   <p className= "classheader2">Course 2</p>
                   <p className="text-class2">Nov 14- Nov 22</p>
                   <p className="text-class2">Saturday - Sunday from 1 - 3:30</p>
                
                   </div>
                   <div className="course-sign-up">
                   <b>E-mail RSpenc12345@yahoo.com to sign-up</b>
                   </div>
           </div>
            
                    </div>
              


                
                </div>
                </div>

            



                <footer className='footer'>
    <div className='footer-left'>
<img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/>
<p className='footer-cc'>Trans Time Mobile. All Rights Reserved
</p>
</div>
<div className='footer-box1'> 
    <p>Services</p>
    <p>News</p>
    <p>Career</p>
    <p>Contact</p>
   
    </div>

    <div className='footer-box2'> 
    <p>Company</p>
    <p>About</p>
    <p>History</p>
    <p>Community</p>
    <p>Site Map</p>
    </div>
    
</footer>

        </div>
        
    )
}
}
export default (Class)