import React from 'react';
import PlayerDataSearch from '../playerDataSearch/PlayerDataSearch';
import './PlayerDataContainer.scss';

function PlayerDataContainer() {
    return(
        <div className='player-data-container'>
            <h1>Search Bar</h1>
            <PlayerDataSearch />
        </div>
    );
};

export default PlayerDataContainer;