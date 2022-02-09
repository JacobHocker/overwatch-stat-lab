import React from 'react';
import { Link } from 'react-router-dom';
import './OwlTeamCard.scss';

function OwlTeamCard({id, logo, name}){
    return( 
        <div>
            <Link to={`/teams/${id}`}>
                <div className='team-card'>
                    <img src={logo} className='team-logo' alt={name} />
                </div>
            </Link>
        </div>
    )
};

export default OwlTeamCard;