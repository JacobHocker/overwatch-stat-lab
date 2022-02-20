import React, { useState} from 'react';
import PlayerDataSearch from '../playerDataSearch/PlayerDataSearch';
//import PlayerNotFound from '../playerNotFound/PlayerNotFound';
import PlayerProfileDisplay from '../playerProfileDisplay/PlayerProfileDisplay';
import './PlayerDataContainer.scss';



function PlayerDataContainer() {
    const [playerProfile, setPlayerProfile] = useState({});
    const [battletag, setBattletag] = useState('');
    const [region, setRegion] = useState('')
    const [platform, setPlatform] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/player/${platform}/${region}/${battletag}`)
        .then((r) => r.json())
        .then((playerProfile) => { setPlayerProfile(playerProfile);
        });
    }
   

    

    //console.log(playerProfile)

    
    return(
        <div className='player-data-container'>
            <PlayerDataSearch 
            onPlayerSubmit={handleSubmit}
            battletag={battletag}
            setBattletag={setBattletag}
            region={region}
            setRegion={setRegion}
            platform={platform}
            setPlatform={setPlatform}
            />
            <PlayerProfileDisplay player={playerProfile}/>
        </div>
    );
};

export default PlayerDataContainer;