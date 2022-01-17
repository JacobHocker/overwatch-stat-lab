import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import HeroInfoPageTextContainer from '../heroInfoPageTextContainer/HeroInfoPageTextContainer';
import './HeroInfoPageContainer.scss';

function HeroInfoPageContainer(){
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
        <section className='hero-info-page-container'>
           <h1>Full Hero Page</h1>
           <HeroInfoPageTextContainer />
        </section>
    )
}

export default HeroInfoPageContainer;