import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import datas from '../../datas/appartList';
import Slider from '../../components/Slider';
import './Appartement.css'

const Appartement = () => {

const[imageSlider, setImageSlider] = useState([])

const idAppart = useParams('id').id;
const currentAppart = datas.filter(data => data.id === idAppart)

useEffect(()=> {
    const currentAppart = datas.filter(data => data.id === idAppart);
    setImageSlider(currentAppart[0].pictures);
},[idAppart])





    return (
        <div className='container-gen'>
            <Banner />
            <Slider imageSlider={imageSlider} />
            <Footer />
            
        </div>
    );
};

export default Appartement;