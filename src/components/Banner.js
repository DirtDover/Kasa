import React from 'react';
import Navigation from './Navigation';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img src='./Logo.png' alt="logo Kasa" className='logo' />
            <Navigation />
        </div>
    );
};

export default Banner;