import React, { useState } from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import './LfgCreatePost.scss';


function LfgCreatePost({onCreateToggle, showCreatePost, user, onAddPost}) {
    const [userId, setUserId] = useState(null);
    const [postContent, setPostContent] = useState(" ");
    const [gameMode, setGameMode] = useState("N/A");
    const [groupSize, setGroupSize] = useState("N/A");
    const [rankOne, setRankOne] = useState("N/A");
    const [rankTwo, setRankTwo] = useState("N/A");
    const [platform, setPlatform] = useState("N/A");
    const [region, setRegion] = useState("N/A");
    const [requireMic, setRequireMic] = useState("N/A");
    const [roles, setRoles] = useState("N/A");
    const [roleDisplay, setRoleDisplay] = useState(false);
    const [likes, setLikes] = useState(0)

    const handleCheck = () => setRoleDisplay(!roleDisplay);
    const groupSizeOptions = [
        {id: 0, value: 'Select Group Size'},
        {id: 1, value: 2},
        {id: 2, value: 3},
        {id: 3, value: 4},
        {id: 4, value: 5},
        {id: 5, value: 6},

    ]
    const gameModeOptions = [
        {id: 0, name: 'Select Game Mode'},
        {id: 1, name: 'Quickplay'},
        {id: 2, name: 'Competitive'},
        {id: 3, name: 'Arcade'},
        {id: 4, name: 'Custom Games'}
    ]
    const micOptions = [
        {id: 0, response: 'Set Mic Requirement'},
        {id: 1, response: 'Yes'},
        {id: 2, response: 'No'}, 
        {id: 3, response: 'Optional'}
    ]
    const regionOptions = [
        {id: 0, name: 'Select Region'},
        {id: 1, name: 'North America'},
        {id: 2, name: 'Europe'}, 
        {id: 3, name: 'Asia/Pacific'}
    ]
    const roleOptions = [
        {id: 0, name: 'Select Role', image: 'N/A'},
        {id: 1, name: 'Tank', image: 'https://i.imgur.com/k7SRm8Y.png'},
        {id: 2, name: 'Support', image: 'https://i.imgur.com/RGaK5ya.png'},
        {id: 3, name: 'Damage', image: 'https://i.imgur.com/D9Q11xk.png'}
    ]
    const platformOptions = [
        {id: 0, name: 'Select Platform'},
        {id: 1, name: 'Console'},
        {id: 2, name: 'PC'}, 
        {id: 3, name: 'Console & PC'}
    ]
    const rankOptions = [
        {id: 0, name: 'Select Rank', image: 'N/A'},
        {id: 1, name: 'Bronze', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-BronzeTier.png'},
        {id: 2, name: 'Silver', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png'},
        {id: 3, name: 'Gold', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'},
        {id: 4, name: 'Platinum', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-PlatinumTier.png'},
        {id: 5, name: 'Diamond', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-DiamondTier.png'},
        {id: 6, name: 'Masters', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-MasterTier.png'},
        {id: 7, name: 'Grandmaster', image: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png'},
        {id: 8, name: 'Top500', image: 'https://overwatchanimatedshorts.files.wordpress.com/2017/07/cropped-competitive-rank-icons.png?w=200'}
    ]
    // function clearState() {
    //     setPostContent("")
    //     setGameMode("")
    //     setGroupSize("")
    //     setRankOne("")
    //     setRankTwo("")
    //     setPlatform("")
    //     setRequireMic("")
    //     setRegion("")
    //     setUserId(null)
    //     setRoles("")
    // }

    function handleSubmit(event) {
        event.preventDefault()
        setLikes(0)
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
                likes: likes,
                user_id: userId,
            }),
        })
        .then((r) => r.json())
        .then((newPost) => onAddPost(newPost))
    }
    return(
        <div className="lfg-create-post-container">
            <div className="lfg-create-post-header">
                <h1>{user.username}'s Post</h1>
                <div className={showCreatePost === true ? 'close-post-button-show' : 'close-post-button-hidden' }>
                    <button onClick={onCreateToggle} className="close-create-post">
                        <AiOutlineCloseSquare />
                    </button>
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className='create-post-form'>
                    <div className="game-mode-post-select">
                        <select 
                        id="select"
                        className="post-select"
                        name="game-mode"
                        value={gameMode}
                        onChange={(e) => setGameMode(e.target.value)}
                        >
                            {gameModeOptions.map((mode) => (
                                <option key={mode.id} className='post-option' value={mode.name}>{mode.name}</option>
                            ))}
                        </select>
                    </div>
                    {gameMode === 'Competitive'? 
                    <div className="rank-post-select-container">
                        <div className="rank-range-header">
                            <p>Rank Range:</p>
                        </div>
                        <div className="rank-range-container">
                            <div className="rank-one-select">
                                <select 
                                id="select"
                                className="post-select"
                                name="rank-one"
                                value={rankOne}
                                onChange={(e) => setRankOne(e.target.value)}
                                >
                                    {rankOptions.map((rank) => (
                                        <option key={rank.id} className='post-option' value={rank.image}>{rank.name}</option>
                                    ))}
                                </select>
                            </div>
                            <p>To</p>
                            <div className="rank-two-select">
                                <select 
                                id="select"
                                className="post-select"
                                name="rank-two"
                                value={rankTwo}
                                onChange={(e) => setRankTwo(e.target.value)}
                                >
                                    {rankOptions.map((rank) => (
                                        <option key={rank.id} className='post-option' value={rank.image}>{rank.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>: <div></div>}
                    <div className="require-mic-select">
                        <select
                        id="select"
                        className="post-select"
                        name="mic-requirements"
                        value={requireMic}
                        onChange={(e) => setRequireMic(e.target.value)}>
                            {micOptions.map((mic) => (
                                <option key={mic.id} className='post-option' value={mic.response}>{mic.response}</option>
                            ))}

                        </select>
                    </div>
                    <div className="group-size-select">
                        <select 
                        id="select"
                        className="post-select"
                        name="group-size"
                        value={groupSize}
                        onChange={(e) => setGroupSize(e.target.value)}
                        >
                            {groupSizeOptions.map((group) => (
                                <option key={group.id} className='post-option' value={group.value}>{group.value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="platform-post-select">
                        <select
                        id="select"
                        className="post-select"
                        name="platform"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}>
                            {platformOptions.map((platform) => (
                                <option key={platform.id} className='post-option' value={platform.name}>{platform.name}</option>
                            ))}

                        </select>
                    </div>
                    <div className="region-post-select">
                        <select
                        id="select"
                        className="post-select"
                        name="platform"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}>
                            {regionOptions.map((region) => (
                                <option key={region.id} className='post-option' value={region.name}>{region.name}</option>
                            ))}

                        </select>
                    </div>
                    <div className="optional-role-select">
                        <label>
                            <input type="checkbox" onChange={handleCheck} />
                            (Optional) Role Select
                        </label>
                        {roleDisplay === true ?
                        <div className="region-post-select">
                            <select
                            id="select"
                            className="post-select"
                            name="role"
                            value={roles}
                            onChange={(e) => setRoles(e.target.value)}>
                                {roleOptions.map((role) => (
                                    <option key={role.id} className='post-option' value={role.image}>{role.name}</option>
                                ))}

                            </select>
                        </div> : <div></div>}
                    </div>
                    <div className="post-content-input">
                    <textarea 
                        className='post-input'
                        type="text"
                        rows={5}
                        placeholder="Write more about what you're looking for..."
                        name='post-content'
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                    </div>
                    <div className="post-submit">
                        <button className="post-submit-button" onClick={() => setUserId(user.id)}>Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LfgCreatePost;