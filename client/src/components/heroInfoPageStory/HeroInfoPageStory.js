import React from "react";
import './HeroInfoPageStory.scss';

function HeroInfoPageStory({ hero }){
    return(
        <div className="hero-info-story-container">
            <div className="hero-story-header">
                <h1>Biography{" "}</h1>
            </div>
           <div className="hero-story-basic-info">
               <p>{hero.name_two},</p><p> Age: {hero.age}</p>
           </div>
           <div className="hero-story-basic-info">
               <p>Occupation: {hero.occupation}</p>
           </div>
           <div className="hero-story-basic-info">
               <p>Base of Operation: {hero.base_of_operation}</p>
           </div>
           <div className="hero-story-basic-info">
               <p>Affiliation: {hero.affiliation}</p>
           </div>
           <div className="hero-story-paragraph">
               <h1>Hero Story</h1>
               <p>{hero.hero_story}</p>
           </div>
           
        </div>
    )
}

export default HeroInfoPageStory;