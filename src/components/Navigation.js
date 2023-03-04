import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to ="/">
                    <li className='elem-nav'>Acceuil</li>
                </NavLink>
                <NavLink to ="/about">
                    <li className='elem-nav'>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;