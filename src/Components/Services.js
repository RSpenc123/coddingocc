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
        <p className='service-call'> SERVICES</p>

    </div>
</section> */}

<section className='meet-header'>
           <div className='services-background'> </div>
           <img className='about-img' src="https://i.imgur.com/fEVq8xt.jpg"/>
           <p className="contact-text">Services </p>
           {/* <div className='about-img' >        </div> */}
           
           
           
           </section>










<section className='service-items'>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/h797BtJ.png"/>
    <p className='service-name'>LOCAL COURIER DELIVERY</p>
     <p className='service-description'>Our customers trust us to deliver their packages locally on time and accurately, which is why we serve so many of the areas professional firms. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon2" src="https://i.imgur.com/NJec4Bt.png"/>
    <p className='service-name1'>VAN & TRUCK DELIVERIES</p>
     <p className='service-description'> Our van and truck services can get your boxes, large or bulky items to their destination in a matter of hours. Unlike the larger shippers and movers, we can pick up and deliver your items anywhere at anytime. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/9cAk7Vr.png"/>
    <p className='service-name'>Warehousing/Distribution/Logistics Mgt</p>
    <p className='service-description'> Whether you need storage for weeks or months, we are ready to store your inventory and offer distribution and final mile services anywhere in the DMV area. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/AgBEgE4.png"/>
    <p className='service-name'>OFFICE MOVERS</p>
    <p className='service-description'> Our office moving subsidiary, Office Movers Express, offers complete office relocation services along with warehousing and storage solutions for all your moving needs.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/Om4OXPZ.png"/>
    <p className='service-name'>LEGAL FILINGS</p>
    <p className='service-description'>Washington Express provides complete legal filing courier service to every courthouse and government agency in the Washington, DC metropolitan area. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/QdNBndw.png"/>
    <p className='service-name'>PHARMACEUTICAL DELIVERY
</p>
    <p className='service-description'> We specialize in urgent, on-demand pharmaceutical and healthcare deliveries with tailored solutions to meet your client's needs and 24/7/365 availability.</p>
</div>




<div className='service-boxes'>
   <img className="service-icon" src="https://i.pinimg.com/originals/99/91/a4/9991a4b887eeee54f30b282f222a42a8.png"/>
    <p className='service-name'>STORAGE & FULFILLMENT SOLUTIONS</p>
    <p className='service-description2'> Whether you need storage for weeks or months, we are ready to store your inventory and offer distribution and final mile services anywhere in the DMV area.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon3" src="https://i.imgur.com/aj4Erbr.png"/>
    <p className='service-name'>RESEARCH & RETRIEVAL</p>
    <p className='service-description'> Our legal team will research, locate and retrieve your important documents from any local, state and Federal agency. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/NOcuAHI.png"/>
    <p className='service-name'>DRIVER LEASING
</p>
    <p className='service-description'> Learn more about our drivers for hire. At a low daily rate, access our full fleet of cars, vans and trucks when you're in need of additional or fill-in drivers.

</p>
</div>




<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/qHFJYVG.png"/>
    <p className='service-name'>VISA, PASSPORTS & DOCUMENTATION</p>
     <p className='service-description2'> We provide expedited Visa processing and document authentication services with same day pick up and delivery to every Embassy in the Washington, DC area. </p>
</div>

<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/YmhGqF8.png"/>
    <p className='service-name'>TRIAL SITE SHIPPING</p>
    <p className='service-description'> With a specialty in trial site shipments, Washington Express can pack, crate, deliver and assist in setting up your trial materials and war room equipment. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/wp3rIZ7.png"/>
    <p className='service-name'>TRADE SHOW LOGISTICS</p>
     <p className='service-description'> Our comprehensive convention and trade show moving services can coordinate the difficult navigation of your booths, materials and exhibits safely. </p>
</div>


<div className='service-boxes'>
   <img className="service-icon4" src="https://i.imgur.com/NOP1opU.png"/>
    <p className='service-name'>FEDERAL GOVERNMENT COURIER
</p>
     <p className='service-description'>Our couriers are specialists in urgent, on-demand, same day package delivery for our federal government and commercial customers.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon5" src="https://i.imgur.com/2nA6zZJ.png"/>
    <p className='service-name1'>CAPITOL HILL DELIVERY</p>
    <p className='service-description'> Our couriers are well trained in Capitol Hill's special requirements and procedures for Capitol Hill deliveries. We also specialize in coordinating and delivering large distributions to congressional office buildings.</p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/5sbdQTe.png"/>
    <p className='service-name'>WASHINGTON DC LINE STANDING</p>
    <p className='service-description'> Washington Express provides professional, competitively priced Line-standing and seat holding services for congressional and judicial hearings. </p>
</div>
<div className='service-boxes'>
   <img className="service-icon" src="https://i.imgur.com/ALkwRK6.png"/>
    <p className='service-name'>FINAL MILE SERVICES</p>
    <p className='service-description'> Last mile delivery services in the DMV region and custom delivery schedules for your distribution needs. Fulfillment services for easy distribution.</p>
</div>

<img className = "service-image" src="https://veteransdistribution.com/wp-content/uploads/2020/07/pre-delivery-inspections.jpeg"/>




<div className='service-boxes1'>
   <img className="service-icon" src="https://i.imgur.com/5rObpzN.png"/>
    <p className='service-name'>OUT OF TOWN FILINGS</p>
     <p className='service-description'> If you are out of town and need something filed or delivered to a court, agency, company or opposing counsel in the DC, MD or VA area, you can email your documents to us.</p>
</div>
<div className='service-boxes1'>
   <img className="service-icon" src="https://i.imgur.com/H3tnUEC.png"/>
    <p className='service-name'>AIR & GROUND DELIVERY</p>
    <p className='service-description'> Washington Express is available for pickups and/or deliveries 24 hours a day, 365 days a year. We offer time critical priority deliveries to anywhere in the U.S. and internationally. </p>
</div>


</section>
<section className='service-items'>



</section>


        </body>
        )     
    
}
}
export default (Services)