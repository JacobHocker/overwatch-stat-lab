import React, { useEffect, useState } from 'react';
import LfgCreatePost from '../lfgCreatePost/LfgCreatePost';
import LfgPostDisplay from '../lfgPostDisplay/LfgPostDisplay';
import { AiFillPlusSquare } from 'react-icons/ai';
import './LfgContainer.scss';

function LfgContainer({ user }) {
    const [posts, setPosts] = useState([]);
    const [showCreatePost, setShowCreatePost] = useState(false);

    
    console.log(posts)
    
    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then((posts) => { setPosts(posts);
        });
    }, []);
    const createToggle = () => setShowCreatePost(!showCreatePost);

    const postsMap =  posts.map((post) => (
        <LfgPostDisplay
            id={post.id}
            key={post.id}
            user={post.user}
            comments={post.comments}
            postContent={post.post_content}
            rankOne={post.rank_one}
            rankTwo={post.rank_two}
            region={post.region}
            platform={post.platform}
            requireMic={post.require_mic}
            roles={post.roles}
            likes={post.likes}
            groupSize={post.group_size}
            gameMode={post.game_mode}
            createdAt={post.created_at}
            />
    ))
    function handleAddPost(newPost) {
        const updatedPosts = [...posts, newPost]
        setPosts(updatedPosts)
    }
   
    return(
        <div className='lfg-page-container'>
            <div className='lfg-post-display-container'>
                {postsMap}
            </div>
            <div className='create-post-main-container'>
                <div className='create-post-toggle-button'>
                    <button onClick={createToggle} className={showCreatePost === false ? 'create-post-button-show' : 'create-post-button-hidden' }>
                        <AiFillPlusSquare />
                    </button>
                </div>
                <div className={showCreatePost === true ? 'create-post-show' : 'create-post-hidden' }>
                    <LfgCreatePost showCreatePost={showCreatePost} user={user} onAddPost={handleAddPost} onCreateToggle={createToggle}/>
                </div>
            </div>
        </div>
    );
};

export default LfgContainer;