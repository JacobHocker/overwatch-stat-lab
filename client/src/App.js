import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './components/userLogin/UserLogin';
import AllHeroCardContainer from './components/allHeroCardContainer/AllHeroCardContainer';
import HeroInfoPageContainer from './components/heroInfoPageContainer/HeroInfoPageContainer';
import Home from './components/home/Home';
import LfgContainer from './components/lfg-container/LfgContainer';
import MapCardContainer from './components/mapCardContainer/MapCardContainer';
import MapInfoPage from './components/mapInfoPage/MapInfoPage';
import NavBar from './components/navbar/NavBar';
import OwlPageContainer from './components/owlPageContainer/OwlPageContainer';
import OwlTeamPage from './components/owlTeamPage/OwlTeamPage';
import PlayerDataContainer from './components/playerDataContainer/PlayerDataContainer';
import Footer from './components/footer/Footer';

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <UserLogin onLogin={setUser} />;
  return (
    <section className='app'>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='heroes' element={<AllHeroCardContainer />} />
        <Route path='hero/:id' element={<HeroInfoPageContainer  />} />
        <Route path='maps' element={<MapCardContainer />} />
        <Route path='maps/:id' element={<MapInfoPage />} />
        <Route path='overwatch-league' element={<OwlPageContainer />} />
        <Route path='teams/:id' element={<OwlTeamPage />} />
        <Route path='player-page' element={<PlayerDataContainer />} />
        <Route path='looking-for-group' element={<LfgContainer user={user} />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
