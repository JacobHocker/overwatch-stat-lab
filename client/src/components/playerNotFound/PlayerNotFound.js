import React from "react";
import './PlayerNotFound.scss';

function PlayerNotFound() {
    return(
        <div className="player-nf-container">
            <h1>Player Not Found</h1>
            <p>Player was not found or not enough information was given to find player.</p>
        </div>
    );
};

export default PlayerNotFound;