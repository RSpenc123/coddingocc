import React, {useState} from 'react'
import {Link} from "react-router-dom"

import "./Header.css"
import { navItems} from "./NavItems"
import Dropdown from './dropdown.js'


function Header() {
    const [dropdown, setDropdown] = useState(false);
    
    return(
<div className='transport-header'>

   <ul className='nav-items'>
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
   </ul>
   {/* <Dropdown/> */}
</div>

    )
}
export default Header