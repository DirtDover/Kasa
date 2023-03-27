import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({id, title,cover}) => {
   

    return (
        <Link to={`/Appartement/${id}`} className='card'>
            <img src={cover} alt={title} className='img-card'  test/>
            
                <h2 className='title-card'>{title}</h2>
            
        </Link>
    );
};

export default Card;