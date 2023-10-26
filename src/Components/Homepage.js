import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './Homepage.css'
import {Link, withRouter} from "react-router-dom"



class Homepage extends Component{
render(){
    return(
        <div className="contact-box">
          
            <div >
            <div className="header"><div className="header-text"><b className="cod">CODING </b> 
            <div className="it"><b className="oc">OC</b></div>
            
                <Link to="/"> 
            <button className="header-but">Home</button>
            </Link>

            <Link to="/Class1">
            <button className="header-but2">Courses</button>
            </Link>
            

            </div>
            </div>
          

            <div > <img className="first-image" src="https://cdn.mos.cms.futurecdn.net/2yfHts3tFM2xkmPHvzvxvZ.jpg"/>
            <img className="second-image" src="https://www.bostontechmom.com/wp-content/uploads/2019/03/Coding-Class-for-Kids.jpg"/> </div>
            
            <div className="info"> <b className="info-title1">LIVE</b><p className="info-title"> Online coding programs for ages 11-15</p>
           <div className="box-0">
            <div className="box-1">
            <b className="contact-title">Is your child interested in coding?</b>
                
                <p className="info-content">
            Register for a class and get additional information about our courses</p>
            <div><Link to="/Class1"> <button className="red-button">LEARN MORE</button></Link></div></div>
            <div className="box-2">
            <p className="info-content1">
            Coding OC strives to inspire children to learn the fundamentals of coding which gives them skills that they can build on in order to be relevant in today's highly competitive technological world.
             Our program consists of small and interactive classes which allows each child to benefit from individual instruction from the owner and founder of Coding OC, Reid Spencer.
                </p> </div>
                </div>
                </div>


                <b className="info-title1-small">LIVE ONLINE CLASSES</b></div>
                
                <div className="box-3">
            
                
                <p className="info-content">
            Register for a class and get additional information about our courses</p>
            <div><Link to="/Class1"> <button className="red-button">LEARN MORE</button></Link></div></div>


            <div className="box-3">
            <p className="info-content1">
            Coding OC strives to inspire children to learn the fundamentals of coding which gives them skills that they can build on in order to be relevant in today's highly competitive technological world.
             Our program consists of small and interactive classes which allows each child to benefit from individual instruction from the owner and founder of Coding OC, Reid Spencer.
                </p>  </div>
                


           
           <div className="contact-box">
              <div className="tech-stack"> <b className="tech">Tech </b> <p>stack</p></div>
           
           
          
               {/* <div className="code-filler"><p className="languages">LANGUAGES</p></div> */}
               <div className="code-box">

                <div className="contact">
            <div> 
                
            <div className="code-type-box">
            <div className="code-box" > <img  className="code-type" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"/></div>
            <div className="code-box"> <img  className="code-type" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/></div>
            <div className="code-box"> <img  className="code-type" src="https://cdn.auth0.com/blog/react-js/react.png"/></div>
            <div className="code-box"> <img  className="code-type" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"/></div>
            <div className="code-box"> <img  className="code-type" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"/></div>
            <div className="code-box"> <img  className="code-type" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/></div>
  
           
            </div>
                </div></div>
                </div>
                </div>





                



           

            <div className="classes"> <b className="courses-title">Courses</b>
            {/* <p>Currently we are only providing the basic web development course, however we plan to add more courses in the future.</p>  */}
            
            <div className="course-box">
            <div className="courses">
            <img className="course-image"src="https://teachyourkidscode.com/wp-content/uploads/2018/12/Teach-Your-Kids-Code-Front-Page-Image-1.jpg"/>
            
            <div><h4 className="title">  Junior Web Design</h4>
            <div className="course-content"><p className="ages"> <b>Ages: </b>11-15</p>
            <div className="coursess"><p className="course"><b>Course:</b>web design</p> 
            <p className="level"> <b>Level:</b> Beginner to Intermediate</p>
            <p><b>Session: </b> Weekends and Weekdays</p>
            <Link to="/Class1"><button>Info</button> </Link>
           </div>
           </div></div>
                </div>
                </div>


            

                

                {/* <p> Your child will learn the basics of designing a website. Going into basic HTMl and CSS in order for them to learn all the 
                necessary practices when learning about designing their own websites. By the end of the course students should be able to create a basic html 
                web page on their own and styalize it however they want through basic CSS.</p>
                <p>Available hours.

                    </p>
                    <p>Monday through Friday 4 PM - 5PM- 2 week course</p>
                    <p>Monday through Friday 5 PM - 6PM- 2 week course</p>

                    <p>Satuday-Sunday 10 am- 12:30 am</p>
                    <p>Saturday-Sunday 1 am - 3:30 am</p>
                    <p> E-mail RSPenc12345@yahoo.com if interested or if you have any questions</p> */}
                    </div>
                   
                   
                   
                    <div className="classes2"> <b className="courses-title">Courses</b>
            
            
            <div className="course-box2">
            <div className="courses">
            <img className="course-image"src="https://i.imgur.com/JYe8IYE.jpg"/>
            
            <div><h4 className="title">  Junior Web Design</h4>
            <p className="ages2"> <b>Ages: </b>11-15</p>
            <div className="coursess"><p className="course"><b>Course:</b>web design</p> 
            <p className="level"> <b>Level:</b> Beginner to Intermediate</p>
            <p><b>Session: </b> Weekends and Weekdays</p>
            <Link to="/Class1"><button>Info</button> </Link>
           
           </div></div>
                </div>
                </div>
                </div>



                    {/* <footer className="footer">
                        <div className="footer-content"> 
                            <p> contact us at xxxxxxxxxx</p>
                            <div className="social-box"><img  className="social"src="https://dwglogo.com/wp-content/uploads/2016/06/1024px_Facebook_logo.png"/>
                            <img className="social" src="https://toppng.com/public/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png"/>
                            </div>
                        </div>
                    </footer> */}
                    <footer className="footer">Contact us at- RSpenc12345@yahoo.com</footer>

                   
        </div>
        
    )
}
}
export default (Homepage)