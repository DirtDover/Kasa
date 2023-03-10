import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import datas from '../../datas/appartList';
import Slider from '../../components/Slider';
import Collapse from '../../components/Collapse'
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



    return (
        <div className='container-gen'>
            <Banner />
            <Slider imageSlider={imageSlider} />
            <div className='infos-container'>
                <div className='titre-localisation-cat-container'>
                    <h2>{currentAppart[0].title}</h2>
                    <h3>{currentAppart[0].location}</h3>
                    <div className='tag'>
							{currentAppart[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
                </div>
                <div className='infos-host-container'>
                    <img src={currentAppart[0].host.picture} alt="propriétaire" />
                    <h3>nom</h3>
                    <h3>prenom</h3>
                    <div>etoiles</div>
                </div>
            </div>
            <Collapse title={'Description'} content={description}/>
            <Collapse title={'Equipement'} content={equipement}/>
            <Footer />
            
        </div>
    );
};

export default Appartement;