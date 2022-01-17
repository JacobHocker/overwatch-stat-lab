import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllHeroCardContainer from './components/allHeroCardContainer/AllHeroCardContainer';
import HeroInfoPageContainer from './components/heroInfoPageContainer/HeroInfoPageContainer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <section className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='heroes' element={<AllHeroCardContainer />} />
        <Route path='hero/:id' element={<HeroInfoPageContainer  />} />
      </Routes>
    </section>
  );
}

export default App;
