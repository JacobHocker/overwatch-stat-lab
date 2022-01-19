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

    
    return(
        <section className='hero-info-page-container'>
            <div className='hero-info-page-header'>
                <h1>{hero.name}</h1>
                <img src={hero.hero_image_one} className='hero-img-one' alt='hero-one' />
            </div>
            <div className='hero-info-page-text-area'>
                <HeroInfoPageTextContainer hero={hero}/>
           </div>
           <div className='hero-info-page-footer'>
             <img src={hero.hero_image_two} className='hero-img-two' alt='hero-two' />
           </div>
        </section>
    )
}

export default HeroInfoPageContainer;