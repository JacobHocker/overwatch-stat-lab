import React from "react";
import './HeroInfoPageOverview.scss';

function HeroInfoPageOverview({ hero }) {
    return(
        <div className="hero-info-overview-container">
            <div className="hero-overview-header">
                <h2>Role:{" "}</h2>
                <p>{hero.role}</p><img src={hero.role_card} className='hero-overview-role-image' alt='role-image' />
            </div>
            <div className="hero-overview-info">
                <h2>Full Name: </h2>
                <p>{hero.name_two}</p>
            </div>
        </div>
    )
}

export default HeroInfoPageOverview;