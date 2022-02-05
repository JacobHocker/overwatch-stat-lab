import React from 'react';
import { Link } from 'react-router-dom';
import './OwlTeamCard.scss';

function OwlTeamCard({id, logo, name}){
    return( 
        <div className='team-card'>
            <Link to={`/teams/${id}`}>
                <img src={logo} className='team-logo' alt={name} />
            </Link>
        </div>
    )
};

export default OwlTeamCard;