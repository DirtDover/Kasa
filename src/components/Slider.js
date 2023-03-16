import ArrowRight from '../assets/chevron_carousel_right.png'
import ArrowLeft from '../assets/chevron_carousel_left.png'
import '../styles/Slider.css'
import { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom";
import datas from '../datas/appartList'

function Slider() {
    const { id } = useParams();
    // On initialise le tableau avec useState
    const [location, setLocation] = useState({
        pictures: []
    });

    // On récupère les images avec .map et on les mets  dans le tableau avec useEffect
    useEffect(() => {
        datas.map((data) => {
            if (data.id === id) { // On oublie pas de vérifier l'ID en URL avec celle du fichier JSON
                setLocation(data);
            }
            return null;
        })
    });
    /********** Gestion des images **********/

    const picturesLength = location.pictures.length; // on récupère la taille du tableau d'images
    const [currentPicture, setCurrentPicture] = useState(0); // on initialise un état à 0 pour l'image actuelle

    /* Conditions affichage images selon les requirements */
    const nextSlide = () => {
        setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1);
    }
    const prevSlide = () => {
        setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1);
    }
    console.log(currentPicture)
    /* Gestion des chevrons */

    let chevron = "activeChevron"; // par défault ils sont activés

    if (picturesLength === 1) {
        chevron = "notActiveChevron";
    }

    return (
        <section style={{
            backgroundImage: `url(${location.pictures[currentPicture]})`
        }} className="slider-container">
            <div className='arrow-container'>
                                <img 
                        className='arrow arrow-right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={prevSlide}
                    />
                    <img 
                        className='arrow arrow-left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={nextSlide}
                    />
            </div>  
            <p className='slideCount'>{currentPicture + 1} / {picturesLength}</p>      
        </section>

  )
                   
            

       
    
}

export default Slider;
