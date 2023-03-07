import React from 'react';
import '../styles/Footer.css'
import logo from '../assets/logo-blanc.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt='Logo Footer' className='logo-footer' />
            <p className='text-footer'>&copy;2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;