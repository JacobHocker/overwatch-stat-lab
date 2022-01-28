import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import './NavBar.scss';
import owLogo from  '../../assets/srcImages/ow-one-circle.png';

function NavBar() {
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
                    <li className="nav-items">
                        <NavLink to='/heroes' className='link-item'>Hero Gallery</NavLink>    
                    </li>
                    <li className="nav-items">
                        <NavLink to='/maps' className='link-item'>Maps</NavLink>
                    </li>
                    <li className="nav-items">Overwatch League</li>
                    <li className="nav-items">Player Data</li>
                    <li className="nav-items">LFG</li>
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