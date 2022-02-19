import React from "react";
import './OwlPlayerDisplay.scss';

function OwlPlayerDisplay({ players }){

    const playersDisplay = players.map((player) => (
        <tbody key={player.id}>
            <tr className="player-list-item">
                <td>
                    <img src={player.role_icon} className='role-icon' alt={`${player.name}-role-icon`}/>
                </td>
                <td>
                    <h3>{player.role}</h3>
                </td>
                <td>
                    <h3>{player.name}</h3>
                </td>
            </tr>
        </tbody> 
    ));

    return(
        <div className="player-list-container">
            <table>
                <thead>
                    <tr className="player-list-item">
                        <th>
                            <h2>Role Icon</h2>
                        </th>
                        <th>
                            <h2>Role</h2>
                        </th>
                        <th>
                            <h2>Name</h2>
                        </th>
                    </tr>
                </thead>
                {playersDisplay}
            </table>
        </div>
    )
};

export default OwlPlayerDisplay;