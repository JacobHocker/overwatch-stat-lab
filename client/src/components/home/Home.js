import React from 'react';
import battle from '../../assets/srcImages/ow-battle-home-page.png';
import tracer from '../../assets/srcImages/tracer-home-page.png'
import mei from '../../assets/srcImages/mei-home-page.png';
import './Home.scss'

function Home() {
    return(
        <section className='home-page-container'>
            <div className='home-page-title'>
                <h1>OverHub</h1>
            </div>
            <div className='home-page-img-area-one'>
                <img src={tracer} className='tracer' alt='tracer' />
                <img src={mei} className='mei' alt='mei' />
            </div>
            <div className='features-section'>
                <h1>Features: </h1>
                <ul className='feature-list'>
                    <li className='feature-item'>Browse the gallery of Overwatch heroes. Learn the history and all details about each hero</li>
                    <li className='feature-item'>Sift through maps and map types, while learning facts you may not know about your favorite game mode or map</li>
                    <li className='feature-item'>Overwatch League page will give you insight to the teams and a look at the best players in the world</li>
                    <li className='feature-item'>Looking to improve your game and climb out the ELO hell. Then go to the player page look up your battle.net battle tag and see a detailed analysis of your stats.  Along with tips based on your stats to improve your game play.</li>
                    <li className='feature-item'>Lastly gaming is always more fun with friends so check out the Looking For Group(LFG) page to make friends and squad up!</li>
                </ul>
            </div>
            <div className='home-page-img-area-two'>
                <img src={battle} className='battle' alt='battle' />
            </div>
        </section>
    )
}

export default Home;