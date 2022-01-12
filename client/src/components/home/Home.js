import React from 'react';
import winReap from '../../assets/srcImages/winston-reaper-home-image.png';
import './Home.scss'

function Home() {
    return(
        <section className='home-page-container'>
            <div className='home-page-title'>
                <h1>Overwatch Stat Lab</h1>
            </div>
            <div className='home-page-img-one'>
                <img src={winReap} className='win-reap' alt='winston-reaper' />
            </div>
        </section>
    )
}

export default Home;