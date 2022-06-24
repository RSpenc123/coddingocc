import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./dropdown.css"

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
    return(
        <div className= {dropdown ? "service-submenu clicked": "service-submenu" }   onClick={() => setDropdown(!dropdown)}> 

<Link to ={'services'}
 onClick={() => setDropdown(false)}
>  potato </Link>
<p className='submenu-item'>item 1</p>
<p>item 2</p>
<p>item 3</p>
<p>item 4</p>
        </div>
    )
}
export default Dropdown