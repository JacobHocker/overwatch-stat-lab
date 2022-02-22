import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './PlayerDataSearch.scss';

function PlayerDataSearch({ onPlayerSubmit, battletag, setBattletag, region, setRegion, platform, setPlatform }) {

    const networks = [
        {id: 1, title: 'pc', name: 'PC', img: 'https://static.thenounproject.com/png/1249709-200.png'},
        {id: 2, title: 'psn', name: 'PlayStation', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/PlayStation_Icon.png'},
        {id: 3, title: 'xbl', name: 'Xbox', img: 'https://www.freepnglogos.com/uploads/xbox-games-logo-symbol-19.png'}
    ]
    const areas = [
        {id: 1, title: 'us', name: 'NA'},
        {id: 2, title: 'eu', name: 'EU'},
        {id: 3, title: 'asia', name: 'Asia Pacific'}
    ]
    const networkMap = networks.map((network) => (
        <li className={platform === network.title ? "platform-active" : "platform-inactive" }
            key={network.id}
            onClick={() => setPlatform(network.title) }
            >
            <img src={network.img} className='network-logo' alt={network.name} />
            <h3>{network.name}</h3>
        </li>)
    )
    const areaMap = areas.map((area) => (
        <li className={region === area.title ? "region-active" : "region-inactive" }
            key={area.id}
            onClick={() => setRegion(area.title) }
            >
            <h3>{area.name}</h3>
        </li>)
    )
    
        return(
        <div className='player-search-container'>
            <div className='player-search-header'>
                <h1>Search</h1>
                <h4>Disclaimer: Stats will only appear if the players profile is set to public! All three fields must be complete, then click the magnifying glass!</h4>
            </div>
            <div className='player-search-search'>
                <h2>Input Battletag, Gamertag, or PSN Name.</h2>
                <div className='search-submit-container'>
                    <form onSubmit={onPlayerSubmit} className='player-form'>
                        <input 
                        className='search-input'
                        placeholder='Search For Player'
                        value={battletag}
                        onChange={(e) => setBattletag(e.target.value)}
                        />
                        <button 
                        type='submit' 
                        className='player-search-button'
                        >
                            <BsSearch />
                        </button>
                    </form>
                </div>
                <p>Note: When looking up a players Battletag use "-" instead of "#" for the break between the Battletag and identifier numbers. If its a name from Xbox or PlayStation that has a "#" just put the the full name with the numbers and do not include the "#".</p>
                <h2>Select Platform</h2>
                <ul className='network-list'>
                    {networkMap}
                </ul>
                <h2>Select Region</h2>
                <ul className='area-list'>
                    {areaMap}
                </ul>
                <div className='player-search-footer'>

                </div>
            </div>
        </div>
    );
};

export default PlayerDataSearch;