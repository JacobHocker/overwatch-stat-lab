import React, { useState } from "react";
import PlayerHeroDisplay from "../playerHeroDisplay/PlayerHeroDisplay";
import './PlayerCompetitive.scss';

function PlayerCompetitive({ currentStats }) {
    const [activeStatDisplay, setActiveStatDisplay] = useState('average');
    const statSections = [
        { id:0, name: 'assists', title: 'Assists'},
        { id:1, name: 'average', title: 'Averages / 10 Min'},
        { id:2, name: 'awards', title: 'Match Awards'},
        { id:3, name: 'best', title: 'Best In A Match'},
        { id:4, name: 'combat', title: 'All Combat Totals'},
        { id:5, name: 'games', title: 'Match Stats'},
    ]
    const awards = currentStats.allHeroes.matchAwards
    const games = currentStats.allHeroes.game
    const average = currentStats.allHeroes.average
    const assists = currentStats.allHeroes.assists
    const best = currentStats.allHeroes.best
    const combat = currentStats.allHeroes.combat

    const decimal = games.gamesWon / games.gamesPlayed
    const winPer = decimal * 100
    const winPercentage = Math.round(winPer * 100) / 100
        
    
       
    
    
    return(
        <div className="player-competitive-container">
            <h1>Select Set Of Stats</h1>
            <select className="section-select" name="mode" value={activeStatDisplay} onChange={(e) => setActiveStatDisplay(e.target.value)}>
                {statSections.map((section) => (
                    <option key={section.id} className='section-option' value={section.name}>
                        {section.title}
                    </option>
                ))}
            </select>
            {activeStatDisplay === 'combat'? <div className="comp-combat-container">
                <div className="comp-combat-header">
                    <h1>All Combat Totals</h1>
                </div>
                <div className="combat-stats">
                    <div className="combat">
                        <h2>All Damage: {combat.damageDone}</h2>
                    </div>
                    <div className="combat">
                        <h2>Barrier Damage: {combat.barrierDamageDone}</h2>
                    </div>
                    <div className="combat">
                        <h2>Hero Damage: {combat.heroDamageDone}</h2>
                    </div>
                    <div className="combat">
                        <h2>Eliminations: {combat.eliminations}</h2>
                    </div>
                    <div className="combat">
                        <h2>Final Blows: {combat.finalBlows}</h2>
                    </div>
                    <div className="combat">
                        <h2>Solo Kills: {combat.soloKills}</h2>
                    </div>
                    <div className="combat">
                        <h2>Environmental Kills: {combat.environmentalKills}</h2>
                    </div>
                    <div className="combat">
                        <h2>Objective Kills: {combat.objectiveKills}</h2>
                    </div>
                    <div className="combat">
                        <h2>Deaths: {combat.deaths}</h2>
                    </div>
                    <div className="combat">
                        <h2>Objective Time: {combat.objectiveTime}</h2>
                    </div>
                    <div className="combat">
                        <h2>Time On Fire: {combat.timeSpentOnFire}</h2>
                    </div>
                </div>
            </div> : <div></div>}
            {activeStatDisplay === 'assists'? <div className="comp-assists-container">
                <div className="comp-assists-header">
                    <h1>Assists</h1>
                </div>
                <div className="assists-stats">
                    <div className="assists">
                        <h2>Offensive: {assists.offensiveAssists}</h2>
                    </div>
                    <div className="assists">
                        <h2>Defensive: {assists.defensiveAssists}</h2>
                    </div>
                    <div className="assists">
                        <h2>Recon: {assists.reconAssists}</h2>
                    </div>
                    <div className="assists">
                        <h2>Healing Done: {assists.healingDone}</h2>
                    </div>
                </div>
            </div>  : <div></div>}
            {activeStatDisplay === 'average'? <div className="comp-average-container">
                <div className="comp-average-header">
                    <h1>Averages / 10 Min</h1>
                </div>
                <div className="average-stats">
                    <div className="averages">
                        <h2>All Damage: {average.allDamageDoneAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Barrier Damage: {average.barrierDamageDoneAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Hero Damage: {average.heroDamageDoneAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Healing: {average.healingDoneAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Eliminations: {average.eliminationsAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Final Blows: {average.finalBlowsAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Solo Kills: {average.soloKillsAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Deaths: {average.deathsAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Objective Time: {average.objectiveTimeAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Objective Kills: {average.objectiveKillsAvgPer10Min}</h2>
                    </div>
                    <div className="averages">
                        <h2>Time On Fire: {average.timeSpentOnFireAvgPer10Min}</h2>
                    </div>
                </div>
            </div>   : <div></div>}
            {activeStatDisplay === 'best'? <div className="comp-best-container">
                <div className="comp-best-header">
                    <h1>Best In A Match</h1>
                </div>
                <div className="best-stats">
                    <div className="best">
                        <h2>All Damage: {best.allDamageDoneMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Barrier Damage: {best.barrierDamageDoneMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Hero Damage: {best.heroDamageDoneMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Healing Done: {best.healingDoneMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Eliminations: {best.eliminationsMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Final Blows: {best.finalBlowsMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Multi-Kills: {best.multikillsBest}</h2>
                    </div>
                    <div className="best">
                        <h2>Kill Streak: {best.killsStreakBest}</h2>
                    </div>
                    <div className="best">
                        <h2>Environmental Kills: {best.environmentalKillsMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Solo Kills: {best.soloKillsMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Objective Kills: {best.objectiveKillsMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Objective Time: {best.objectiveTimeMostInGame}</h2>
                    </div>
                    <div className="best">
                        <h2>Time On Fire: {best.timeSpentOnFireMostInGame}</h2>
                    </div>
                </div>
            </div>    : <div></div>}
            {activeStatDisplay === 'games'? <div className="comp-games-container">
                <div className="comp-games-header">
                    <h1>Match Stats</h1>
                </div>
                <div className="match-stats">
                    <div className="matches">
                        <h2>Matches Played: {games.gamesPlayed}</h2>
                    </div>
                    <div className="matches">
                        <h2>Matches Won: {games.gamesWon}</h2>
                    </div>
                    <div className="matches">
                        <h2>Matches Lost: {games.gamesLost}</h2>
                    </div>
                    <div className="matches">
                        <h2>Matches Tied: {games.gamesTied}</h2>
                    </div>
                    <div className="matches">
                        <h2>Win Percentage: {winPercentage}%</h2>
                    </div>
                </div>
            </div>    : <div></div>}
            {activeStatDisplay === 'awards'? <div className="player-awards-container">
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
            </div> : <div></div>}
            <div className="player-comp-hero-display">
                <h1>See Hero Stats Below</h1>
            <PlayerHeroDisplay heroes={currentStats}/>
            </div>
        </div>
    );
};

export default PlayerCompetitive;