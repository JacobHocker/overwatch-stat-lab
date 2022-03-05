import React from "react";
import './LfgPostDisplay.scss';

function LfgPostDisplay({user, comments, postContent, rankOne, rankTwo, region, platform, roles, likes, groupSize, gameMode, requireMic}) {
    return(
        <div className='lfg-post-display-container'>
            <div className='post-display-header'>
                <h1>{user.username}</h1>
            </div>
        </div>
    );
};

export default LfgPostDisplay;