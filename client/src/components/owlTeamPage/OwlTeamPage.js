import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './OwlTeamPage.scss';
import OwlPlayerDisplay from '../owlPlayerDisplay/OwlPlayerDisplay';

function OwlTeamPage() {
    const [team, setTeam] = useState({})
    
    const {id} = useParams()

    useEffect(() => {     
     fetch(`/teams/${id}`)
        .then((r) => r.json())
        .then((team) => { setTeam(team)
        })
    }, [id]);

    return(
        <div className='owl-team-page-container'>
            <div className='team-page-header'>
                <h1>{team.team_city} {team.team_name}</h1>
            </div>
            <div className='team-uni-display'>
                <h1>Team Skin</h1>
                <img src={team.team_skin_home} className='team-uni' alt={`${team.team_name}-uniform`} />
            </div>
            <div className='team-player-container'>
                <h1>Current Roster</h1>
                {team?.players && <OwlPlayerDisplay players={team.players} />}
            </div>
            <div className='team-page-footer'>
                <img src={team.team_logo} className='team-page-logo' alt={`${team.team_name}-logo`} />
            </div>
        </div>
    )
};

export default OwlTeamPage;