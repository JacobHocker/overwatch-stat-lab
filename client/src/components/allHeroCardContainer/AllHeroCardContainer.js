import React, { useEffect, useState } from "react";
import AllHeroCard from "../allHeroCard/AllHeroCard";
import './AllHeroCardContainer.scss';


function AllHeroCardContainer() {
    const [heroes, setHeroes] = useState([]);
    const [activeTab, setActiveTab] = useState('All');
    
    const tabs = [{id: 1, title: "All"}, {id: 2, title: "Tank"}, {id: 3, title: "Damage"}, {id: 4,  title: "Support"}]

    const tabMap = tabs.map((tab) => (
        <li className={activeTab === tab.title ? "tab-active" : "tab-inactive" }
            key={tab.id}
            onClick={() => setActiveTab(tab.title) }
            >
            {tab.title}
        </li>)
    )

    useEffect(() => {
        fetch("/characters")
        .then((r) => r.json())
        .then((heroes) => { setHeroes(heroes);
        });
    }, []);
   
    const heroFilterDisplay = activeTab === 'All' ? heroes.map((h) => (
        <AllHeroCard 
        key={h.id}
        id={h.id}
        name={h.name}
        heroCardImage={h.hero_card}
        roleCardImage={h.role_card}
        />))
         : 
         heroes.filter(hero => hero.role === activeTab).map((h) => (
         <AllHeroCard 
        key={h.id}
        id={h.id}
        name={h.name}
        heroCardImage={h.hero_card}
        roleCardImage={h.role_card}
        />)
    )
    
    
    return(
        <div className="hero-gallery-page-container">
            <div className="hero-gallery-header">
                <h1>Hero Gallery</h1>
            </div>
            <div className="tab-header-container">
                <ul className="tab-nav">
                    {tabMap}
                </ul>
            </div>
            <div className="all-hero-card-container">
               {heroFilterDisplay}
            </div>
        </div>
    )
}

export default AllHeroCardContainer;