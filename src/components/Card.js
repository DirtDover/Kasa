import React from 'react';
import '../styles/Card.css'

const Card = ({data}) => {
    
    return (
        <li className='card'>
            <img src={data.cover} alt={data.title} className='img-card'/>
            
                <h2 className='title-card'>{data.title}</h2>
            
        </li>
    );
};

export default Card;