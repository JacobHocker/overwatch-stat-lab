import React from "react";
import './HeroInfoPageOverview.scss';
import {  IoIosStar } from 'react-icons/io';

function HeroInfoPageOverview({ hero }) {

    const style= { color: "gold", fontSize: "3.75rem" }
    const diff = hero.hero_difficulty
    let stars = [];
    for(let i = 0; i < diff; i++) {
        stars.push(<IoIosStar key={i}  style={style}/>)
    }
    

    return(
        <div className="hero-info-overview-container">
            <div className="hero-overview-header">
                <h1>Role</h1>
                <div className="overview-role-display">
                  <img src={hero.role_card} className='hero-overview-role-image' alt='role' />
                  <h2>{hero.role}</h2>
               </div>
               <div className="overview-gameplay-description">
                    <p>{hero.hero_gameplay_description}</p>
                </div>
                <div className="overview-playstlye">
                    <p>Play Style: {hero.playstyle}</p>
                </div>
                <div className="overview-hero-difficulty">
                    <h2>Difficulty</h2>
                    {stars}
                </div>
            </div>
            <div className="hero-overview-weapons">
                <h1>Weapons</h1>
                <div className="overview-weapon-display">
                    < img src={hero.weapon_one_image} className="weapon-one-image" alt="weapon-one" />
                    <h2>Primary</h2>
                    <h2>{hero.weapon_one_name}</h2>
                    <p>Weapon Type: {hero.weapon_one_type}</p>
                    <p>{hero.weapon_one_description}</p>
                 </div>
                 <div className="overview-weapon-display">
                    < img src={hero.weapon_two_image} className="weapon-two-image" alt="weapon-two" />
                   <h2>Secondary</h2>
                    <h2>{hero.weapon_two_name}</h2>
                    <p>Weapon Type: {hero.weapon_two_type}</p>
                    <p>{hero.weapon_two_description}</p>
                 </div>
            </div>
            <div className="hero-overview-abilities">
                <h1>Abilities</h1>
                <div className="overview-abilities-display">
                    <h2>Passive Ability</h2>
                    < img src={hero.passive_image} className="passive-image" alt="passive" />
                    <h2>{hero.passive_name}</h2>
                    <p>{hero.passive_description}</p>
                </div>
                <div className="overview-abilities-display">
                    <h2>Ability One</h2>
                    < img src={hero.ability_one_image} className="ability-one-image" alt="ability-one" />
                    <h2>{hero.ability_one_name}</h2>
                    <p>{hero.ability_one_description}</p>
                </div>
                <div className="overview-abilities-display">
                    <h2>Ability Two</h2>
                    < img src={hero.ability_two_image} className="ability-two-image" alt="ability-two" />
                    <h2>{hero.ability_two_name}</h2>
                    <p>{hero.ability_two_description}</p>
                </div>
                {hero.ability_three_name === 'N/A' ?
                <div className="overview-abilities-display">
                </div>
                :
                <div className="overview-abilities-display">
                    <h2>Ability Three</h2>
                    < img src={hero.ability_three_image} className="ability-three-image" alt="ability-three" />
                    <h2>{hero.ability_three_name}</h2>
                    <p>{hero.ability_three_description}</p>
                </div>}
                <div className="overview-abilities-display">
                    <h2>Ultimate Ability</h2>
                    < img src={hero.ultimate_image} className="ultimate-image" alt="ultimate" />
                    <h2>{hero.ultimate_name}</h2>
                    <p>{hero.ultimate_description}</p>
                </div>
            </div>
            { hero.healing_type === 'N/A' ?
            <div>
            </div>
            :
            <div className="hero-overview-healing">
                <h2>Healing Type</h2>
                <p>{hero.healing_type}</p>
            </div>}
            {hero.barrier === false ?
            <div></div>
            :
            <div className="hero-overview-barrier">
                <h2>Barrier Health</h2>
                <p>{hero.barrier_health}</p>
            </div>}
            <div className="hero-overview-health">
                <h1>Health Breakdown: </h1>
                <p>HP: {hero.hp}</p>
                <p>Armor: {hero.armor}</p>
                <p>Shields: {hero.shields}</p>
                <p>Total Health: {hero.total_hp}</p>
            </div>
              
            
        </div>
    )
}

export default HeroInfoPageOverview;