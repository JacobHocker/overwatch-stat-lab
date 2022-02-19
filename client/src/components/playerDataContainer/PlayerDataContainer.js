import React, {useEffect, useState} from 'react';
import PlayerDataSearch from '../playerDataSearch/PlayerDataSearch';
import './PlayerDataContainer.scss';



function PlayerDataContainer() {
    const [playerStats, setPlayerStats] = useState({});

    
    useEffect(() => {
        fetch('/player/xbl/us/Aphrodiite XXX')
        .then((r) => r.json())
        .then((playerStats) => { setPlayerStats(playerStats);
        });
    }, []);

    

    console.log(playerStats)

    
    return(
        <div className='player-data-container'>
            <PlayerDataSearch />
        </div>
    );
};

export default PlayerDataContainer;