import React, { useEffect, useState } from 'react';
import LfgCreatePost from '../lfgCreatePost/LfgCreatePost';
import LfgPostDisplay from '../lfgPostDisplay/LfgPostDisplay';
import { AiFillPlusSquare } from 'react-icons/ai';
import './LfgContainer.scss';

function LfgContainer({ user }) {
    const [posts, setPosts] = useState([]);
    const [showCreatePost, setShowCreatePost] = useState(false);
 
    
    
    
    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then((posts) => { setPosts(posts);
        });
    }, []);

    function handleDeletePost(id) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    }

    function handleUpdateLikes(updatedPost) {
        setPosts((posts) =>
            posts.map((post) => {
                return post.id === updatedPost.id ? updatedPost : post; 
            })
        );
    };
    function handleUpdatePost(updatedPost) {
        setPosts((posts) =>
            posts.map((post) => {
                return post.id === updatedPost.id ? updatedPost : post; 
            })
        );
    };
    const createToggle = () => setShowCreatePost(!showCreatePost);

    
    function handleAddPost(newPost) {
        const updatedPosts = [...posts, newPost]
        setPosts(updatedPosts)
    }
   
    return(
        <div className='lfg-page-container'>
            <div className='lfg-post-display-container'>
               { posts.map((post) => (
                    <LfgPostDisplay
                        id={post.id}
                        key={post.id}
                        currentUser={user}
                        user={post.user}
                        post={post}
                        comments={post.comments}
                        onDeletePost={handleDeletePost}
                        onAddLike={handleUpdateLikes}
                        onEditPost={handleUpdatePost}
                        />
                ))}
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