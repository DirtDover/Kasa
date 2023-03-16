
import ArrowRight from '../assets/chevron_carousel_right.png'
import ArrowLeft from '../assets/chevron_carousel_left.png'
import '../styles/Slider.css'
import { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom";
import datas from '../datas/appartList'

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const { id } = useParams();
    const [location, setLocation] = useState({
        pictures: []
    });

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
           
    }
    
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }
    
    useEffect(() => {
        datas.map((data) => {
            if (data.id === id) { 
                setLocation(data);
                console.log(location)
            }
            return null;
        })
    });
    return (
        <section style={{backgroundImage : `url(${location.pictures[currentIndex]})`}} className='slider-container'>
            {imageSlider.length > 1 && 
                <>
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
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}