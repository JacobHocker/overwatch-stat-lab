import React from 'react';
import { FaCrosshairs } from 'react-icons/fa';
import { GrGroup } from 'react-icons/gr';
import { Link } from 'react-router-dom';
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
                <div className='feature-container'>
                    <div className='feature-header'>
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
                    <div className='feature-body'>
                        <p>Look up a player by either their Xbox/PlayStation name or Battletag. (Note: The players profile must be public) </p>
                        <p>Stats can be viewed from quickplay or the current competitive season.</p>
                        <p> The players ranks and combined SR (Skill Rating) can be viewed along with the player level and level of endorsement.</p>
                        <p> Once a hero is played in either quickplay or the current competitive season detailed stats about performance can be viewed about that hero giving you a breakdown like never before!</p>
                    </div>
                    <div className='feature-link'>
                        <Link to='/player-page' className='home-section-link'>
                            <button className='home-page-link'><FaCrosshairs />Find Your Stats</button>
                        </Link>
                    </div>
                </div>
                <div className='feature-container'>
                    <div className='feature-header'>
                        <GrGroup /><h3>LFG</h3><GrGroup />
                    </div>
                    <div className='feature-body'>
                        <p>If you want a place to get involved with the Overwatch community.</p>
                        <p>Head on over to the Looking For Group (LFG).  You can look for people to play with by posting exactly what you are looking for in your teammates</p>
                        <p>Post by rank and role if your playing competitive.  Or just looking for fun people to join you in quickplay! </p>
                    </div>
                    <div className='feature-link'>
                        <Link to='/looking-for-group' className='home-section-link'>
                            <button className='home-page-link'><FaCrosshairs />Find Your New Group</button>
                        </Link>
                    </div>
                </div>
                <div className='feature-container'>
                    <div className='feature-header'>
                        <h3>Heroes & Maps</h3>
                    </div>
                    <div className='feature-body'>
                        <p>Browse the hero gallery and learn the stories & abilities of all available currently in Overwatch.</p>
                        <p>Browse all of the maps available while get getting a different view of them.</p>
                        
                    </div>
                    <div className='feature-link'>
                        <Link to='/heroes' className='home-section-link'>
                            <button className='home-page-link'><FaCrosshairs />Browse The Heroes</button>
                        </Link>
                        <Link to='/maps' className='home-section-link'>
                            <button className='home-page-link'><FaCrosshairs />Learn About The Map</button>
                        </Link>
                    </div>
                </div>
                <div className='feature-container'>
                    <div className='feature-header'>
                      <img src='https://www.pikpng.com/pngl/m/7-74053_basic-overwatch-terminology-overwatch-league-logo-png-clipart.png' alt='owl-logo' className='home-owl-logo' />  
                      <h3>OWL</h3>
                      <img src='https://www.pikpng.com/pngl/m/7-74053_basic-overwatch-terminology-overwatch-league-logo-png-clipart.png' alt='owl-logo' className='home-owl-logo' />
                    </div>
                    <div className='feature-body'>
                        <p>The Overwatch League (OWL) page will give you a glimpse into the different teams and their rosters</p>
                    </div>
                    <div className='feature-link'>
                        <Link to='/overwatch-league' className='home-section-link'>
                            <button className='home-page-link'><FaCrosshairs />Check Out The Teams</button>
                        </Link>
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