import React, { useState } from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import './LfgCreatePost.scss';


function LfgCreatePost({onCreateToggle, showCreatePost, user, onAddPost}) {
    const [userId, setUserId] = useState(null);
    const [postContent, setPostContent] = useState("");
    const [gameMode, setGameMode] = useState("");
    const [groupSize, setGroupSize] = useState(0);
    const [rankOne, setRankOne] = useState("");
    const [rankTwo, setRankTwo] = useState("");
    const [platform, setPlatform] = useState("");
    const [region, setRegion] = useState("");
    const [requireMic, setRequireMic] = useState("");
    const [roles, setRoles] = useState("");
    
    const micOptions = [
        {id: 1, response: 'Yes'},
        {id: 2, response: 'No'}, 
        {id: 3, response: 'Optional'}
    ]
    const roleOptions = [
        {id: 1, name: 'Tank', image: 'https://i.imgur.com/k7SRm8Y.png'},
        {id: 2, name: 'Support', image: 'https://i.imgur.com/RGaK5ya.png'},
        {id: 3, name: 'Damage', image: 'https://i.imgur.com/D9Q11xk.png'}
    ]
    const platformOptions = [
        {id: 1, name: 'Console'},
        {id: 2, name: 'PC'}
    ]
    const rankOptions = [
        {id: 1, name: 'Bronze', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-BronzeTier.png'},
        {id: 2, name: 'Silver', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png'},
        {id: 3, name: 'Gold', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'},
        {id: 4, name: 'Platinum', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-PlatinumTier.png'},
        {id: 5, name: 'Diamond', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-DiamondTier.png'},
        {id: 6, name: 'Masters', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-MasterTier.png'},
        {id: 7, name: 'Grandmaster', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png'},
        {id: 8, name: 'Top500', image: 'https://overwatchanimatedshorts.files.wordpress.com/2017/07/cropped-competitive-rank-icons.png?w=200'}
    ]


    function handleSubmit(event) {
        event.preventDefault()
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_content: postContent,
                game_mode: gameMode,
                group_size: groupSize,
                rank_one: rankOne,
                rank_two: rankTwo,
                platform: platform,
                region: region,
                require_mic: requireMic,
                roles: roles,
                user_id: userId,
            }),
        })
        .then((r) => r.json())
        .then((newPost) => onAddPost(newPost))
    }
    return(
        <div className="lfg-create-post-container">
            <div className="lfg-create-post-header">
                <h1>{user.username}'s New Post</h1>
                <div className={showCreatePost === true ? 'close-post-button-show' : 'close-post-button-hidden' }>
                    <button onClick={onCreateToggle} className="close-create-post">
                        <AiOutlineCloseSquare />
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default LfgCreatePost;