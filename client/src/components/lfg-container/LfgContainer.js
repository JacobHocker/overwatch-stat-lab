import React, { useEffect, useState } from 'react';
import LfgCreatePost from '../lfgCreatePost/LfgCreatePost';
import { IoIosCreate } from 'react-icons/io';
import './LfgContainer.scss';

function LfgContainer({ user }) {
    const [posts, setPosts] = useState([]);
    const [showCreatePost, setShowCreatePost] = useState(false);

    console.log(user.username)

    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then((posts) => { setPosts(posts);
        });
    }, []);
    const createToggle = () => setShowCreatePost(!showCreatePost)
    function handleAddPost(newPost) {
        const updatedPosts = [...posts, newPost]
        setPosts(updatedPosts)
    }
   
    return(
        <div className='lfg-page-container'>
            <div className='create-post-main-container'>
                <div className='create-post-toggle-button'>
                    <button onClick={createToggle} className={showCreatePost === false ? 'create-post-button-show' : 'create-post-button-hidden' }>
                        <IoIosCreate />
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