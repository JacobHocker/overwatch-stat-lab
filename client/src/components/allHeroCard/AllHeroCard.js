import React from "react";
import { Link } from 'react-router-dom';
import './AllHeroCard.scss';

function AllHeroCard({ name, heroCardImage, roleCardImage, id}) {
    return(
        <div className="all-hero-single-card">
            <Link className="link" to={`/hero/${id}`}>
                <div className="hero-card-image-container">
                    <img src={heroCardImage} alt={name} className='hero-card-image' />
                </div>
            <div className="all-hero-card-footer">
                <div className="all-hero-card-role">
                    <img src={roleCardImage} alt={name} className='role-card-image' />
                </div>  
                <div className="all-hero-card-name"> 
                    
                        <h1>{name}</h1>
                    
                </div>
            </div>
            </Link>
        </div>
    )
}

export default AllHeroCard;