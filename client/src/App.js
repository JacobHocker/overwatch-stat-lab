import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllHeroListContainer from './components/heroes/allHeroListContainer/AllHeroListContainer';
import Home from './components/home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='heroes' element={<AllHeroListContainer />} />
    </Routes>
  );
}

export default App;
