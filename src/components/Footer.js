import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <img src='./logo-blanc.png' alt='Logo Footer' className='logo-footer' />
            <p className='text-footer'>&copy;2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;