import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import './LfgCommentDisplay.scss';


function LfgCommentDisplay({ comment, onDeleteComment }) {
    const [singleComment, setSingleComment] = useState({});
    
    useEffect(() => {
        fetch(`/comments/${comment.id}`)
        .then((r) => r.json())
        .then((singleComment) => setSingleComment(singleComment))
    }, [comment.id])

    function handleDeleteComment(id) {
        fetch(`/comments/${singleComment.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteComment(singleComment)
            }
        })
    }
    const user = singleComment.user 
    return(
        <div className='comment-display-container'>
            {user?.username && 
            <div className='comment-header'>
                <h4>{user.username}</h4>
            </div>}
            <div className='comment-body'>
                <p>{singleComment.comment_content}</p>
            </div>
            <div className='posted-at-comment'>
                <p>{singleComment.created_at} <button className='trash' title='Delete Comment' onClick={handleDeleteComment}><FaTrash  /></button></p>
                
            </div>
        </div>
    );
};

export default LfgCommentDisplay;