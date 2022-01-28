import React, { useEffect, useState } from "react";
import './MapCardContainer.scss';
import MapCard from "../mapCard/MapCard";

function MapCardContainer(){
    const [maps, setMaps] = useState([]);
    const [activeTab, setActiveTab] = useState('All');

    const tabs = [{id: 1, type: "All"}, {id: 2, type: "Control"}, {id: 3, type: "Assault"}, {id: 4, type: "Escort"}, {id: 5, type: "Hybrid"}, {id: 6, type: "Capture The Flag"}, {id: 7, type: "Deathmatch"}];
    const tabMap = tabs.map((tab) => (
        <li className={activeTab === tab.type ? "map-tab-active" : "map-tab-inactive" }
            key={tab.id}
            onClick={() => setActiveTab(tab.type) }
            >
            {tab.type}
        </li>)
    )
    
    useEffect(() => {
        fetch("/maps")
        .then((r) => r.json())
        .then((maps) => { setMaps(maps);
        });
    }, []);

    const mapFilterDisplay = activeTab === 'All' ? maps.map((m) => (
        <MapCard 
        key={m.id}
         id={m.id}
         name={m.name}
         cardImage={m.card}
         country={m.country}
         mapType={m.map_type}
         countryFlag={m.country_flag}
         mapTypeIcon={m.map_type_icon}
        />))
         : 
         maps.filter(map => map.map_type === activeTab).map((m) => (
         <MapCard 
         key={m.id}
         id={m.id}
         name={m.name}
         cardImage={m.card}
         country={m.country}
         mapType={m.map_type}
         countryFlag={m.country_flag}
         mapTypeIcon={m.map_type_icon}
        />)
    )
    return(
        <div className="map-card-container">
            <div className="map-gallery-header">
                <h1>Maps</h1>
            </div>
            <div className="tab-header-container">
                <ul className="tab-nav">
                    {tabMap}
                </ul>
            </div>
            <div className="all-map-card-container">
               {mapFilterDisplay}
            </div>
        </div>
    )
}

export default MapCardContainer;