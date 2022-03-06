import React, { useState } from "react";
import { BiMicrophone } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import './LfgPostDisplay.scss';
import LfgPostEdit from "../lfgPostEdit/LfgPostEdit";


function LfgPostDisplay({user, comments, onDeletePost, onAddLike, onEditPost, id, post}) {
    const [displayEdit, setDisplayEdit] = useState(false);
    const [displayComment, setDisplayComment] = useState(false);
    const toggleEdit = () => setDisplayEdit(!displayEdit)
    
    function handleDeleteClick() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeletePost(post)
            }
        })
    }
    function handleLikeUpdate(event) {
        event.preventDefault()
        fetch(`/post/${id}/likes`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: post.likes,
            }),
        })
        .then((r) => r.json())
        .then((updatedPost) => onAddLike(updatedPost));
    };

    return(
        <div className='lfg-single-post-display-container'>
            {user?.username && <div className='post-display-user-info'>
                <div className="post-user-image">
                    <img src={user.user_image_url} alt={`${user.username}-profile`} className='user-image-post' />
                </div>
                <div className="post-username">
                    <h1>{user.username}</h1>
                </div>
            </div>}
            <div className="post-display-body-container">
                
                <div className="post-region-display">
                    <h3>Region: {post.region}</h3>
                </div>
                <div className="roles-platform-container">
                    <div className="post-platform-display">
                        <h3>Platform: {post.platform}</h3>
                    </div>
                    {post.roles === 'N/A' ? 
                    <div></div> :
                    <div className="post-role-display">
                        <h3>Need Role</h3>
                        <img src={post.roles} className='post-role-icon' alt='post-role'/> 
                    </div>}
                </div>
                <div className="mic-group-size-container">
                    <div className="post-group-size-display">
                        <h3>Group Size: {post.group_size}</h3>
                    </div>
                    <div className="post-require-mic-display">
                        <h3><BiMicrophone className="microphone"/> : {post.require_mic}</h3>
                    </div>
                </div> 
                <div className="post-game-mode-display">
                    <h3>Game Mode: {post.game_mode}</h3>
                </div>
                {post.game_mode === 'Competitive' ? 
                <div className="post-ranks-container">
                    <h3>From</h3>
                    <img src={post.rank_one} className='post-ranks-display' alt='post-rank-one' />
                    <h3>to</h3>
                    <img src={post.rank_two} className='post-ranks-display' alt='post-rank-two' />
                </div> 
                : <div></div>}
    
            </div>
            <div className="post-display-post-content">
                <div className="post-content-display">
                    <p>{post.post_content}</p>
                </div>
            </div>
            <div className="post-display-footer-container">
                <div className="likes-section">
                    <button className="likes" type='submit' onClick={handleLikeUpdate}>{post.likes}<AiFillLike  /></button>
                </div>
                <div className="comment-section">
                    <button className="comment-icon"><BiCommentAdd  /></button>
                </div>
                <div className="edit-section">
                    <button className='edit' onClick={toggleEdit}><AiFillEdit  /></button>
                </div>
                <div className="delete-section">
                    <button className="trash" onClick={handleDeleteClick}><FaTrash  /></button>
                </div>
            </div>
            <div className="post-edit-comment-container">
            {displayEdit === true ? <LfgPostEdit displayEdit={displayEdit} setDisplayEdit={setDisplayEdit} onEditPost={onEditPost} id={id}/> : <div></div>}
            
            </div>
        </div>
    );
};

export default LfgPostDisplay;