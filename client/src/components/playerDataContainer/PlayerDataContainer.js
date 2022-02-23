import React, { useState} from 'react';
import PlayerDataSearch from '../playerDataSearch/PlayerDataSearch';
import PlayerNotFound from '../playerNotFound/PlayerNotFound';
import PlayerProfileDisplay from '../playerProfileDisplay/PlayerProfileDisplay';
import './PlayerDataContainer.scss';



function PlayerDataContainer() {
    const [playerProfile, setPlayerProfile] = useState({});
    const [battletag, setBattletag] = useState('');
    const [region, setRegion] = useState('')
    const [platform, setPlatform] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/complete/${platform}/${region}/${battletag}`)
        .then((r) => r.json())
        .then((playerProfile) => { setPlayerProfile(playerProfile);
        });
    }
    
    return(
        <div className='player-data-container'>
            <div className='player-data-header'>
                <h1>Player Profile</h1>
            </div>
            <div className='search-player-area'>
                <PlayerDataSearch onPlayerSubmit={handleSubmit} battletag={battletag} setBattletag={setBattletag} region={region} setRegion={setRegion} platform={platform} setPlatform={setPlatform} />
            </div>
            <div className='player-profile-area'>
                { playerProfile.name === undefined ? <PlayerNotFound /> : <PlayerProfileDisplay player={playerProfile}/>}
            </div>
        </div>
    );
};

export default PlayerDataContainer;