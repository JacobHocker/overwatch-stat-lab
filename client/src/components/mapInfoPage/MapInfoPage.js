import React, { useEffect, useState } from "react";
import { useParams  } from 'react-router-dom';
import './MapInfoPage.scss';

function MapInfoPage(){
    const [map, setMap] = useState({});
    const {id} = useParams()

    useEffect(() => {     
     fetch(`/maps/${id}`)
        .then((r) => r.json())
        .then((map) => { setMap(map)
        })
    }, [id]);

    

    return(
        <div className="map-info-page-container">
            <div className="map-info-page-header">
                <h1>{map.name}</h1>
            </div>
            <div className="map-info-page-info">
                <h2>Location: {map.name}, {map.country}</h2>
                <img src={map.country_flag} className='map-info-flag' alt={map.country} />
            </div>
            <div className="map-info-img-container">
                <h1>Map Image Gallery</h1>
                <h2>Map Image 1</h2>
                <img src={map.image_one} className="map-image" alt={`map-${map.name}-one`} />
                <h2>Map Image 2</h2>
                <img src={map.image_two} className="map-image" alt={`map-${map.name}-two`} />
                <h2>Map Image 3</h2>
                <img src={map.image_three} className="map-image" alt={`map-${map.name}-three`} />
                {map.top_down === 'N/A' ?
                <div></div>
                :
                <div>
                    <h2>Map Top Down View</h2>
                    <img src={map.top_down} className="map-image" alt={`map-${map.name}-top-down`} />
                </div>}
                
            </div>
        </div>
    )
}

export default MapInfoPage;