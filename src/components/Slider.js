import ArrowRight from '../assets/chevron_carousel_right.png'
import ArrowLeft from '../assets/chevron_carousel_left.png'
import '../styles/Slider.css'
import { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom";
import datas from '../datas/appartList'

function Slider() {
    const { id } = useParams();
    const [location, setLocation] = useState({
        pictures: []
    });

   
    useEffect(() => {
        datas.map((data) => {
            if (data.id === id) { 
                setLocation(data);
            }
            return null;
        })
    });
   

    const picturesLength = location.pictures.length; 
    const [currentPicture, setCurrentPicture] = useState(0); 

    
    const nextSlide = () => {
        setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1);
    }
    const prevSlide = () => {
        setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1);
    }
    
    return (
        <section style={{
            backgroundImage: `url(${location.pictures[currentPicture]})`
        }} className="slider-container">
            {picturesLength > 1 && 
            
            <>
            
            <div className='arrow-container'>
            <img 
                className='arrow  arrow-right' 
                src={ArrowRight} 
                alt="show next slider" 
                onClick={prevSlide}
            />
            <img 
                className='arrow  arrow-left' 
                src={ArrowLeft} 
                alt="show previous slider" 
                onClick={nextSlide}
            />
            </div>  
            <p className='slideCount '>{currentPicture + 1} / {picturesLength}</p></>           
            }         
        </section>
  )
                   
            

       
    
}

export default Slider;
