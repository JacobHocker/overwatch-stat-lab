import React, { useState } from 'react';
import './LfgCommentCreate.scss';

function LfgCommentCreate({postId, user, onAddComment}) {
    const [commentContent, setCommentContent] = useState("");
    const [commentPostId, setCommentPostId] = useState(null)
    const [userId, setUserId] = useState(null)
    
    function handleSubmit(event) {
        event.preventDefault()
        setCommentPostId(postId)
        setUserId(user.id)

        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment_content: commentContent,
                user_id: userId,
                post_id: commentPostId,
            }),
        })
        .then((r) => r.json())
        .then((newComment) => onAddComment(newComment))
    }
    return(
        <div className='lfg-comment-create-container'>
            <form onSubmit={handleSubmit} className='create-comment-form'>
                <div className="post-content-input">
                    <textarea 
                        className='comment-input'
                        type="text"
                        rows={5}
                        placeholder="Write a comment..."
                        name='post-content'
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                    />
                </div>
                <div className="post-submit">
                    <button className="post-submit-button">Comment</button>
                </div>
            </form>
        </div>
    );
};

export default LfgCommentCreate;