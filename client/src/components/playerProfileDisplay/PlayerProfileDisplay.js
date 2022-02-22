import React, { useState } from "react";
import './PlayerProfileDisplay.scss';

function PlayerProfileDisplay({ player }){
    const [activeMode, setActiveMode] = useState("quickplay");
    const modes = 
    [
        {id: 1, name: 'quickplay', title: 'Quick Play'},
        {id: 2, name: 'comp', title: 'Competitive'}
    ];
    const ratingMap = player.ratings.map((rating) => (
        <div className="role-sr-info-display" key={rating.role}>
            <div className="role-sr-info">
                <img src={rating.roleIcon} className='sr-role-icon' alt={`${rating.role}-icon`} />
                <h2 >{rating.role}</h2>
            </div>
            <div className="role-sr-rank">
                <img src={rating.rankIcon} className='sr-icon' alt={`${rating.role}-sr-icon`} />
                <h2>{rating.level}</h2>
            </div>
        </div>
    ))

    console.log(player)
    return(
        <div className="player-profile-container">
            <div className="player-basic-info-container">
                <div className="icon-name">
                    <img src={player.icon} className='player-icon' alt={`${player.name}-icon`} />
                    <h1>{player.name}</h1>
                </div>
                <div className="endorsement-level">
                    <img src={player.endorsementIcon} className='endorsement-icon' alt={`${player.name}-endorsement`} />
                    <h2 className="endorsement">{player.endorsement}</h2>
                    <img src={player.levelIcon} className='level-icon' alt={`${player.name}-level`} />
                    <h2 className="level">{player.level}</h2>
                    <img src={player.prestigeIcon} className='prestige-icon' alt={`${player.name}-prestige`} />
                </div>
            </div>
            <div className="player-rating-display">
                {ratingMap}
                <div className="combined-sr-display">
                    <h2>Combined SR</h2>
                    <div className="combined-sr">
                        <img src={player.ratingIcon} className='combined-icon' alt='combined-sr' />
                        <h2>{player.rating}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfileDisplay;