import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Section1 from '../../components/Section1';
import '../home/Home.css'


const Home = () => {
    return (
        <div>
           <Banner />
           <Section1 />
           <Gallery />
           <Footer />
        </div>
    );
};

export default Home;