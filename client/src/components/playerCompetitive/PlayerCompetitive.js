import React from "react";
import PlayerHeroDisplay from "../playerHeroDisplay/PlayerHeroDisplay";
import './PlayerCompetitive.scss';

function PlayerCompetitive({ currentStats }) {
    
    const awards = currentStats.awards 
    const games = currentStats.games 
    
    const decimal = games.won / games.played
    const winPer = decimal * 100
    const winPercentage = Math.round(winPer * 100) / 100
        
    
       
    
    
    return(
        <div className="player-competitive-container">
            <div className="comp-games-container">
                <div className="comp-games-header">
                    <h1>Match Stats</h1>
                </div>
                <div className="match-stats">
                    <div className="matches">
                        <h2>Games Played: {games.played}</h2>
                    </div>
                    <div className="matches">
                        <h2>Games Won: {games.won}</h2>
                    </div>
                    <div className="matches">
                        <h2>Win Percentage: {winPercentage}%</h2>
                    </div>
                </div>
            </div>
            <div className="player-awards-container">
                <div className="player-awards-header">
                    <h1>Match Awards</h1>
                </div>
                <div className="player-awards">
                    <div className="post-game-cards">
                        <h2>Post Game Cards: {awards.cards}</h2>
                    </div>
                    <div className="medals">
                        <h2>Total Medals: {awards.medals}</h2>
                    </div>
                    <div className="medals">
                        <h2>Gold Medals: {awards.medalsGold}</h2>
                    </div>
                    <div className="medals">
                        <h2>Silver Medals: {awards.medalsSilver}</h2>
                    </div>
                    <div className="medals">
                        <h2>Bronze Medals: {awards.medalsBronze}</h2>
                    </div>
                </div>
            </div>
            <div className="player-comp-hero-display">
                <h2>See Hero Stats Below</h2>
             {currentStats?.topHeroes &&  <PlayerHeroDisplay heroes={currentStats.topHeroes}/>}
            </div>
        </div>
    );
};

export default PlayerCompetitive;