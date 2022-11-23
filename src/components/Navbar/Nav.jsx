import React from 'react';
import './Navbar.css';
import NavLarge from "./NavLarge";
import NavShort from "./NavShort";

const Nav = (props) => {
    return (
        <div className={props.showMore ? 'navContainer short' : "navContainer"}>
            {props.showMore ? <NavShort medications={props.medications}/> : <NavLarge medications={props.medications}/>}
        </div>
    );
};

export default Nav;