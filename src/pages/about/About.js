import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import './About.css'
import about from '../../assets/about-background.png'
import Collapse from '../../components/Collapse';


const About = () => {

    const aboutDatas = [
		{
			"id": "1",
			"title": "Fiabilité",
			"content": "Test1."
		},
		{
			"id": "2",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Test2"
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "Test3."
		}
	]
    return (
        
        <div>
            <Banner />
            <img src={about} alt='A propos' className='img-about' />
            <main className='main-about'>
                {aboutDatas.map((data) =>
                <div key={data.id} className='collapse-about'>
                    <Collapse title={data.title} content={data.content} id={data.id} />
                </div>)}
            </main>
                       
            <Footer />
        </div>
    );
};

export default About;