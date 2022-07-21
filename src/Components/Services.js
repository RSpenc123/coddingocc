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
       


{/* <section className='service-header'>
    <div>
        <p className='service-call'> call to action</p>
        <p className='service-info'> a bit more info</p>
        <button className='service-button'>something here</button> 
    </div>
</section> */}

<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p className='service-name'>LOCAL COURIER DELIVERY</p>
     <p className='service-description'>Our customers trust us to deliver their packages locally on time and accurately, which is why we serve so many of the areas professional firms. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://www.inboundlawmarketing.com/wp-content/uploads/2021/08/scales_full-300x300.jpg"/>
    <p className='service-name'>LEGAL FILINGS</p>
    <p className='service-description'>Washington Express provides complete legal filing courier service to every courthouse and government agency in the Washington, DC metropolitan area. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/ZH4sn6j.png"/>
    <p className='service-name'>PHARMACEUTICAL DELIVERY
</p>
    <p className='service-description'> We specialize in urgent, on-demand pharmaceutical and healthcare deliveries with tailored solutions to meet your client's needs and 24/7/365 availability.</p>
</div>

</section>
<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon2" src="https://flyclipart.com/thumb2/japanese-mini-truck-clipart-135706.png"/>
    <p className='service-name'>VAN & TRUCK DELIVERIES</p>
     <p className='service-description'> Our van and truck services can get your boxes, large or bulky items to their destination in a matter of hours. Unlike the larger shippers and movers, we can pick up and deliver your items anywhere at anytime. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.pinimg.com/originals/99/91/a4/9991a4b887eeee54f30b282f222a42a8.png"/>
    <p className='service-name'>STORAGE & FULFILLMENT SOLUTIONS</p>
    <p className='service-description2'> Whether you need storage for weeks or months, we are ready to store your inventory and offer distribution and final mile services anywhere in the DMV area.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon3" src="https://media.istockphoto.com/vectors/scrutiny-document-plan-icon-in-flat-style-review-statement-vector-on-vector-id1035413550?k=20&m=1035413550&s=612x612&w=0&h=paFXpKkskE9-cDZCR-EXN7bmdwK_yUjOw-wiZjRjOv8="/>
    <p className='service-name'>RESEARCH & RETRIEVAL</p>
    <p className='service-description'> Our legal team will research, locate and retrieve your important documents from any local, state and Federal agency. </p>
</div>

</section>
<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon" src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-black-rounded-passport-element-image_1174468.jpg"/>
    <p className='service-name'>VISA, PASSPORTS & DOCUMENTATION</p>
     <p className='service-description2'> We provide expedited Visa processing and document authentication services with same day pick up and delivery to every Embassy in the Washington, DC area. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://grid.gograph.com/truck-with-boxes-and-courier-eps-illustration_gg71281839.jpg"/>
    <p className='service-name'>OFFICE MOVERS</p>
    <p className='service-description'> Our office moving subsidiary, Office Movers Express, offers complete office relocation services along with warehousing and storage solutions for all your moving needs.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://img.favpng.com/18/16/18/drawing-microscope-computer-icons-clip-art-png-favpng-nppWFnjsu3p8aGC2Xjvw4NywA.jpg"/>
    <p className='service-name'>TRIAL SITE SHIPPING</p>
    <p className='service-description'> With a specialty in trial site shipments, Washington Express can pack, crate, deliver and assist in setting up your trial materials and war room equipment. </p>
</div>

</section>
<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon4" src="https://media.istockphoto.com/vectors/courthouse-icon-flat-vector-template-design-trendy-vector-id1222068323?k=20&m=1222068323&s=612x612&w=0&h=XcravWfpjswLGbJr4lRuvvFdp1IXHwvw8p-3dGXKh8Q="/>
    <p className='service-name'>FEDERAL GOVERNMENT COURIER
</p>
     <p className='service-description'>Our couriers are specialists in urgent, on-demand, same day package delivery for our federal government and commercial customers.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon4" src="https://thumbs.dreamstime.com/b/passing-laws-code-conduct-silhouette-icon-bill-judgment-black-simple-illustration-document-gavel-flat-isolated-vector-212409690.jpg"/>
    <p className='service-name'>CAPITOL HILL DELIVERY</p>
    <p className='service-description'> Our couriers are well trained in Capitol Hill's special requirements and procedures for Capitol Hill deliveries. We also specialize in coordinating and delivering large distributions to congressional office buildings.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p className='service-name'>WASHINGTON DC LINE STANDING</p>
    <p className='service-description'> Washington Express provides professional, competitively priced Line-standing and seat holding services for congressional and judicial hearings. </p>
</div>

</section>
<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/kCACdFp.jpg"/>
    <p className='service-name'>OUT OF TOWN FILINGS</p>
     <p className='service-description'> If you are out of town and need something filed or delivered to a court, agency, company or opposing counsel in the DC, MD or VA area, you can email your documents to us.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://media.istockphoto.com/illustrations/airplane-illustration-id1131327523?k=20&m=1131327523&s=612x612&w=0&h=dhmTkm2Zus4a1B1siVbANid9L1gGZHXjVEKtwLX6hR8="/>
    <p className='service-name'>AIR & GROUND DELIVERY</p>
    <p className='service-description'> Washington Express is available for pickups and/or deliveries 24 hours a day, 365 days a year. We offer time critical priority deliveries to anywhere in the U.S. and internationally. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3aZd266_UeaJPBRXy81Mfg_hXtGcPNOtctHDoTH9IlBlgYk0ylbTm38tCWLEIw0A9V0&usqp=CAU"/>
    <p className='service-name'>FINAL MILE SERVICES</p>
    <p className='service-description'> Last mile delivery services in the DMV region and custom delivery schedules for your distribution needs. Fulfillment services for easy distribution.</p>
</div>

</section>
<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon" src="https://img.favpng.com/20/8/8/computer-icons-logistics-transport-clip-art-scalable-vector-graphics-png-favpng-MwQmGgv498X6mk6pyUStw0YLQ.jpg"/>
    <p className='service-name'>TRADE SHOW LOGISTICS</p>
     <p className='service-description'> Our comprehensive convention and trade show moving services can coordinate the difficult navigation of your booths, materials and exhibits safely. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EnEfeq4bBq2rbmfvtwnicOjCjV3P6AxmXQ&usqp=CAU"/>
    <p className='service-name'>DRIVER LEASING
</p>
    <p className='service-description'> Learn more about our drivers for hire. At a low daily rate, access our full fleet of cars, vans and trucks when you're in need of additional or fill-in drivers.

</p>
</div>
{/* <div className='service-boxes'>
   <img className="service-icon" src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png"/>
    <p className='service-name'>name</p>
    <p className='service-description'> description, here is some filler to fill in the </p>
</div> */}

</section>
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


        </body>
        )     
    
}
}
export default (Services)