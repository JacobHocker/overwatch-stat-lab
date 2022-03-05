import React from "react";
import { BiMicrophone } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import './LfgPostDisplay.scss';

function LfgPostDisplay({user, createdAt, comments, postContent, rankOne, rankTwo, region, platform, roles, likes, groupSize, gameMode, requireMic}) {
    return(
        <div className='lfg-single-post-display-container'>
            <div className='post-display-header'>
                <div className="post-user-image">
                    <img src={user.user_image_url} alt={`${user.username}-profile`} className='user-image-post' />
                </div>
                <div className="post-username">
                    <h1>{user.username}</h1>
                </div>
            </div>
            <div className="post-display-body-container">
                
                <div className="post-region-display">
                    <h3>Region: {region}</h3>
                </div>
                <div className="roles-platform-container">
                    <div className="post-platform-display">
                        <h3>Platform: {platform}</h3>
                    </div>
                    {roles === 'N/A' ? 
                    <div></div> :
                    <div className="post-role-display">
                        <h3>Need Role</h3>
                        <img src={roles} className='post-role-icon' alt='post-role'/> 
                    </div>}
                </div>
                <div className="mic-group-size-container">
                    <div className="post-group-size-display">
                        <h3>Group Size: {groupSize}</h3>
                    </div>
                    <div className="post-require-mic-display">
                        <h3><BiMicrophone className="microphone"/> : {requireMic}</h3>
                    </div>
                </div> 
                <div className="post-game-mode-display">
                    <h3>Game Mode: {gameMode}</h3>
                </div>
                {gameMode === 'Competitive' ? 
                <div className="post-ranks-container">
                    <h3>From</h3>
                    <img src={rankOne} className='post-ranks-display' alt='post-rank-one' />
                    <h3>to</h3>
                    <img src={rankTwo} className='post-ranks-display' alt='post-rank-two' />
                </div> 
                : <div></div>}
    
            </div>
            <div className="post-display-post-content">
                <div className="post-content-display">
                    <p>{postContent}</p>
                </div>
            </div>
            <div className="post-display-footer-container">
                <div className="likes-section">
                    <button className="likes">{likes}<AiFillLike  /></button>
                </div>
                <div className="comment-section">
                    <button className="comment-icon"><BiCommentAdd  /></button>
                </div>
                <div className="edit-section">
                    <button className='edit'><AiFillEdit  /></button>
                </div>
                <div className="delete-section">
                    <button className="trash"><FaTrash  /></button>
                </div>
                
            </div>
            
        </div>
    );
};

export default LfgPostDisplay;