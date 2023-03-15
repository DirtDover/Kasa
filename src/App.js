import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './pages/about/About';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Appartement from './pages/appartement/Appartement';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route path='*' element={<Error />}></Route>
      <Route path='/Appartement/:id' element={<Appartement />}></Route>
      </Routes>    
    </BrowserRouter>
  );
};

export default App;