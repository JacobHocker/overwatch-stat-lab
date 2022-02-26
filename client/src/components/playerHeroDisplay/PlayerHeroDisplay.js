import React, { useState } from "react";
import { BsCaretDownSquareFill } from 'react-icons/bs';
import { BsCaretUpSquareFill } from 'react-icons/bs';
import './PlayerHeroDisplay.scss';

function PlayerHeroDisplay({ heroes }) {
    const [anaShow, setAnaShow] = useState(false);
     const [asheShow, setAsheShow] = useState(false);
    // const [bapShow, setBapShow] = useState(false);
    // const [cassShow, setCassShow] = useState(false);
    // const [dvaShow, setDvaShow] = useState(false);
    // const [echoShow, setEchoShow] = useState(false);
    // const [genjiShow, setGenjiShow] = useState(false);
    // const [hanzoShow, setHanzoShow] = useState(false);
    // const [junkShow, setJunkShow] = useState(false);
    // const [lucioShow, setLucioShow] = useState(false);
    // const [orisaShow, setOrisaShow] = useState(false);
    // const [pharahShow, setPharahShow] = useState(false);
    // const [reaperShow, setReaperShow] = useState(false);
    // const [reinShow, setReinShow] = useState(false);
    // const [hogShow, setHogShow] = useState(false);
    // const [sigShow, setSigShow] = useState(false);
    // const [soldierShow, setSoldierShow] = useState(false);
    // const [symShow, setSymShow] = useState(false);
    // const [torbShow, setTorbShow] = useState(false);
    // const [tracerShow, setTracerShow] = useState(false);
    // const [widowShow, setWidowShow] = useState(false);
    // const [winstonShow, setWinstonShow] = useState(false);
    // const [ballShow, setBallShow] = useState(false);
    // const [zarShow, setZarShow] = useState(false);
    // const [zenShow, setZenShow] = useState(false);
    // const [moiraShow, setMoiraShow] = useState(false);
    // const [bastionShow, setBastionShow] = useState(false);
    // const [doomShow, setDoomShow] = useState(false);
    // const [brigShow, setBrigShow] = useState(false);
    // const [mercyShow, setMercyShow] = useState(false);
    // const [meiShow, setMeiShow] = useState(false);
    // const [sombraShow, setSombraShow] = useState(false);
    const ana = heroes.ana 
     const ashe = heroes.ashe 
    // const baptiste = heroes.baptiste
    // const bastion = heroes.bastion 
    // const brig = heroes.brigitte
    // const cassidy = heroes.cassidy
    // const dva = heroes.dVa 
    // const doomfist = heroes.doomfist 
    // const echo = heroes.echo 
    // const genji = heroes.genji
    // const hanzo = heroes.hanzo 
    // const junkrat = heroes.junkrat 
    // const lucio = heroes.lucio 
    // const mei = heroes.mei 
    // const mercy = heroes.mercy 
    // const moira = heroes.moira 
    // const orisa = heroes.orisa 
    // const pharah = heroes.pharah
    // const reaper = heroes.reaper
    // const rein = heroes.reinhardt
    // const hog = heroes.roadhog
    // const sigma = heroes.sigma 
    // const soldier = heroes.soldier76 
    // const sombra = heores.sombra 
    // const sym = heroes.symmetra 
    // const torb = heroes.torbjorn
    // const tracer = heroes.tracer 
    // const widow = heroes.widowmaker
    // const winston = heroes.winston 
    // const ball = heroes.wreckingBall
    // const zen = heroes.zenyatta
    
    return(
        <div className="player-hero-display-container">
            {ana ? 
            <div className="player-ana">
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
                        <li className="player-stat-item">Bob Kills: {ashe.heroSpecific.bobKillsAvgPer10Min}</li>
                    </ul>
                    <h3>Hero Specific</h3>
                    <ul className="player-stat-list"> 
                        <li className="player-stat-item">Scoped Accuracy: {ashe.heroSpecific.scopedAccuracy}</li>
                        <li className="player-stat-item">Scoped Accuracy Best: {ashe.heroSpecific.scopedAccuracyBestInGame}</li>
                        <li className="player-stat-item">Unscoped Accuracy: {ashe.heroSpecific.unscopedAccuracy}</li>
                        <li className="player-stat-item">Unscoped Accuracy Best: {ashe.heroSpecific.unscopedAccuracyBestInGame}</li>
                        <li className="player-stat-item">Enemies Slept: {ashe.heroSpecific.enemiesSlept}</li>
                        <li className="player-stat-item">Enemies Slept Best: {ashe.heroSpecific.enemiesSleptMostInGame}</li>
                        <li className="player-stat-item">Biotic Grenade Kills: {ashe.heroSpecific.bioticGrenadeKills}</li>
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
            {/*{heroes.baptiste ? <div className="player-bap">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000221.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Baptiste</h2>
                    {bapShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setBapShow(!bapShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setBapShow(!bapShow)}/>}
                </div>
                {bapShow === true ?<div className="stat-area">
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.ashe.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.ashe.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.ashe.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.ashe.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.ashe.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.ashe.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.ashe.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.cassidy.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.cassidy.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.cassidy.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.cassidy.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.cassidy.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.cassidy.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.cassidy.eliminationsPerLife}</li>
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
                        <li className="player-stat-item">Time Played: {heroes.dVa.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.dVa.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.dVa.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.dVa.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.dVa.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.dVa.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.dVa.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.echo.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.echo.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.echo.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.echo.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.echo.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.echo.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.echo.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.genji.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.genji.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.genji.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.genji.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.genji.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.genji.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.genji.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.hanzo.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.hanzo.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.hanzo.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.hanzo.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.hanzo.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.hanzo.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.hanzo.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.junkrat.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.junkrat.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.junkrat.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.junkrat.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.junkrat.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.junkrat.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.junkrat.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.lucio.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.lucio.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.lucio.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.lucio.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.lucio.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.lucio.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.lucio.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.orisa.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.orisa.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.orisa.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.orisa.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.orisa.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.orisa.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.orisa.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.pharah.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.pharah.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.pharah.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.pharah.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.pharah.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.pharah.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.pharah.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.reaper.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.reaper.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.reaper.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.reaper.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.reaper.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.reaper.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.reaper.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.reinhardt.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.reinhardt.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.reinhardt.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.reinhardt.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.reinhardt.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.reinhardt.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.reinhardt.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.roadhog.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.roadhog.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.roadhog.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.roadhog.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.roadhog.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.roadhog.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.roadhog.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.sigma.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.sigma.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.sigma.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.sigma.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.sigma.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.sigma.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.sigma.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.soldier76.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.soldier76.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.soldier76.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.soldier76.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.soldier76.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.soldier76.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.soldier76.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.sombra.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.sombra.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.sombra.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.sombra.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.sombra.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.sombra.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.sombra.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.symmetra.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.symmetra.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.symmetra.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.symmetra.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.symmetra.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.symmetra.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.symmetra.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.torbjorn.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.torbjorn.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.torbjorn.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.torbjorn.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.torbjorn.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.torbjorn.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.torbjorn.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.tracer.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.tracer.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.tracer.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.tracer.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.tracer.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.tracer.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.tracer.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.widowmaker.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.widowmaker.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.widowmaker.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.widowmaker.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.widowmaker.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.widowmaker.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.widowmaker.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.winston.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.winston.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.winston.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.winston.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.winston.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.winston.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.winston.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.wreckingBall.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.wreckingBall.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.wreckingBall.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.wreckingBall.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.wreckingBall.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.wreckingBall.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.wreckingBall.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.zarya.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.zarya.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.zarya.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.zarya.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.zarya.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.zarya.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.zarya.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.zenyatta.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.zenyatta.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.zenyatta.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.zenyatta.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.zenyatta.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.zenyatta.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.zenyatta.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.mercy.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.mercy.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.mercy.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.mercy.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.mercy.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.mercy.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.mercy.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.brigitte.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.brigitte.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.brigitte.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.brigitte.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.brigitte.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.brigitte.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.brigitte.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.bastion.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.bastion.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.bastion.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.bastion.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.bastion.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.bastion.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.bastion.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.mei.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.mei.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.mei.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.mei.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.mei.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.mei.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.mei.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.doomfist.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.doomfist.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.doomfist.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.doomfist.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.doomfist.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.doomfist.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.doomfist.eliminationsPerLife}</li>
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
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.moira.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.moira.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.moira.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.moira.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.moira.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.moira.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.moira.eliminationsPerLife}</li>
                    </ul>
                </div>
                :
                <div></div>}
            </div>: <div></div>} */}
        </div>
    );
};

export default PlayerHeroDisplay;