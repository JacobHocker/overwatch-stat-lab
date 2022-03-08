import React from 'react';
import './Footer.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumSquare } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';




function Footer() {

    let blizzUrl = 'https://playoverwatch.com/en-us/';
    let linkUrl = 'https://linkedin.com/in/jacob-hocker-23a064220';
    let gitUrl = 'https://github.com/JacobHocker';
    let mediumUrl = 'https://jacobhocker.medium.com';
    let mailUrl = 'mailto: jacobdouglas06@gmail.com';

    return(
        <div className='footer-container'>
            <div className='blizzard-logo-container'>
                <a href={blizzUrl}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blizzard_Entertainment_Logo_2015.svg/1200px-Blizzard_Entertainment_Logo_2015.svg.png' alt='activision-blizzard' className='blizz-logo' />
                </a>
            </div>
            <div className='creator-container'>
                <h3>Jacob Hocker</h3>
                <div className='contact-icons-container'>
                    <div className='contact-icon'>
                        <a href={mailUrl}>
                            <AiOutlineMail className='icon' />
                        </a>
                    </div>
                    <div className='contact-icon'>
                        <a href={gitUrl}>
                            <AiFillGithub className='icon' />
                        </a>
                    </div>
                    <div className='contact-icon'>
                        <a href={linkUrl}>
                            <AiFillLinkedin className='icon' />
                        </a>
                    </div>
                    <div className='contact-icon'>
                        <a href={mediumUrl}>
                            <AiFillMediumSquare className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;