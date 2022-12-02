import React from 'react';

const NavShort = (props) => {
    return (
        <div className='navShortContainer'>
            <div className='burgerIcon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke="black" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M3 6H21" stroke="black" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M3 18H21" stroke="black" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </div>
            <ul className='navShortList'>
                <li onClick={() => {
                    props.setPurpose('Anti-age')
                }} className={props.purpose === "Anti-age" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Clock.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Антистресс')
                    }} className={props.purpose === "Антистресс" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Anti-stress.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Антиоксиданты')
                    }} className={props.purpose === "Антиоксиданты" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Antioksi.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Женское здоровье')
                    }} className={props.purpose === "Женское здоровье" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Woman.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Здоровый сон')
                    }} className={props.purpose === "Здоровый сон" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Sleep.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Кожа, волосы, ногти')
                    }} className={props.purpose === "Кожа, волосы, ногти" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Hair.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Крепкий иммунитет')
                    }} className={props.purpose === "Крепкий иммунитет" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Health.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Мужское здоровье')
                    }} className={props.purpose === "Мужское здоровье" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Men.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Омега, жирные кислоты')
                    }} className={props.purpose === "Омега, жирные кислоты" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Omega.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Память и внимание')
                    }} className={props.purpose === "Память и внимание" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Memory.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Похудение и стройность')
                    }} className={props.purpose === "Похудение и стройность" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Slimming.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Спокойствие и фокус')
                    }} className={props.purpose === "Спокойствие и фокус" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Calmness.svg" alt=""/>
                </li>
                <li
                    onClick={() => {
                        props.setPurpose('Суставы и связки')
                    }} className={props.purpose === "Суставы и связки" ? 'listItemActive' : ""}>
                    <img src="https://protein.company/upload/svg/Joints.svg" alt=""/>
                </li>
            </ul>
        </div>
    );
};

export default NavShort;