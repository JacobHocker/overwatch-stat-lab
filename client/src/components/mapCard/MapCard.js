import React from 'react';
import { Link } from 'react-router-dom';
import './MapCard.scss';

function MapCard({id, name, country, mapType, cardImage, mapTypeIcon, countryFlag}) {
    return(
        <div className='map-card'>
            <Link to={`/maps/${id}`}>
                <div className='map-card-img-container'>
                    <img src={cardImage} className='map-card-img' alt={name} />
                </div>
                <div className='map-card-info-container'>
                    <div className='map-card-information'>
                        <img src={mapTypeIcon} className='map-icon' alt={mapType} />
                    </div>
                    <div className='map-card-information'>
                        <h2>{name}</h2>
                    </div>
                    <div className='map-card-information'>
                        <img src={countryFlag} className='flag-icon' alt={country} />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MapCard;