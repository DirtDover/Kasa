import React from 'react';
import'../styles/Section1.css'
import background from '../assets/Background.png'

const Section1 = () => {
    return (
        <div className='section1'>
            <img src={background} alt='Background' className='img-section1' />
            <h1 className='title-section1'>Chez vous,<br className='br' /> partout et ailleurs</h1>
            
        </div>
    );
};

export default Section1;