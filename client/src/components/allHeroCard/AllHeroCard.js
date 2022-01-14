import React from "react";
import { Link } from 'react-router-dom';
import './AllHeroCard.scss';

function AllHeroCard({ name, heroCardImage, roleCardImage, id}) {
    return(
        <div className="all-hero-single-card">
                <img src={heroCardImage} alt={name} className='hero-card-image' />
            <div className="all-hero-card-footer">
                <div className="all-hero-card-role">
                    <img src={roleCardImage} alt={name} className='role-card-image' />
                </div>  
                <div className="all-hero-card-name"> 
                    <Link className="link" to={`/hero/${id}`}>
                        <h1>{name}</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AllHeroCard;