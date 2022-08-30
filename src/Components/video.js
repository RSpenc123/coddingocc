import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './video.css'
import {Link, withRouter} from "react-router-dom"
// import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';







class Video extends Component{
    render(){

        return(
        <body>
            potato
            {/* <div className='video'>ppp</div> */}
            <div class="ratio ratio-21x9">
  <iframe className='video' src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
            </body>
   ) }}


export default Video