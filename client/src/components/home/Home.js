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
                <div className='features-header'>
                    <h2>Features</h2>
                </div>
                <div className='features-player-stats'>
                    <div className='player-stats-header'>
                        <h3>Player Stats</h3>
                    </div>
                    <div className='player-stats-icon-header'>
                        <img src='https://overwatchanimatedshorts.files.wordpress.com/2017/07/cropped-competitive-rank-icons.png?w=200' alt='top-500' className='header-rank'/>
                        <img src='https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png' alt='grandmaster' className='header-rank'/>
                        <img src='https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-MasterTier.png' alt='masters' className='header-rank'/>
                        <img src='https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-DiamondTier.png' alt='diamond' className='header-rank'/>
                        <img src='https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-PlatinumTier.png' alt='platinum' className='header-rank'/>
                        <img src='https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png' alt='gold' className='header-rank'/>
                        <img src='https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png' alt='silver' className='header-rank'/>
                        <img src='https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-BronzeTier.png' alt='bronze' className='header-rank'/>
                    </div>
                    <div className='player-stats-body'>
                        <p>Look up a player by either their Xbox/PlayStation name or Battletag. (Note: The players profile must be public) <br />
                            Stats can be viewed from quickplay or the current competitive season.<br />
                            The players ranks and combined SR (Skill Rating) can be viewed along with the player level and level of endorsement.<br />
                            Once a hero is played in either quickplay or the current competitive season detailed stats about performance can be viewed about that hero giving you a breadown like never before!     
                        </p>
                    </div>
                    <div className='player-stats-link'>
                        Head to see you or your friends stats by clicking below!
                        <button>Placeholder</button>
                    </div>
                </div>
                
            </div>
            <div className='home-page-img-area-two'>
                <img src={battle} className='battle' alt='battle' />
            </div>
        </section>
    )
}

export default Home;