import React from 'react';
import {Link} from 'react-router-dom';
import HeaderItem from "../HeaderItem";

import './style.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-opacity">
            <div className="container-fluid">
                    <Link to='/' className="navbar-brand text-warning " href="#">STAR WARS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto  mb-lg-0  ">
                            <HeaderItem  itemName="Planets" link='/planets'/>
                            <HeaderItem itemName="People" link='/peoples'/>
                            <HeaderItem itemName="Species" link='/species'/>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header