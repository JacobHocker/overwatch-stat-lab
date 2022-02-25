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
    




    
    console.log(heroes)
    return(
        <div className="player-hero-display-container">
            {heroes.ana ? 
            <div className="player-ana">
                <div className="stat-hero-info">
                    <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013B.png" className="thumbnail" alt='hero-thumbnail' />
                    <h2>Ana</h2>
                    {anaShow === false ? <BsCaretDownSquareFill className='down-arrow' onClick={() => setAnaShow(!anaShow)}/> : <BsCaretUpSquareFill className='up-arrow' onClick={() => setAnaShow(!anaShow)}/>}
                </div>
                {anaShow === true ?<div className="stat-area">
                    <ul className="player-stat-list">
                        <li className="player-stat-item">Time Played: {heroes.ana.timePlayed}</li>
                        <li className="player-stat-item">Games Won: {heroes.ana.gamesWon}</li>
                        <li className="player-stat-item">Multi-Kills Best: {heroes.ana.multiKillBest}</li>
                        <li className="player-stat-item">Weapon Accuracy: {heroes.ana.weaponAccuracy}%</li>
                        <li className="player-stat-item">Win Percentage: {heroes.ana.winPercentage}%</li>
                        <li className="player-stat-item">Objective Kills: {heroes.ana.objectiveKills}</li>
                        <li className="player-stat-item">Eliminations Per Life: {heroes.ana.eliminationsPerLife}</li>
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
            {heroes.baptiste ? <div className="player-bap">
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
            {heroes.dVa ? <div className="player-dva" onClick={() => setDvaShow(!dvaShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000007A.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>D.Va</h2>
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
            {heroes.echo ? <div className="player-echo" onClick={() => setEchoShow(!echoShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000206.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Echo</h2>
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
            {heroes.genji ? <div className="player-genji" onClick={() => setGenjiShow(!genjiShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000029.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Genji</h2>
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
            {heroes.hanzo ? <div className="player-hanzo" onClick={() => setHanzoShow(!hanzoShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000005.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Hanzo</h2>
                </div>
                {genjiShow === true ?<div className="stat-area">
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
            {heroes.junkrat ? <div className="player-junk" onClick={() => setJunkShow(!junkShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000065.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Junkrat</h2>
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
            {heroes.lucio ? <div className="player-lucio" onClick={() => setLucioShow(!lucioShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000079.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Lucio</h2>
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
            {heroes.orisa ? <div className="player-orisa" onClick={() => setOrisaShow(!orisaShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013E.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Orisa</h2>
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
            {heroes.pharah ? <div className="player-pharah" onClick={() => setPharahShow(!pharahShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000008.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Pharah</h2>
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
            {heroes.reaper ? <div className="player-reaper" onClick={() => setReaperShow(!reaperShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000002.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Reaper</h2>
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
            {heroes.reinhardt ? <div className="player-rein" onClick={() => setReinShow(!reinShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Reinhardt</h2>
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
            {heroes.roadhog ? <div className="player-hog" onClick={() => setHogShow(!hogShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000040.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Roadhog</h2>
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
            {heroes.sigma ? <div className="player-sigma" onClick={() => setSigShow(!sigShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000023B.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Sigma</h2>
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
            {heroes.soldier76 ? <div className="player-soldier" onClick={() => setSoldierShow(!soldierShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000006E.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Soldier 76</h2>
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
            {heroes.sombra ? <div className="player-sombra" onClick={() => setSombraShow(!sombraShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012E.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Sombra</h2>
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
            {heroes.symmetra ? <div className="player-sym" onClick={() => setSymShow(!symShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000016.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Symmetra</h2>
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
            {heroes.torbjorn ? <div className="player-torb" onClick={() => setTorbShow(!torbShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000006.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Torbjorn</h2>
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
            {heroes.tracer ? <div className="player-tracer" onClick={() => setTracerShow(!tracerShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000003.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Tracer</h2>
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
            {heroes.widowmaker ? <div className="player-widow" onClick={() => setWidowShow(!widowShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000000A.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Widowmaker</h2>
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
            {heroes.winston ? <div className="player-winston" onClick={() => setWinstonShow(!winstonShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000009.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Winston</h2>
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
            {heroes.wreckingBall ? <div className="player-ball" onClick={() => setBallShow(!ballShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000001CA.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Wrecking Ball</h2>
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
            {heroes.zarya ? <div className="player-zarya" onClick={() => setZarShow(!zarShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000068.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Zarya</h2>
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
            {heroes.zenyatta ? <div className="player-zen" onClick={() => setZenShow(!zenShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000020.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Zenyatta</h2>
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
            {heroes.mercy ? <div className="player-mercy" onClick={() => setMercyShow(!mercyShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000004.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Mercy</h2>
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
            {heroes.brigitte ? <div className="player-brig" onClick={() => setBrigShow(!brigShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000195.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Brigitte</h2>
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
            {heroes.bastion ? <div className="player-bastion" onClick={() => setBastionShow(!bastionShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000015.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Bastion</h2>
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
            {heroes.mei ? <div className="player-mei" onClick={() => setMeiShow(!meiShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000000DD.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Mei</h2>
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
            {heroes.doomfist ? <div className="player-doom" onClick={() => setDoomShow(!doomShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012F.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Doomfist</h2>
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
            {heroes.moira ? <div className="player-moira" onClick={() => setMoiraShow(!moiraShow)}>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000001A2.png" className="thumbnail" alt='hero-thumbnail' />
                <div className="stat-hero-info">
                    <h2>Moira</h2>
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
            </div>: <div></div>}
        </div>
    );
};

export default PlayerHeroDisplay;