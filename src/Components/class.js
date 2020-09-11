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
            <div className="it"><b className="it">OC</b></div>
            <Link to="/"> 
            <button className="header-but">Home</button>
            </Link>

            {/* <button className="header-but">Info</button> */}
            <Link to="/Class1">
            <button className="header-but">Courses</button>
            </Link>
            </div>
            </div>
          

            <div > <img className="first-image" src="https://cdn-e-careers.scdn5.secure.raxcdn.com/images/kids-coding-introduction-to-html-css-javascript.jpg"/> </div>
            
            <div className="info"><b className="info-title1">Info</b>
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
                   <b>Junior Web Design</b>
                   <p>Students will learn the basics of HTML and CSS, giving them the building blocks to 
                       learn about the advanced uses of web design.</p></div>
           </div>
            
                    </div>
           
           <div className="contact-box">
              <div className="tech-stack"> </div>
           <div className="class-info-1">
               <div className="class-text">
                   <b>Students will learn</b>
                   <p>The Basics of html and css</p>
                   <p>General web design tips</p>
                   <p>How to create their own web aplication</p>
                  
                   <p>The ability to clone most websites</p></div>
               <img className="class-pic" src="https://www.intego.com/mac-security-blog/wp-content/uploads/2017/06/kids-coding-safer-online.jpg"/>

           </div>

           
           <div className="code-box">

           <div className="classes1"> 
            <div className="class-info-1">
               <img className="class-pic" src="https://factsmgt.com/wp-content/uploads/KidsCoding.jpg"/>
               <div className="class-text">
                   <h3>Available courses</h3>
                   <b>Course 1</b>
                   <p>Sep 28- Oct 9</p>
                   <p>Monday - Friday from 4-5</p>
                
                   <b>Course 2</b>
                   <p>oct 1- Oct 8</p>
                   <p>Saturday - Sunday from 1-3:30</p>
                
                   </div>
                   <div className="course-sign-up">
                   <b>E-mail RSpenc12345@yahoo.com to sign-up</b>
                   </div>
           </div>
            
                    </div>
              


                
                </div>
                </div>

            



                    <footer className="footer">Contact us at- RSpenc12345@yahoo.com</footer>

        </div>
        
    )
}
}
export default (Class)