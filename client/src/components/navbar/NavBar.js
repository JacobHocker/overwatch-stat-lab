import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import './NavBar.scss';
import owLogo from  '../../assets/srcImages/ow-one-circle.png';

function NavBar({ user, setUser }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return(
        <section className="nav-container">
           <div className="nav-logo">
                <NavLink to='/'>
                    <img className="nav-logo-img" src={owLogo} alt='ow-logo' />
                </NavLink>
           </div>
           <div className="nav-list-container">
               <nav>
               {(toggleMenu || screenWidth > 600) && (
                    <ul className="nav-list">
                        <NavLink to='/player-page' className='link-item'>
                            <li className="nav-items">
                                Player Stats   
                            </li>
                        </NavLink>
                        <NavLink to='/looking-for-group' className='link-item'>
                            <li className="nav-items">
                                LFG   
                            </li>
                        </NavLink>
                       <NavLink to='/heroes' className='link-item'> 
                            <li className="nav-items">
                                Hero Gallery    
                            </li>
                        </NavLink>
                        <NavLink to='/maps' className='link-item'>
                            <li className="nav-items">
                                Maps
                            </li>
                        </NavLink>
                        <NavLink to='/overwatch-league' className='link-item'>
                            <li className="nav-items">
                                Overwatch League    
                            </li>
                        </NavLink>
                        <li className="user-info">
                            <img src={user.user_image_url} alt={`${user.username}-profile`} className='user-image' />
                            {user.username}
                            <button className='log-out-button' onClick={() => setUser(!user)}>Log Out</button>
                        </li>
                    </ul>
                )}
                   <button className="nav-btn" onClick={toggleNav}>
                       <Hamburger direction="left" duration={0.5} />
                   </button>
               </nav>
           </div>
        </section>
    )
}

export default NavBar;