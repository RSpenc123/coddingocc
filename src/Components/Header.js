import React, {useState} from 'react'
import {Link} from "react-router-dom"

import "./Header.css"
import { navItems,burger} from "./NavItems"
import Dropdown from './dropdown.js'


function Header() {
    const [dropdown, setDropdown] = useState(false);
    
    return(
<div className='transport-header'>

   <ul className='nav-items'>
   <img className="profile2" src='https://i.imgur.com/6NXD3qj.png'/>
   <Link to={`/nav`}> <img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/> </Link>
               
       {navItems.map((item) => {
           if (item.title === "Company"){
            return(
                <li key={item.id} className={item.cName}
                onMouseEnter={() =>setDropdown(true)}  
                onMouseLeave={() =>setDropdown(false)} 
                >
                    <Link to={item.path} 
                  
                     >{item.title}</Link>
                 {dropdown &&<Dropdown/>}
                </li>
                );
           }
           return(
           <li key={item.id} className={item.cName}>
               <Link to={item.path}>{item.title}</Link>

           </li>
           );
       })}
            <a className='trans-sign' target="_blank" href="https://www.transtimeexpress.com/account/">Sign-Up</a>
                <div className='trans-log'>
                    <img className="profile" src='https://i.imgur.com/mugWDO5.png'/>
         
                    <a className='login' target="_blank" href="https://order.mydispatch.com/Default.aspx?OfficeAccount=250478">Log in</a>
                </div>
                <p className='medium-drop'>Home</p>
                <p className='medium-drop'>About</p>
                <p className='medium-drop'>Services</p>
                <p className='medium-drop'>Profile</p>
               
               
               
               
                {/* {burger.map((item) => {
           if (item.title === "burger"){
            return(
                <li key={item.id} className={item.cName}
                onMouseEnter={() =>setDropdown(true)}  
                onMouseLeave={() =>setDropdown(false)} 
                >
                    <Link to={item.path} 
                  
                     >
                        <img className='theburger' src="https://i.imgur.com/6NXD3qj.png"/>
                     </Link>
                 {dropdown &&<Dropdown/>}
                </li>
                );
           }
           return(
           <li key={item.id} className={item.cName}>
               <Link to={item.path}>{item.title}</Link>

           </li>
           );
       })} */}





   </ul>
   {/* <Dropdown/> */}
</div>

    )
}
export default Header