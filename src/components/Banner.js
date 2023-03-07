import React from 'react';
import Navigation from './Navigation';
import '../styles/Banner.css';
import Logo from '../assets/Logo.png'
const Banner = () => {
    return (
        <div className='banner'>
            <img src={Logo} alt="logo Kasa" className='logo' />
            <Navigation />
        </div>
    );
};

export default Banner;