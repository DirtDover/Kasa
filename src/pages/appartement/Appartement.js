import React, {} from 'react';
import {Navigate, useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import datas from '../../datas/appartList';
import Slider from '../../components/Slider';
import Collapse from '../../components/Collapse'
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import './Appartement.css'

function Appartement  ()  {

const idAppart = useParams().id;

const currentAppart = datas.filter(data => data.id === idAppart)

if (!currentAppart[0]) {
    return <Navigate to='/*'></Navigate>
}

    
return (
        <div className='container-gen'>
            <Banner />
            <Slider />
            <div className='infos-container'>
                <div className='titre-localisation-cat-container'>
                    <h1 className='title'>{currentAppart[0].title}</h1>
                    <h3 className='location'>{currentAppart[0].location}</h3>
                    <div className='tag-container'>
							{currentAppart[0].tags.map((tag, index) => {
								return (
									<button className='tag' key={index}>{tag}</button>
								)
							})}
						</div>
                </div>
                <div className='infos-host-container'>
                    <div className='infos-host'>
                    <div className='name-container'>
                    <h3 className='name'>{currentAppart[0].host.name.split(' ')[0]}</h3>
                    <h3 className='name'>{currentAppart[0].host.name.split(' ')[1]}</h3>
                    </div>
                    <img src={currentAppart[0].host.picture} alt="propriétaire" className='img-host' />
                    </div>
                    <div className='stars'>{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= currentAppart[0].rating ? redStar : greyStar} alt="star" />
								)
							})}</div>
                </div>
            </div>
           <div className='collapse-container-appartement'> 
            <Collapse title={'Description'} content={currentAppart[0].description}/>
             <Collapse title={'Equipement'} content={currentAppart[0].equipments.map((equipement, index)=>{
                return (
                    <li key={index}>{equipement}</li>
                )
             })}/>
            </div>
            <Footer />
            
        </div>
    );
} 
    

export default Appartement;