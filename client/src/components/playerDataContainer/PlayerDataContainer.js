import React, { useState, useEffect } from 'react';
import PlayerDataSearch from '../playerDataSearch/PlayerDataSearch';
import './PlayerDataContainer.scss';

function PlayerDataContainer() {
    const [playerStats, setPlayerStats] = useState({});

    // const ow = require('overwatch-stats-api');
    // (async () => {
    // const stats = await ow.getAllStats('H17SCAN-1259', 'pc');
    // (stats);
    // })();

    useEffect(() => {
        const ow = require('overwatch-stats-api');
            (async () => {
        const stats = await ow.getAllStats('H17SCAN', 'xbl');
            setPlayerStats(stats);
    })();
    },[])
    // const api = 'https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/overwatch/standard/profile/xbl/H17SCAN'
    

    // useEffect(() => {
    //     fetch(api) 
    //     .then((r) => r.json())
    //     .then((playerStats) => { setPlayerStats(playerStats);
    //     });
    // }, []);

    console.log(playerStats)

    // const {rank} = playerStats 
    
    // console.log(rank.damage.sr)
    //platform can be either pc, xbl or psn
    //H17SCAN#1259, pc
    return(
        <div className='player-data-container'>
            
            {/* <h1>Ranks</h1>
            <h2>Tank: {rank.tank.sr}</h2>
            <h2>DPS: {rank.damage.sr}</h2>
            <h2>Support: {rank.support.sr}</h2> */}
            <PlayerDataSearch />
        </div>
    );
};

export default PlayerDataContainer;