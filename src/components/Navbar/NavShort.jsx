import React from 'react';

const NavShort = (props) => {
    return (
        <div className='navShortContainer'>
            <div className='burgerIcon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="black" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="black" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="black" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <ul className='navShortList'>
                <li className='listItemActive'><img src={props.medications[2].Purposes[0].PurposePicture} alt=""/></li>
                <li><img src={props.medications[1].Purposes[0].PurposePicture} alt=""/></li>
                <li><img src={props.medications[2].Purposes[1].PurposePicture} alt=""/></li>
                <li><img src={props.medications[1].Purposes[1].PurposePicture} alt=""/></li>
                <li><img src={props.medications[6].Purposes[1].PurposePicture} alt=""/></li>
                <li><img src={props.medications[3].Purposes[0].PurposePicture} alt=""/></li>
                <li><img src={props.medications[0].Purposes[1].PurposePicture} alt=""/></li>
                <li><img src={props.medications[0].Purposes[0].PurposePicture} alt=""/></li>
                <li><img src={props.medications[10].Purposes[1].PurposePicture} alt=""/></li>
                <li><img src={props.medications[6].Purposes[2].PurposePicture} alt=""/></li>
                <li><img src={props.medications[8].Purposes[0].PurposePicture} alt=""/></li>
                <li><img src={props.medications[9].Purposes[0].PurposePicture} alt=""/></li>
                <li><img src={props.medications[3].Purposes[2].PurposePicture} alt=""/></li>
            </ul>
        </div>
    );
};

export default NavShort;