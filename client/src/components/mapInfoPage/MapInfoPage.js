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
            <h1>{map.name}</h1>
        </div>
    )
}

export default MapInfoPage;