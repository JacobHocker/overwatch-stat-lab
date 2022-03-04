import React, { useEffect, useState } from 'react';
import './LfgContainer.scss';

function LfgContainer({ user }) {
    const [posts, setPosts] = useState([])

    console.log(user.username)
    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then((posts) => { setPosts(posts);
        });
    }, []);
   
    return(
        <div className='lfg-page-container'>
            
        </div>
    );
};

export default LfgContainer;