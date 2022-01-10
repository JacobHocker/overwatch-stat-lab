import React from "react";
import './AllHeroList.scss';

function AllHeroList({ name, heroCardImage, roleCardImage}) {
    return(
        <div className="all-hero-list-container">
            <img src={heroCardImage} alt={name} className='hero-card-image' />
            <img src={roleCardImage} alt={name} className='role-card-image' />
            <h1>{name}</h1>
        </div>
    )
}

export default AllHeroList;