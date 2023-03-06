import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Section1 from '../../components/Section1';
import '../home/Home.css'


const Home = () => {
    return (
        <div>
           <Banner />
           <Section1 />
           <Footer />
        </div>
    );
};

export default Home;