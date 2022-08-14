import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Customers.css'
import {Link, withRouter} from "react-router-dom"



class Cutstomers extends Component{
    state = {
        divcontainer: false
    }
    render(){
        // var Handlechange = e =>
        // {
        //     this.setstate({divcontainer: !this.state.divcontainer})
        // }
        // const x=this.state.divcontainer
        return(
        <body className='body'>

        <div className='customer-header'> 
        <p className='cust-text'>Meet the happy clients that trust Trans Time Express</p></div>
        {/* <section>
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
        </section> */}
        <section className='customer-box'>
            <div>
<img className="customer-logo6" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/08-CLN.jpg"/>
<img className="customer-logo6" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/09-CLN.jpg"/>
<img className="customer-logo6" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/06-CLN.jpg"/>
<img className="customer-logo6" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/03-CLN.jpg"/>
<img className="customer-logo6" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Smithsonian_Channel.png"/>
<img className="customer-logo6" src="https://childrensnational.org/images/facebook/CNHSFBdefault.jpg"/>

            </div>
            <div>
<img className="customer-logo6" src="https://upload.wikimedia.org/wikipedia/en/9/99/TVOne_2016.png"/>
<img className="customer-logo6" src="https://henryadams.com/sites/default/files/styles/portfolio_highlighted_image/public/MWAA.png"/>
<img className="customer-logo6" src="https://www.e-arc.com/wp-content/themes/earcv4/assets/lib/theme/media/arc-logo.png"/>
<img className="customer-logo6" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGmlXrcRcdHlg/company-logo_200_200/0/1624048263998?e=2147483647&v=beta&t=Mr9wbkl4msh4K8o2YinTay8FA9DOKmudSOZHiavVZ9I"/>
<img className="customer-logo6" src="https://pbs.twimg.com/profile_images/1171849118886633477/_P9kJC-3_400x400.jpg"/>
<img className="customer-logo6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/American_Red_Cross_Logo.svg/1200px-American_Red_Cross_Logo.svg.png"/>

            </div>
            <div>
<img className="customer-logo6" src="https://www.wellspan.org/media/2457230/WellSpan-Health.png"/>
<img className="customer-logo6" src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/2048760-wbal-mercy-1-1607018187.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"/>
<img className="customer-logo6" src="https://yt3.ggpht.com/8MkOSL9RiBnazmKg3YV0GwwWUYvSlPboFmZA7UufZ7OjyVxeuBd1KoIT2UoggJvbxdo0x1fxpA=s900-c-k-c0x00ffffff-no-rj"/>
<img className="customer-logo6" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/05-CLN.jpg"/>
<img className="customer-logo6" src="https://www.hjf.org/themes/custom/hjf/logo.svg"/>
<img className="customer-logo6" src="https://www.montgomerycountymd.gov/mcgresponsive/Resources/Images/countyseal.png"/>

            </div>
            {/* <div>
<img className="customer-logo2" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Smithsonian_Channel.png"/>
<img className="customer-logo2" src="https://childrensnational.org/images/facebook/CNHSFBdefault.jpg"/>
<img className="customer-logo3" src="https://upload.wikimedia.org/wikipedia/en/9/99/TVOne_2016.png"/>
<img className="customer-logo4" src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/03-CLN.jpg"/>

            </div> */}
        </section>




        </body>
        )     
    
}
}
export default (Cutstomers)