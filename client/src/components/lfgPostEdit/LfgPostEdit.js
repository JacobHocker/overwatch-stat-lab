import React, { useState } from "react";
import './LfgPostEdit.scss';

function LfgPostEdit({ onEditPost, id}) {
    const [postContent, setPostContent] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_content: postContent,
            }),
        })
        .then((r) => r.json())
        .then((updatedPost) => onEditPost(updatedPost));
    };
    
    return(
        <div className="lfg-post-edit-container">
            <form onSubmit={handleSubmit} className="create-post-form">
                <div className="post-content-input">
                    <textarea 
                        className='post-input'
                        type="text"
                        rows={5}
                        placeholder="Edit the post..."
                        name='post-content'
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </div>
                <div className="post-submit">
                    <button className="post-submit-button" type="submit">Post Edit</button>
                </div>
            </form>
        </div>
    );
};

export default LfgPostEdit;