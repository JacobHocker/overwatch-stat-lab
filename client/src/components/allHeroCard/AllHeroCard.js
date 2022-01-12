import React from "react";
import './AllHeroCard.scss';

function AllHeroCard({ name, heroCardImage, roleCardImage}) {
    return(
        <div className="all-hero-single-card">
            
                <img src={heroCardImage} alt={name} className='hero-card-image' />
            
            <div className="all-hero-card-footer">
                <div className="all-hero-card-role">
                    <img src={roleCardImage} alt={name} className='role-card-image' />
                </div>  
                <div className="all-hero-card-name"> 
                    <h1>{name}</h1>
                </div>
            </div>
        </div>
    )
}

export default AllHeroCard;