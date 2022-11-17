import React from 'react';
import loader from '../../assets/images/loader.gif'
import './Loader.css'


const Loader = () => {
    return (
        <div className='loaderContainer'>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Loader;