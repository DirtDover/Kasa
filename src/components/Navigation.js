import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const Navigation = () => {
    return (
        <div className='navigation-container' >
            <ul className='navigation'>
                <NavLink to ="/" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
                    <li className='elem-nav'>Acceuil</li>
                </NavLink>
                <NavLink to ="/about" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
                    <li className='elem-nav'>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;