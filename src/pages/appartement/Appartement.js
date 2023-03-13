import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import datas from '../../datas/appartList';
import Slider from '../../components/Slider';
import Collapse from '../../components/Collapse'
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import './Appartement.css'

const Appartement = () => {

const[imageSlider, setImageSlider] = useState([])

const idAppart = useParams('id').id;
const currentAppart = datas.filter(data => data.id === idAppart)

useEffect(()=> {
    const currentAppart = datas.filter(data => data.id === idAppart);
    setImageSlider(currentAppart[0].pictures);
},[idAppart])

const description = currentAppart[0].description;
const equipement = currentAppart[0].equipments;
const name = currentAppart[0].host.name.split(' '); 
const rating = currentAppart[0].rating;


    return (
        <div className='container-gen'>
            <Banner />
            <Slider imageSlider={imageSlider} />
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
                    <h3 className='name'>{name[0]}</h3>
                    <h3 className='name'>{name[1]}</h3>
                    </div>
                    <img src={currentAppart[0].host.picture} alt="propriétaire" className='img-host' />
                    </div>
                    <div className='stars'>{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}</div>
                </div>
            </div>
           <div className='collapse-container-appartement'> 
            <Collapse title={'Description'} content={description}/>
             <Collapse title={'Equipement'} content={equipement.map((equipement, index)=>{
                return (
                    <li key={index}>{equipement}</li>
                )
             })}/>
            </div>
            <Footer />
            
        </div>
    );
};

export default Appartement;