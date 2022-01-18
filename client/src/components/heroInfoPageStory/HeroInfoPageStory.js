import React from "react";
import './HeroInfoPageStory.scss';

function HeroInfoPageStory({ hero }){
    return(
        <div className="hero-info-story-container">
            <div className="hero-story-header">
                <h1>Biography{" "}</h1>
            </div>
            <div className="hero-story-info">
                <h2>Full Name: </h2>
                <p>{hero.name_two}</p>
            </div>
        </div>
    )
}

export default HeroInfoPageStory;