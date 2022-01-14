import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import './HeroInfoPage.scss';

function HeroInfoPage(){
    const [hero, setHero] = useState({})
    
   
    const {id} = useParams()

    useEffect(() => {     
     fetch(`/characters/${id}`)
        .then((r) => r.json())
        .then((hero) => { setHero(hero)
        })
    }, [id]);

    console.log(hero)
    return(
        <div className='hero-info-page-container'>
            <h1>{hero.name}</h1>
            <h1>{hero.role}</h1>
        </div>
    )
}

export default HeroInfoPage;