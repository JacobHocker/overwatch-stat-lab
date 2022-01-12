import React, { useEffect, useState } from "react";
import AllHeroCard from "../allHeroCard/AllHeroCard";
import './AllHeroCardContainer.scss';


function AllHeroCardContainer() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch("/characters")
        .then((r) => r.json())
        .then((heroes) => { setHeroes(heroes);
        });
    }, []);

    const heroesToDisplay = heroes.map((hero) => (
        <AllHeroCard
        key={hero.id}
        name={hero.name}
        heroCardImage={hero.hero_card}
        roleCardImage={hero.role_card}
        />
    ))

    console.log(heroes)
    return(
        <div className="all-hero-list-container">
            {heroesToDisplay}
        </div>
    )
}

export default AllHeroCardContainer;