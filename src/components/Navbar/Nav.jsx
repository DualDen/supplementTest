import React from 'react';
import './Navbar.css';
import NavLarge from "./NavLarge";
import NavShort from "./NavShort";

const Nav = (props) => {
    return (
        <div className={props.showMore ? 'navContainer short' : "navContainer"}>
            {props.showMore ?
                <NavShort purpose={props.purpose} setPurpose={props.setPurpose} medications={props.medications}/> :
                <NavLarge purpose={props.purpose} setPurpose={props.setPurpose} medications={props.medications}/>}
        </div>
    );
};

export default Nav;