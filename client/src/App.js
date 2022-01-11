import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllHeroListContainer from './components/allHeroListContainer/AllHeroListContainer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <section className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='heroes' element={<AllHeroListContainer />} />
      </Routes>
    </section>
  );
}

export default App;
