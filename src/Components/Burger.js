import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./dropdown.css"
import { serviceBurger} from "./NavItems"

function BurgerDrop() {
    const [dropdown, setDropdown] = useState(false);
    return(
        <div 
        className= {dropdown ? "service-submenu clicked": "service-submenu" }   
        onClick={() => setDropdown(!dropdown)}> 

{serviceBurger.map((item)=> {
    return(
        <li key={item.id}>
            <Link
            to={item.path}
            className={item.cName}
            onClick={() =>  setDropdown(false)}>
{item.title}
            </Link>
        </li>
    )
}
)}
        </div>
    )
}
export default BurgerDrop