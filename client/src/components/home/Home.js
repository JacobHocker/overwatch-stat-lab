import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
    return(
        <div className='home-page-container'>
            <div className='home-page-logo'>
                <h1>Overwatch Statistics Lab</h1>
                <img src='https://www.freepnglogos.com/uploads/overwatch---------------------------tokyo--30.png' alt='ow-logo' className='ow-logo' />
                <Link to='/heroes'>Hero Gallery</Link>
            </div>
        </div>
    )
}

export default Home;