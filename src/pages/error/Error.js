import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import './Error.css'

const Error = () => {
    return (
        <div>
        <Banner />
        <div className='container-error'>
        <h1 className='error-404'>404</h1>
           <h2 className='title-error'>Oups ! La page que vous demandez n'existe pas</h2>

           <a href="/" className='lien-error'>Retourner sur la page d'acceuil</a>
           <Footer /> 
        </div>
        </div>
    );
};

export default Error