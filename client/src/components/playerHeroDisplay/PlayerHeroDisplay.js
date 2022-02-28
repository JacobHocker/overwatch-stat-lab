import React, { useState } from "react";
import { BsCaretDownSquareFill } from 'react-icons/bs';
import { BsCaretUpSquareFill } from 'react-icons/bs';
import './PlayerHeroDisplay.scss';

function PlayerHeroDisplay({ heroes }) {
    const [anaShow, setAnaShow] = useState(false);
    const [asheShow, setAsheShow] = useState(false);
    const [bapShow, setBapShow] = useState(false);
    const [cassShow, setCassShow] = useState(false);
    const [dvaShow, setDvaShow] = useState(false);
    const [echoShow, setEchoShow] = useState(false);
    const [genjiShow, setGenjiShow] = useState(false);
    const [hanzoShow, setHanzoShow] = useState(false);
    const [junkShow, setJunkShow] = useState(false);
    const [lucioShow, setLucioShow] = useState(false);
    const [orisaShow, setOrisaShow] = useState(false);
    const [pharahShow, setPharahShow] = useState(false);
    const [reaperShow, setReaperShow] = useState(false);
    const [reinShow, setReinShow] = useState(false);
    const [hogShow, setHogShow] = useState(false);
    const [sigShow, setSigShow] = useState(false);
    const [soldierShow, setSoldierShow] = useState(false);
    const [symShow, setSymShow] = useState(false);
    const [torbShow, setTorbShow] = useState(false);
    const [tracerShow, setTracerShow] = useState(false);
    const [widowShow, setWidowShow] = useState(false);
    const [winstonShow, setWinstonShow] = useState(false);
    const [ballShow, setBallShow] = useState(false);
    const [zarShow, setZarShow] = useState(false);
    const [zenShow, setZenShow] = useState(false);
    const [moiraShow, setMoiraShow] = useState(false);
    const [bastionShow, setBastionShow] = useState(false);
    const [doomShow, setDoomShow] = useState(false);
    const [brigShow, setBrigShow] = useState(false);
    const [mercyShow, setMercyShow] = useState(false);
    const [meiShow, setMeiShow] = useState(false);
    const [sombraShow, setSombraShow] = useState(false);
    const ana = heroes.ana 
    const ashe = heroes.ashe 
    const baptiste = heroes.baptiste
    const bastion = heroes.bastion 
    const brig = heroes.brigitte
    const cassidy = heroes.cassidy
    const dva = heroes.dVa 
    const doom = heroes.doomfist 
    const echo = heroes.echo 
    const genji = heroes.genji
    const hanzo = heroes.hanzo 
    const junkrat = heroes.junkrat 
    const lucio = heroes.lucio 
    const mei = heroes.mei 
    const mercy = heroes.mercy 
    const moira = heroes.moira 
    const orisa = heroes.orisa 
    const pharah = heroes.pharah
    const reaper = heroes.reaper
    const rein = heroes.reinhardt
    const hog = heroes.roadhog
    const sigma = heroes.sigma 
    const soldier = heroes.soldier76 
    const sombra = heroes.sombra 
    const sym = heroes.symmetra 
    const torb = heroes.torbjorn
    const tracer = heroes.tracer 
    const widow = heroes.widowmaker
    const winston = heroes.winston 
    const ball = heroes.wreckingBall
    const zarya = heroes.zarya
    const zen = heroes.zenyatta
    
    return(
        <div className="player-hero-display-container">
            {heroes.ana ? <div className="player-ana">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013B.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Ana</h2>
                    {anaShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setAnaShow(!anaShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setAnaShow(!anaShow)}/>}
                </div>
                {anaShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {ana.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {ana.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {ana.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {ana.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {ana.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {ana.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Healing Done: {ana.average.healingDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Hero Damage: {ana.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {ana.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {ana.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {ana.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Objective Time: {ana.average.objectiveTimeAvgPer10Min}</li>
                        <li className="player-stat-item">Time On Fire: {ana.average.timeSpentOnFireAvgPer10Min}</li>
                        <li className="player-stat-item">Enemies Slept: {ana.heroSpecific.enemiesSleptAvgPer10Min}</li>
                        <li className="player-stat-item">Nano Boost Applied: {ana.heroSpecific.nanoBoostsAppliedAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Scoped Accuracy: {ana.heroSpecific.scopedAccuracy}</li>
                        <li className="player-stat-item">Scoped Accuracy Best: {ana.heroSpecific.scopedAccuracyBestInGame}</li>
                        <li className="player-stat-item">Unscoped Accuracy: {ana.heroSpecific.unscopedAccuracy}</li>
                        <li className="player-stat-item">Unscoped Accuracy Best: {ana.heroSpecific.unscopedAccuracyBestInGame}</li>
                        <li className="player-stat-item">Enemies Slept: {ana.heroSpecific.enemiesSlept}</li>
                        <li className="player-stat-item">Enemies Slept Best: {ana.heroSpecific.enemiesSleptMostInGame}</li>
                        <li className="player-stat-item">Biotic Grenade Kills: {ana.heroSpecific.bioticGrenadeKills}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {ana.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {ana.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {ana.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {ana.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {ana.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {ana.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {ana.combat.timeSpentOnFire}</li>
                    </ul>
                </div> 
                : 
                <div></div>}
            </div>: <div></div>}
            {heroes.ashe ? <div className="player-ashe">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000200.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Ashe</h2>
                    {asheShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setAsheShow(!asheShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setAsheShow(!asheShow)}/>}
                </div>
                {asheShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {ashe.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {ashe.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {ashe.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {ashe.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {ashe.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {ashe.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {ashe.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {ashe.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {ashe.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {ashe.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {ashe.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {ashe.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {ashe.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Scoped Critical Hits: {ashe.heroSpecific.scopedCriticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">Scoped Critical Kills: {ashe.heroSpecific.scopedCriticalHitsKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Dynamite Kills: {ashe.heroSpecific.dynamiteKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Coach Gun Kills: {ashe.heroSpecific.coachGunKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Bob Kills: {ashe.heroSpecific.bobKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Scoped Accuracy: {ashe.heroSpecific.scopedAccuracy}</li>
                        <li className="player-stat-item">Scoped Critical Hits: {ashe.heroSpecific.scopedCriticalHits}</li>
                        <li className="player-stat-item">Dynamite Kills: {ashe.heroSpecific.dynamiteKills}</li>
                        <li className="player-stat-item">Coach Gun Kills: {ashe.heroSpecific.coachGunKills}</li>
                        <li className="player-stat-item">Bob Kills: {ashe.heroSpecific.bobKills}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {ashe.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {ashe.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {ashe.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {ashe.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {ashe.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {ashe.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {ashe.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.baptiste ? <div className="player-bap">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000221.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Baptiste</h2>
                    {bapShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setBapShow(!bapShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setBapShow(!bapShow)}/>}
                </div>
                {bapShow === true ?<div className="stat-area">
                <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {baptiste.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {baptiste.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {baptiste.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {baptiste.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {baptiste.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {baptiste.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Healing Done: {baptiste.average.healingDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Hero Damage: {baptiste.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {baptiste.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {baptiste.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {baptiste.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Objective Time: {baptiste.average.objectiveTimeAvgPer10Min}</li>
                        <li className="player-stat-item">Time On Fire: {baptiste.average.timeSpentOnFireAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {baptiste.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {baptiste.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Amplified: {baptiste.heroSpecific.damageAmplifiedAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {baptiste.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Amplification Matrix: {baptiste.heroSpecific.amplificationMatrixCastsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Healing Accuracy: {baptiste.heroSpecific.healingAccuracy}</li>
                        <li className="player-stat-item">Healing Accuracy Best: {baptiste.heroSpecific.healingAccuracyBestInGame}</li>
                        <li className="player-stat-item">Healing Amplified: {baptiste.heroSpecific.healingAmplified}</li>
                        <li className="player-stat-item">Deaths Prevented: {baptiste.heroSpecific.immortalityFieldDeathsPrevented}</li>
                        <li className="player-stat-item">Damage Amplified: {baptiste.heroSpecific.damageAmplified}</li>
                        <li className="player-stat-item">Amplification Matrix: {baptiste.heroSpecific.amplificationMatrixCasts}</li>
                        <li className="player-stat-item">Amplification Matrix Assists: {baptiste.heroSpecific.amplificationMatrixAssists}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {baptiste.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {baptiste.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {baptiste.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {baptiste.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {baptiste.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {baptiste.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {baptiste.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.bastion ? <div className="player-bastion">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000015.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Bastion</h2>
                    {bastionShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setBastionShow(!bastionShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setBastionShow(!bastionShow)}/>}
                </div>
                {bastionShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {bastion.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {bastion.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {bastion.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {bastion.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {bastion.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {bastion.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {bastion.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {bastion.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {bastion.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {bastion.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {bastion.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {bastion.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {bastion.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {bastion.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {bastion.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {bastion.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {bastion.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Reacon Kills: {bastion.heroSpecific.reconKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Sentry Kills: {bastion.heroSpecific.sentryKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Tank Kills: {bastion.heroSpecific.tankKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {bastion.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {bastion.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Reacon Kills: {bastion.heroSpecific.reconKills}</li>
                        <li className="player-stat-item">Reacon Kills Best: {bastion.heroSpecific.reconKillsMostInGame}</li>
                        <li className="player-stat-item">Sentry Kills: {bastion.heroSpecific.sentryKills}</li>
                        <li className="player-stat-item">Sentry Kills Best: {bastion.heroSpecific.sentryKillsMostInGame}</li>
                        <li className="player-stat-item">Tank Kills: {bastion.heroSpecific.tankKills}</li>
                        <li className="player-stat-item">Tank Kills Best: {bastion.heroSpecific.tankKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {bastion.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {bastion.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {bastion.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {bastion.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {bastion.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {bastion.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {bastion.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {bastion.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {bastion.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.brigitte ? <div className="player-brig">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000195.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Brigitte</h2>
                    {brigShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setBrigShow(!brigShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setBrigShow(!brigShow)}/>}
                </div>
                {brigShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {brig.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {brig.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {brig.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {brig.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {brig.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {brig.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Healing: {brig.average.healingDoneAvgPer10Min}</li> 
                        <li className="player-stat-item">Hero Damage: {brig.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {brig.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {brig.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {brig.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {brig.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {brig.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {brig.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {brig.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {brig.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {brig.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {brig.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {brig.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">Armor Provided: {brig.heroSpecific.armorProvidedAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Inspire Uptime: {brig.heroSpecific.inspireUptimePercentage}</li>
                        <li className="player-stat-item">Self Healing: {brig.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {brig.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Damage Blocked: {brig.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {brig.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">Armor Provided: {brig.heroSpecific.armorProvided}</li>
                        <li className="player-stat-item">Armor Provided Best: {brig.heroSpecific.armorProvidedMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {brig.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {brig.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {brig.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {brig.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {brig.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {brig.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {brig.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {brig.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {brig.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.cassidy ? <div className="player-cass">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000042.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Cassidy</h2>
                    {cassShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setCassShow(!cassShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setCassShow(!cassShow)}/>}
                </div>
                {cassShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {cassidy.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {cassidy.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {cassidy.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {cassidy.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {cassidy.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {cassidy.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {cassidy.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {cassidy.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {cassidy.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {cassidy.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {cassidy.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {cassidy.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {cassidy.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {cassidy.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {cassidy.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {cassidy.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Fan The Hammer Kills: {cassidy.heroSpecific.fanTheHammerKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Deadeye Kills: {cassidy.heroSpecific.deadeyeKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Deadeye Kills: {cassidy.heroSpecific.deadeyeKills}</li>
                        <li className="player-stat-item">Deadeye Kills Best: {cassidy.heroSpecific.deadeyeKillsMostInGame}</li>
                        <li className="player-stat-item">Fan The Hammer Kills: {cassidy.heroSpecific.fanTheHammerKills}</li>
                        <li className="player-stat-item">Fan The Hammer Kills Best: {cassidy.heroSpecific.fanTheHammerKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {cassidy.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {cassidy.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {cassidy.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {cassidy.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {cassidy.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {cassidy.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {cassidy.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.dVa ? <div className="player-dva">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000007A.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>D.Va</h2>
                    {dvaShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setDvaShow(!dvaShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setDvaShow(!dvaShow)}/>}
                </div>
                {dvaShow === true ?<div className="stat-area">
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {dva.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {dva.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {dva.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {dva.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {dva.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {dva.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {dva.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {dva.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {dva.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {dva.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {dva.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {dva.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {dva.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {dva.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {dva.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {dva.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Damaged Blocked: {dva.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">Mech's Called: {dva.heroSpecific.mechsCalledAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Damage Blocked: {dva.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {dva.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">Mechs Called: {dva.heroSpecific.mechsCalled}</li>
                        <li className="player-stat-item">Mech Deaths: {dva.heroSpecific.mechDeaths}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {dva.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {dva.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {dva.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {dva.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {dva.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {dva.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {dva.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.doomfist ? <div className="player-doom">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012F.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Doomfist</h2>
                    {doomShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setDoomShow(!doomShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setDoomShow(!doomShow)}/>}
                </div>
                {doomShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {doom.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {doom.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {doom.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {doom.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {doom.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {doom.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {doom.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {doom.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {doom.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {doom.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {doom.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {doom.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {doom.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {doom.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {doom.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {doom.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Ability Damage: {doom.heroSpecific.abilityDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Shields Created: {doom.heroSpecific.shieldsCreatedAvgPer10Min}</li>
                        <li className="player-stat-item">Meteor Strike Kills: {doom.heroSpecific.meteorStrikeKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Ability Damage: {doom.heroSpecific.abilityDamageDone}</li>
                        <li className="player-stat-item">Ability Damage Best: {doom.heroSpecific.abilityDamageDoneMostInGame}</li>
                        <li className="player-stat-item">Shields Created: {doom.heroSpecific.shieldsCreated}</li>
                        <li className="player-stat-item">Shields Created Best: {doom.heroSpecific.shieldsCreatedMostInGame}</li>
                        <li className="player-stat-item">Meteor Strike Kills: {doom.heroSpecific.meteorStrikeKills}</li>
                        <li className="player-stat-item">Meteor Strike Kills Best: {doom.heroSpecific.meteorStrikeKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {doom.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {doom.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {doom.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {doom.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {doom.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {doom.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {doom.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {doom.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {doom.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.echo ? <div className="player-echo">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000206.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Echo</h2>
                    {echoShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setEchoShow(!echoShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setEchoShow(!echoShow)}/>}
                </div>
                {echoShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {echo.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {echo.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {echo.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {echo.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {echo.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {echo.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {echo.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {echo.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {echo.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {echo.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {echo.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {echo.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {echo.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {echo.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {echo.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {echo.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Sticky Bomb Direct Hits: {echo.average.stickyBombsDirectHitsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Focusing Beam Accuracy: {echo.heroSpecific.focusingBeamAccuracy}</li>
                        <li className="player-stat-item">Sticky Bomb Direct Hits Accuracy: {echo.heroSpecific.stickyBombsDirectHitsAccuracy}</li>
                        <li className="player-stat-item">Sticky Bomb Direct Hits Best: {echo.heroSpecific.stickyBombsDirectHitsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {echo.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {echo.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {echo.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {echo.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {echo.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {echo.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {echo.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.genji ? <div className="player-genji">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000029.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Genji</h2>
                    {genjiShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setGenjiShow(!genjiShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setGenjiShow(!genjiShow)}/>}
                </div>
                {genjiShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {genji.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {genji.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {genji.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {genji.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {genji.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {genji.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {genji.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {genji.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {genji.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {genji.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {genji.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {genji.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {genji.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {genji.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {genji.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {genji.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Reflected: {genji.heroSpecific.damageReflectedAvgPer10Min}</li>
                        <li className="player-stat-item">Dragonblade Kills: {genji.heroSpecific.dragonbladesKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Damage Reflected: {genji.heroSpecific.damageReflected}</li>
                        <li className="player-stat-item">Deflection Kills: {genji.heroSpecific.deflectionKills}</li>
                        <li className="player-stat-item">Dragonblade Kills: {genji.heroSpecific.dragonbladesKills}</li>
                        <li className="player-stat-item">Dragonblade Kills Best: {genji.heroSpecific.dragonbladesKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {genji.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {genji.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {genji.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {genji.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {genji.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {genji.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {genji.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.hanzo ? <div className="player-hanzo">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000005.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Hanzo</h2>
                    {hanzoShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setHanzoShow(!hanzoShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setHanzoShow(!hanzoShow)}/>}
                </div>
                {hanzoShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {hanzo.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {hanzo.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {hanzo.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {hanzo.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {hanzo.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {hanzo.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {hanzo.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {hanzo.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {hanzo.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {hanzo.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {hanzo.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {hanzo.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {hanzo.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {hanzo.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {hanzo.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {hanzo.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Storm Arrow: {hanzo.heroSpecific.stormArrowKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Dragonstrike Kills: {hanzo.heroSpecific.dragonstrikeKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Storm Arrow Kills: {hanzo.heroSpecific.stormArrowKills}</li>
                        <li className="player-stat-item">Storm Arrow Kills Best: {hanzo.heroSpecific.stormArrowKillsMostInGame}</li>
                        <li className="player-stat-item">Dragonstrike Kills: {hanzo.heroSpecific.dragonstrikeKills}</li>
                        <li className="player-stat-item">Dragonstrike Kills Best: {hanzo.heroSpecific.dragonstrikeKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {hanzo.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {hanzo.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {hanzo.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {hanzo.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {hanzo.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {hanzo.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {hanzo.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.junkrat ? <div className="player-junk">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000065.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Junkrat</h2>
                    {junkShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setJunkShow(!junkShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setJunkShow(!junkShow)}/>}
                </div>
                {junkShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {junkrat.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {junkrat.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {junkrat.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {junkrat.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {junkrat.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {junkrat.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {junkrat.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {junkrat.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {junkrat.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {junkrat.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {junkrat.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {junkrat.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {junkrat.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {junkrat.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {junkrat.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {junkrat.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Concussion Mine Kills: {junkrat.heroSpecific.concussionMineKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Enemies Trapped: {junkrat.heroSpecific.enemiesTrappedAvgPer10Min}</li>
                        <li className="player-stat-item">Rip Tire Kills: {junkrat.heroSpecific.ripTireKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Concussion Mine Kills: {junkrat.heroSpecific.concussionMineKills}</li>
                        <li className="player-stat-item">Concussion Mine Kills Best: {junkrat.heroSpecific.concussionMineKillsMostInGame}</li>
                        <li className="player-stat-item">Enemies Trapped: {junkrat.heroSpecific.enemiesTrapped}</li>
                        <li className="player-stat-item">Enemies Trapped Best: {junkrat.heroSpecific.enemiesTrappedMostInGame}</li>
                        <li className="player-stat-item">Rip Tire Kills: {junkrat.heroSpecific.ripTireKills}</li>
                        <li className="player-stat-item">Rip Tire Kills Best: {junkrat.heroSpecific.ripTireKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">All Damage Done: {junkrat.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {junkrat.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {junkrat.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {junkrat.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {junkrat.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {junkrat.combat.deaths}</li>
                        <li className="player-stat-item">Time On Fire: {junkrat.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.lucio ? <div className="player-lucio">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000079.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Lucio</h2>
                    {lucioShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setLucioShow(!lucioShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setLucioShow(!lucioShow)}/>}
                </div>
                {lucioShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {lucio.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {lucio.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {lucio.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {lucio.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {lucio.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {lucio.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Healing Done: {lucio.average.healingDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Hero Damage: {lucio.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {lucio.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {lucio.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {lucio.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {lucio.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {lucio.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {lucio.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {lucio.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {lucio.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {lucio.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {lucio.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Sound Barriers Provided: {lucio.heroSpecific.soundBarriersProvidedAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {lucio.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {lucio.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Sound Barriers Provided: {lucio.heroSpecific.soundBarriersProvided}</li>
                        <li className="player-stat-item">Sound Barriers Provided Best: {lucio.heroSpecific.soundBarriersProvidedMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {lucio.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {lucio.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {lucio.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {lucio.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {lucio.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {lucio.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {lucio.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {lucio.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {lucio.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.mei ? <div className="player-mei">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000000DD.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Mei</h2>
                    {meiShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setMeiShow(!meiShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setMeiShow(!meiShow)}/>}
                </div>
                {meiShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {mei.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {mei.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {mei.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {mei.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {mei.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {mei.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {mei.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {mei.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {mei.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {mei.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {mei.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {mei.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {mei.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {mei.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {mei.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {mei.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {mei.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {mei.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">Enemies Frozen: {mei.heroSpecific.enemiesFrozenAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {mei.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {mei.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Damage Blocked: {mei.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {mei.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">Enemies Frozen: {mei.heroSpecific.enemiesFrozen}</li>
                        <li className="player-stat-item">Enemies Frozen Best: {mei.heroSpecific.enemiesFrozenMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {mei.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {mei.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {mei.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {mei.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {mei.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {mei.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {mei.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {mei.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {mei.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.mercy ? <div className="player-mercy">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000004.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Mercy</h2>
                    {mercyShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setMercyShow(!mercyShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setMercyShow(!mercyShow)}/>}
                </div>
                {mercyShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {mercy.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {mercy.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {mercy.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {mercy.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {mercy.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {mercy.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Healing: {mercy.average.healingDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Hero Damage: {mercy.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {mercy.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {mercy.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {mercy.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {mercy.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {mercy.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {mercy.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {mercy.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {mercy.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {mercy.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {mercy.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Blaster Kills: {mercy.heroSpecific.blasterKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Amplified: {mercy.heroSpecific.damageAmplifiedAvgPer10Min}</li>
                        <li className="player-stat-item">Players Resurrected: {mercy.heroSpecific.playersResurrectedAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {mercy.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {mercy.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Blaster Kills: {mercy.heroSpecific.blasterKills}</li>
                        <li className="player-stat-item">Blaster Kills Best: {mercy.heroSpecific.blasterKillsMostInGame}</li>
                        <li className="player-stat-item">Damage Amplified: {mercy.heroSpecific.damageAmplified}</li>
                        <li className="player-stat-item">Damage Amplified Best: {mercy.heroSpecific.damageAmplifiedMostInGame}</li>
                        <li className="player-stat-item">Players Resurrected: {mercy.heroSpecific.playersResurrected}</li>
                        <li className="player-stat-item">Players Resurrected Best: {mercy.heroSpecific.playersResurrectedMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {mercy.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {mercy.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {mercy.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {mercy.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {mercy.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {mercy.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {mercy.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {mercy.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {mercy.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.moira ? <div className="player-moira">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000001A2.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Moira</h2>
                    {moiraShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setDoomShow(!moiraShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setMoiraShow(!moiraShow)}/>}
                </div>
                {moiraShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {moira.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {moira.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {moira.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {moira.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {moira.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {moira.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Healing: {moira.average.healingDoneAvgPer10Min}</li> 
                        <li className="player-stat-item">Hero Damage: {moira.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {moira.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {moira.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {moira.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {moira.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {moira.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {moira.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {moira.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {moira.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {moira.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {moira.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Coalescence Healing: {moira.heroSpecific.coalescenceHealingAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {moira.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {moira.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Coalescence Healing: {moira.heroSpecific.coalescenceHealing}</li>
                        <li className="player-stat-item">Coalescence Healing Best: {moira.heroSpecific.coalescenceHealingMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {moira.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {moira.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {moira.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {moira.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {moira.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {moira.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {moira.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {moira.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {moira.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.orisa ? <div className="player-orisa">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013E.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Orisa</h2>
                    {orisaShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setOrisaShow(!orisaShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setOrisaShow(!orisaShow)}/>}
                </div>
                {orisaShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {orisa.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {orisa.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {orisa.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {orisa.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {orisa.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {orisa.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {orisa.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {orisa.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {orisa.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {orisa.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {orisa.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {orisa.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {orisa.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {orisa.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {orisa.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {orisa.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {orisa.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Amplified: {orisa.heroSpecific.damageAmplifiedAvgPer10Min}</li>
                        <li className="player-stat-item">Super Charger Assists: {orisa.heroSpecific.superchargerAssistsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Damage Blocked: {orisa.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {orisa.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">Damage Amplified: {orisa.heroSpecific.damageAmplified}</li>
                        <li className="player-stat-item">Damage Amplified Best: {orisa.heroSpecific.damageAmplifiedMostInGame}</li>
                        <li className="player-stat-item">Super Charger Assists: {orisa.heroSpecific.superchargerAssists}</li>
                        <li className="player-stat-item">Super Charger Assists Best: {orisa.heroSpecific.superchargerAssistsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {orisa.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {orisa.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {orisa.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {orisa.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {orisa.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {orisa.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {orisa.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {orisa.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {orisa.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.pharah ? <div className="player-pharah">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000008.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Pharah</h2>
                    {pharahShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setPharahShow(!pharahShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setPharahShow(!pharahShow)}/>}
                </div>
                {pharahShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {pharah.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {pharah.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {pharah.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {pharah.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {pharah.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {pharah.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {pharah.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {pharah.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {pharah.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {pharah.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {pharah.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {pharah.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {pharah.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {pharah.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {pharah.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {pharah.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Rocket Direct Hits: {pharah.heroSpecific.rocketDirectHitsAvgPer10Min}</li>
                        <li className="player-stat-item">Barrage Kills: {pharah.heroSpecific.barrageKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Rocket Direct Hits Accuracy: {pharah.heroSpecific.directHitsAccuracy}</li>
                        <li className="player-stat-item">Rocket Direct Hits: {pharah.heroSpecific.rocketDirectHits}</li>
                        <li className="player-stat-item">Rocket Direct Hits Best: {pharah.heroSpecific.rocketDirectHitsMostInGame}</li>
                        <li className="player-stat-item">Barrage Kills: {pharah.heroSpecific.barrageKills}</li>
                        <li className="player-stat-item">Barrage Kills Best: {pharah.heroSpecific.barrageKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {pharah.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {pharah.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {pharah.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {pharah.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {pharah.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {pharah.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {pharah.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {pharah.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {pharah.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.reaper ? <div className="player-reaper">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000002.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Reaper</h2>
                    {reaperShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setReaperShow(!reaperShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setReaperShow(!reaperShow)}/>}
                </div>
                {reaperShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {reaper.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {reaper.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {reaper.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {reaper.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {reaper.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {reaper.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {reaper.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {reaper.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {reaper.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {reaper.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {reaper.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {reaper.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {reaper.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {reaper.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {reaper.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {reaper.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {reaper.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Death Blossom Kills: {reaper.heroSpecific.deathsBlossomKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {reaper.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {reaper.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Death Blossom Kills: {reaper.heroSpecific.deathBlossomKills}</li>
                        <li className="player-stat-item">Death Blossom Kills Best: {reaper.heroSpecific.deathBlossomKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {reaper.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {reaper.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {reaper.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {reaper.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {reaper.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {reaper.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {reaper.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {reaper.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {reaper.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.reinhardt ? <div className="player-rein">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Reinhardt</h2>
                    {reinShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setReinShow(!reinShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setReinShow(!reinShow)}/>}
                </div>
                {reinShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {rein.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {rein.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {rein.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {rein.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {rein.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {rein.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {rein.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {rein.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {rein.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {rein.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {rein.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {rein.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {rein.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {rein.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {rein.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {rein.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Fire Strike Kills: {rein.heroSpecific.fireStrikeKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Charge Kills: {rein.heroSpecific.chargeKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {rein.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">Earth Shatter Kills: {rein.heroSpecific.earthshatterKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Rocket Hammer Accuracy: {rein.heroSpecific.rocketHammerMeleeAccuracy}</li>
                        <li className="player-stat-item">Fire Strike Kills: {rein.heroSpecific.fireStrikeKills}</li>
                        <li className="player-stat-item">Fire Strike Kills Best: {rein.heroSpecific.fireStrikeKillsMostInGame}</li>
                        <li className="player-stat-item">Charge Kills: {rein.heroSpecific.chargeKills}</li>
                        <li className="player-stat-item">Charge Kills Best: {rein.heroSpecific.chargeKillsMostInGame}</li>
                        <li className="player-stat-item">Damage Blocked: {rein.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {rein.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">Earth Shatter Kills: {rein.heroSpecific.earthshatterKills}</li>
                        <li className="player-stat-item">Earth Shatter Kills Best: {rein.heroSpecific.earthshatterKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {rein.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {rein.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {rein.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {rein.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {rein.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {rein.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {rein.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {rein.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {rein.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.roadhog ? <div className="player-hog">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000040.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Roadhog</h2>
                    {hogShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setHogShow(!hogShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setHogShow(!hogShow)}/>}
                </div>
                {hogShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {hog.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {hog.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {hog.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {hog.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {hog.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {hog.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {hog.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {hog.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {hog.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {hog.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {hog.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {hog.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {hog.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {hog.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {hog.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {hog.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {hog.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Enemies Hooked: {hog.heroSpecific.enemiesHookedAvgPer10Min}</li>
                        <li className="player-stat-item">Whole Hog Kills: {hog.heroSpecific.wholeHogKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {hog.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {hog.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Hooks Attempted: {hog.heroSpecific.hooksAttempted}</li>
                        <li className="player-stat-item">Enemies Hooked: {hog.heroSpecific.enemiesHooked}</li>
                        <li className="player-stat-item">Hook Accuracy: {hog.heroSpecific.hookAccuracy}</li>
                        <li className="player-stat-item">Hook Accuracy Best: {hog.heroSpecific.hookAccuracyBestInGame}</li>
                        <li className="player-stat-item">Enemies Hooked Best: {hog.heroSpecific.enemiesHookedMostInGame}</li>
                        <li className="player-stat-item">Whole Hog Kills: {hog.heroSpecific.wholeHogKills}</li>
                        <li className="player-stat-item">Whole Hog Kills Best: {hog.heroSpecific.wholeHogKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {hog.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {hog.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {hog.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {hog.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {hog.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {hog.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {hog.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {hog.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {hog.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.sigma ? <div className="player-sigma">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000023B.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Sigma</h2>
                    {sigShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setSigShow(!sigShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setSigShow(!sigShow)}/>}
                </div>
                {sigShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {sigma.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {sigma.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {sigma.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {sigma.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {sigma.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {sigma.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {sigma.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {sigma.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {sigma.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {sigma.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {sigma.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {sigma.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {sigma.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {sigma.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {sigma.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {sigma.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Accretion Kills: {sigma.heroSpecific.accretionKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Absorbed: {sigma.heroSpecific.damageAbsorbedAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {sigma.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">Gravitic Flux Kills: {sigma.heroSpecific.graviticFluxKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Accretion Kills: {sigma.heroSpecific.accretionKills}</li>
                        <li className="player-stat-item">Accretion Kills Best: {sigma.heroSpecific.accretionKillsMostInGame}</li>
                        <li className="player-stat-item">Damage Absorbed: {sigma.heroSpecific.damageAbsorbed}</li>
                        <li className="player-stat-item">Damage Absorbed Best: {sigma.heroSpecific.damageAbsorbedMostInGame}</li>
                        <li className="player-stat-item">Damage Blocked: {sigma.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {sigma.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">Gravitic Flux Kills: {sigma.heroSpecific.graviticFluxKills}</li>
                        <li className="player-stat-item">Gravitic Flux Kills Best: {sigma.heroSpecific.graviticFluxKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {sigma.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {sigma.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {sigma.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {sigma.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {sigma.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {sigma.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {sigma.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {sigma.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {sigma.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.soldier76 ? <div className="player-soldier">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000006E.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Soldier 76</h2>
                    {soldierShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setSoldierShow(!soldierShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setSoldierShow(!soldierShow)}/>}
                </div>
                {soldierShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {soldier.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {soldier.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {soldier.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {soldier.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {soldier.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {soldier.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {soldier.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {soldier.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {soldier.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {soldier.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {soldier.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {soldier.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {soldier.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {soldier.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {soldier.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {soldier.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Helix Rocket Kills: {soldier.heroSpecific.helixRocketKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {soldier.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Tactical Visor Kills: {soldier.heroSpecific.tacticalVisorKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Biotic Field Healing Done: {soldier.heroSpecific.bioticFieldHealingDone}</li>
                        <li className="player-stat-item">Biotic Fields Deployed: {soldier.heroSpecific.bioticFieldsDeployed}</li>
                        <li className="player-stat-item">Helix Rocket Kills: {soldier.heroSpecific.helixRocketKills}</li>
                        <li className="player-stat-item">Helix Rocket Kills Best: {soldier.heroSpecific.helixRocketKillsMostInGame}</li>
                        <li className="player-stat-item">Self Healing: {soldier.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {soldier.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Tactical Visor Kills: {soldier.heroSpecific.tacticalVisorKills}</li>
                        <li className="player-stat-item">Tactical Visor Kills Best: {soldier.heroSpecific.tacticalVisorKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {soldier.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {soldier.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {soldier.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {soldier.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {soldier.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {soldier.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {soldier.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {soldier.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {soldier.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.sombra ? <div className="player-sombra">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012E.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Sombra</h2>
                    {sombraShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setSombraShow(!sombraShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setSombraShow(!sombraShow)}/>}
                </div>
                {sombraShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {sombra.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {sombra.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {sombra.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {sombra.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {sombra.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {sombra.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {sombra.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {sombra.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {sombra.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {sombra.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {sombra.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {sombra.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {sombra.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {sombra.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {sombra.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {sombra.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Enemies Hacked: {sombra.heroSpecific.enemiesHackedAvgPer10Min}</li>
                        <li className="player-stat-item">Enemies Emp'ed: {sombra.heroSpecific.enemiesEmpdAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Enemies Hacked: {sombra.heroSpecific.enemiesHacked}</li>
                        <li className="player-stat-item">Enemies Hacked Best: {sombra.heroSpecific.enemiesHackedMostInGame}</li>
                        <li className="player-stat-item">Enemies Emp'ed: {sombra.heroSpecific.enemiesEmpd}</li>
                        <li className="player-stat-item">Enemies Emp'ed Best: {sombra.heroSpecific.enemiesEmpdMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {sombra.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {sombra.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {sombra.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {sombra.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {sombra.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {sombra.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {sombra.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {sombra.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {sombra.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.symmetra ? <div className="player-sym">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000016.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Symmetra</h2>
                    {symShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setSymShow(!symShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setSymShow(!symShow)}/>}
                </div>
                {symShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {sym.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {sym.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {sym.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {sym.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {sym.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {sym.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {sym.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {sym.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {sym.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {sym.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {sym.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {sym.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {sym.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {sym.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {sym.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {sym.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Players Teleported: {sym.heroSpecific.playersTeleportedAvgPer10Min}</li>
                        <li className="player-stat-item">Secondary Fire Direct Hits: {sym.heroSpecific.secondaryDirectHitsAvgPer10Min}</li>
                        <li className="player-stat-item">Sentry Turret Kills: {sym.heroSpecific.sentryTurretsKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {sym.heroSpecific.damageBlockedAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Primary Fire Accuracy: {sym.heroSpecific.primaryFireAccuracy}</li>
                        <li className="player-stat-item">Secondary Fire Accuracy: {sym.heroSpecific.secondaryFireAccuracy}</li>
                        <li className="player-stat-item">Players Teleported: {sym.heroSpecific.playersTeleported}</li>
                        <li className="player-stat-item">Players Teleported Best: {sym.heroSpecific.playersTeleportedMostInGame}</li>
                        <li className="player-stat-item">Sentry Turret Kills: {sym.heroSpecific.sentryTurretsKills}</li>
                        <li className="player-stat-item">Sentry Turret Kills Best: {sym.heroSpecific.sentryTurretsKillsMostInGame}</li>
                        <li className="player-stat-item">Damage Blocked: {sym.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {sym.heroSpecific.damageBlockedMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {sym.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {sym.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {sym.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {sym.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {sym.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {sym.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {sym.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {sym.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {sym.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.torbjorn ? <div className="player-torb">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000006.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Torbjorn</h2>
                    {torbShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setTorbShow(!torbShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setTorbShow(!torbShow)}/>}
                </div>
                {torbShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {torb.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {torb.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {torb.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {torb.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {torb.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {torb.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {torb.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {torb.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {torb.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {torb.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {torb.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {torb.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {torb.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {torb.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {torb.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {torb.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Torbjorn Kills: {torb.heroSpecific.torbjornKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Turret Kills: {torb.heroSpecific.turretsKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Molten Core Kills: {torb.heroSpecific.moltenCoreKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hammer Kills: {torb.heroSpecific.hammerKills}</li>
                        <li className="player-stat-item">Hammer Kills Best: {torb.heroSpecific.hammerKillsMostInGame}</li>
                        <li className="player-stat-item">Overload Kills: {torb.heroSpecific.overloadKills}</li>
                        <li className="player-stat-item">Overload Kills Best: {torb.heroSpecific.overloadKillsMostInGame}</li>
                        <li className="player-stat-item">Torbjorn Kills: {torb.heroSpecific.torbjornKills}</li>
                        <li className="player-stat-item">Torbjorn Kills Best: {torb.heroSpecific.torbjornKillsMostInGame}</li>
                        <li className="player-stat-item">Turret Kills: {torb.heroSpecific.turretsKills}</li>
                        <li className="player-stat-item">Turret Kills Best: {torb.heroSpecific.turretsKillsMostInGame}</li>
                        <li className="player-stat-item">Molten Core Kills: {torb.heroSpecific.moltenCoreKills}</li>
                        <li className="player-stat-item">Molten Care Kills Best: {torb.heroSpecific.moltenCoreKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {torb.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {torb.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {torb.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {torb.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {torb.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {torb.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {torb.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {torb.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {torb.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.tracer ? <div className="player-tracer">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000003.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Tracer</h2>
                    {tracerShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setTracerShow(!tracerShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setTracerShow(!tracerShow)}/>}
                </div>
                {tracerShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {tracer.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {tracer.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {tracer.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {tracer.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {tracer.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {tracer.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {tracer.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {tracer.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {tracer.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {tracer.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {tracer.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {tracer.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {tracer.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {tracer.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {tracer.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {tracer.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Health Recovered: {tracer.heroSpecific.healthRecoveredAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {tracer.heroSpecific.selfHealingAvgPer10Min}</li>
                        <li className="player-stat-item">Pulse Bombs Attached: {tracer.heroSpecific.pulseBombsAttachedAvgPer10Min}</li>
                        <li className="player-stat-item">Pulse Bombs Kills: {tracer.heroSpecific.pulseBombsKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Health Recoved: {tracer.heroSpecific.healthRecovered}</li>
                        <li className="player-stat-item">Health Recoved Best: {tracer.heroSpecific.healthRecoveredMostInGame}</li>
                        <li className="player-stat-item">Self Healing: {tracer.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {tracer.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Pulse Bombs Attached: {tracer.heroSpecific.pulseBombsAttached}</li>
                        <li className="player-stat-item">Pulse Bombs Attached Best: {tracer.heroSpecific.pulseBombsAttachedMostInGame}</li>
                        <li className="player-stat-item">Pulse Bombs Kills: {tracer.heroSpecific.pulseBombsKills}</li>
                        <li className="player-stat-item">Pulse Bombs Kills Best: {tracer.heroSpecific.pulseBombsKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {tracer.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {tracer.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {tracer.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {tracer.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {tracer.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {tracer.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {tracer.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {tracer.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {tracer.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.widowmaker ? <div className="player-widow">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000000A.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Widowmaker</h2>
                    {widowShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setWidowShow(!widowShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setWidowShow(!widowShow)}/>}
                </div>
                {widowShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {widow.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {widow.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {widow.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {widow.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {widow.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {widow.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {widow.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {widow.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {widow.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {widow.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {widow.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {widow.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {widow.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {widow.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {widow.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {widow.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Scoped Critical Hits: {widow.heroSpecific.scopedCriticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">Scoped Critical Hit Kills: {widow.heroSpecific.scopedCriticalHitsKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Venom Mine Kills: {widow.heroSpecific.venomMineKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Scoped Accuracy: {widow.heroSpecific.scopedAccuracy}</li>
                        <li className="player-stat-item">Scoped Accuracy Best: {widow.heroSpecific.scopedAccuracyBestInGame}</li>
                        <li className="player-stat-item">Scoped Critical Hits Accuracy: {widow.heroSpecific.scopedCriticalHitsAccuracy}</li>
                        <li className="player-stat-item">Scoped Critical Hit Kills: {widow.heroSpecific.scopedCriticalHitsKills}</li>
                        <li className="player-stat-item">Scoped Critical Hit Kills Best: {widow.heroSpecific.scopedCriticalHitsMostInGame}</li>
                        <li className="player-stat-item">Scoped Critical Hits: {widow.heroSpecific.scopedCriticalHits}</li>
                        <li className="player-stat-item">Scoped Critical Hits Best: {widow.heroSpecific.scopedCriticalHitsMostInGame}</li>
                        <li className="player-stat-item">Venom Mine Kills: {widow.heroSpecific.venomMineKills}</li>
                        <li className="player-stat-item">Venom Mine Kills Best: {widow.heroSpecific.venomMineKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {widow.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {widow.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {widow.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {widow.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {widow.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {widow.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {widow.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {widow.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {widow.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.winston ? <div className="player-winston">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000009.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Winston</h2>
                    {winstonShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setWinstonShow(!winstonShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setWinstonShow(!winstonShow)}/>}
                </div>
                {winstonShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {winston.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {winston.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {winston.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {winston.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {winston.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {winston.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {winston.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {winston.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {winston.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {winston.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {winston.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {winston.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {winston.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {winston.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {winston.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {winston.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {winston.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">Jump Pack Kills: {winston.heroSpecific.jumpPackKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Plauers Knocked Back: {winston.heroSpecific.playersKnockedBackAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Damage Blocked: {winston.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {winston.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">Jump Pack Kills: {winston.heroSpecific.jumpPackKills}</li>
                        <li className="player-stat-item">Jump Pack Kills Best: {winston.heroSpecific.jumpPackKillsMostInGame}</li>
                        <li className="player-stat-item">Plauers Knocked Back: {winston.heroSpecific.playersKnockedBack}</li>
                        <li className="player-stat-item">Plauers Knocked Back Best: {winston.heroSpecific.playersKnockedBackMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {winston.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {winston.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {winston.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {winston.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {winston.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {winston.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {winston.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {winston.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {winston.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.wreckingBall ? <div className="player-ball">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000001CA.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Wrecking Ball</h2>
                    {ballShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setBallShow(!ballShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setBallShow(!ballShow)}/>}
                </div>
                {ballShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {ball.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {ball.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {ball.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {ball.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {ball.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {ball.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {ball.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {ball.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {ball.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {ball.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {ball.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {ball.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {ball.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {ball.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {ball.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {ball.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Grappling Claw Kills: {ball.heroSpecific.grapplingClawKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Piledriver Kills: {ball.heroSpecific.piledriverKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Plauers Knocked Back: {ball.heroSpecific.playersKnockedBackAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Grappling Claw Kills: {ball.heroSpecific.grapplingClawKills}</li>
                        <li className="player-stat-item">Grappling Claw Kills Best: {ball.heroSpecific.grapplingClawKillsMostInGame}</li>
                        <li className="player-stat-item">Piledriver Kills: {ball.heroSpecific.piledriverKills}</li>
                        <li className="player-stat-item">Piledriver Kills Best: {ball.heroSpecific.piledriverKillsMostInGame}</li>
                        <li className="player-stat-item">Plauers Knocked Back: {ball.heroSpecific.playersKnockedBack}</li>
                        <li className="player-stat-item">Plauers Knocked Back Best: {ball.heroSpecific.playersKnockedBackMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {ball.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {ball.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {ball.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {ball.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {ball.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {ball.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {ball.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {ball.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {ball.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.zarya ? <div className="player-zarya">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000068.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Zarya</h2>
                    {zarShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setZarShow(!zarShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setZarShow(!zarShow)}/>}
                </div>
                {zarShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {zarya.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {zarya.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {zarya.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {zarya.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {zarya.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {zarya.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Hero Damage: {zarya.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {zarya.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {zarya.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {zarya.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {zarya.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {zarya.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {zarya.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {zarya.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {zarya.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {zarya.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Damage Blocked: {zarya.heroSpecific.damageBlockedAvgPer10Min}</li>
                        <li className="player-stat-item">High Energy Kills: {zarya.heroSpecific.highEnergyKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Graviton Surge Kills: {zarya.heroSpecific.gravitonSurgeKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Average Energy: {zarya.heroSpecific.averageEnergy}</li>
                        <li className="player-stat-item">Average Energy Best: {zarya.heroSpecific.averageEnergyBestInGame}</li>
                        <li className="player-stat-item">Damage Blocked: {zarya.heroSpecific.damageBlocked}</li>
                        <li className="player-stat-item">Damage Blocked Best: {zarya.heroSpecific.damageBlockedMostInGame}</li>
                        <li className="player-stat-item">High Energy Kills: {zarya.heroSpecific.highEnergyKills}</li>
                        <li className="player-stat-item">High Energy Kills Best: {zarya.heroSpecific.highEnergyKillsMostInGame}</li>
                        <li className="player-stat-item">Graviton Surge Kills: {zarya.heroSpecific.gravitonSurgeKills}</li>
                        <li className="player-stat-item">Graviton Surge Kills Best: {zarya.heroSpecific.gravitonSurgeKillsMostInGame}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {zarya.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {zarya.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {zarya.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {zarya.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {zarya.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {zarya.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {zarya.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {zarya.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {zarya.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            {heroes.zenyatta ? <div className="player-zen">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000020.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Zenyatta</h2>
                    {zenShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setZenShow(!zenShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setZenShow(!zenShow)}/>}
                </div>
                {zenShow === true ?<div className="stat-area">
                    <h3>Match Stats</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Time Played: {zen.game.timePlayed}</li>
                        <li className="player-stat-item">Games Played: {zen.game.gamesPlayed}</li>
                        <li className="player-stat-item">Games Won: {zen.game.gamesWon}</li>
                        <li className="player-stat-item">Games Lost: {zen.game.gamesLost}</li>
                        <li className="player-stat-item">Games Tied: {zen.game.gamesTied}</li>
                        <li className="player-stat-item">Win Percentage: {zen.game.winPercentage}</li>
                    </ul>
                    <h3>Average / 10 Min</h3>
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Healing: {zen.average.healingDoneAvgPer10Min}</li> 
                        <li className="player-stat-item">Hero Damage: {zen.average.heroDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations: {zen.average.eliminationsAvgPer10Min}</li>
                        <li className="player-stat-item">Eliminations Per Life: {zen.average.eliminationsPerLife}</li>
                        <li className="player-stat-item">Objective Kills: {zen.average.objectiveKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Solo Kills: {zen.average.soloKillsAvgPer10Min}</li>
                        <li className="player-stat-item">Final Blows: {zen.average.finalBlowsAvgPer10Min}</li>
                        <li className="player-stat-item">Deaths: {zen.average.deathsAvgPer10Min}</li>
                        <li className="player-stat-item">Critical Hits: {zen.average.criticalHitsAvgPer10Min}</li>
                        <li className="player-stat-item">All Damage Done: {zen.average.allDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Barrier Damage: {zen.average.barrierDamageDoneAvgPer10Min}</li>
                        <li className="player-stat-item">Self Healing: {zen.heroSpecific.selfHealingAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Self Healing: {zen.heroSpecific.selfHealing}</li>
                        <li className="player-stat-item">Self Healing Best: {zen.heroSpecific.selfHealingMostInGame}</li>
                        <li className="player-stat-item">Transcendence Healing: {zen.heroSpecific.transcendenceHealing}</li>
                        <li className="player-stat-item">Transcendence Healing Best: {zen.heroSpecific.transcendenceHealingBest}</li>
                    </ul>
                    <h3>Combat Totals</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Weapon Accuracy: {zen.combat.weaponAccuracy}</li>
                        <li className="player-stat-item">All Damage Done: {zen.combat.damageDone}</li>
                        <li className="player-stat-item">Hero Damage: {zen.combat.heroDamageDone}</li>
                        <li className="player-stat-item">Eliminations: {zen.combat.eliminations}</li>
                        <li className="player-stat-item">Final Blows: {zen.combat.finalBlows}</li>
                        <li className="player-stat-item">Objective Kills: {zen.combat.objectiveKills}</li>
                        <li className="player-stat-item">Deaths: {zen.combat.deaths}</li>
                        <li className="player-stat-item">Environmental Kills: {zen.combat.environmentalKills}</li>
                        <li className="player-stat-item">Time On Fire: {zen.combat.timeSpentOnFire}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>}
            
        </div>
    );
};

export default PlayerHeroDisplay;