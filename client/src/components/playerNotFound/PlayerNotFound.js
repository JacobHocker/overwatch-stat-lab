import React from "react";
import './PlayerNotFound.scss';

function PlayerNotFound() {
    return(
        <div className="player-nf-container">
            <h1>Either the player was not found or not enough information was given to find player.</h1>
        </div>
    );
};

export default PlayerNotFound;