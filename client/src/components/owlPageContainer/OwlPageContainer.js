import React, {useEffect, useState} from 'react';
import './OwlPageContainer.scss';
import OwlTeamCard from '../owlTeamCard/OwlTeamCard';


function OwlPageContainer(){
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("/teams")
        .then((r) => r.json())
        .then((teams) => { setTeams(teams);
        });
    }, []);

    const teamsToDisplay = teams.map((team) => (
        <OwlTeamCard
            key={team.id}
            id={team.id}
            name={team.team_name}
            logo={team.team_logo}
        />
    ))

    return(
        <div className='owl-page-container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Overwatch_League_wordmark-colour.svg/1200px-Overwatch_League_wordmark-colour.svg.png'
            className='ow-league-logo' alt='overwatch-league' />
            <div className='team-card-container'>
                {teamsToDisplay}
            </div>
        </div>
    )
}

export default OwlPageContainer;