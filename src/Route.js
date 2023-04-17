import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './pages/about/About';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Appartement from './pages/appartement/Appartement';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path='/Kasa' element={<Home />}></Route>
      <Route  path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route path='*' element={<Error />}></Route>
      <Route path='/Appartement/:id' element={<Appartement />}></Route>
      </Routes>    
    </BrowserRouter>
  );
};

export default Router;