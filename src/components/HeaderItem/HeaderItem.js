import React from 'react';
import {Link} from "react-router-dom";

import './style.css'


function HeaderItem(props) {
    console.log(props)
    return (

        <li className='nav-item'>
            <Link to={props.link} className='nav-link text-warning'>{props.itemName}</Link>
        </li>


    )
}

export default HeaderItem;