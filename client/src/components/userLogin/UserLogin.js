import React, { useState } from 'react';
import UserLoginForm from '../userLoginForm/UserLoginForm';
import UserSignUpForm from '../userSignupForm/UserSignUpForm';
import './UserLogin.scss';
import owLogo from  '../../assets/srcImages/ow-one-circle.png';

function UserLogin({ onLogin }){
    const [showLogin, setShowLogin] = useState(true);
    return(
        <div className='user-login-container'>
            <div className='login-container-header'>
                <img src={owLogo} alt='ow-logo' className='login-container-logo' />
                <h1>OverHub</h1>
            </div>
            
            <div className='login-area'>
                {showLogin ? (
                <>
                    <UserLoginForm onLogin={onLogin} />
                    <br />
                    <div className="sign-up-container">
                    <h3>
                        Don't have an account? &nbsp;
                    </h3>
                    <button className="sign-up-button" onClick={() => setShowLogin(false)}>
                        Sign Up
                    </button>
                    </div>
                </>
                ) : (
                <div className='sign-up-click'>
                    <UserSignUpForm onLogin={onLogin} />
                    <br />
                    <div className="already-account">
                    <h3>
                        Already have an account? &nbsp;
                    </h3>
                    <button className="login-button" onClick={() => setShowLogin(true)}>
                        Log In
                    </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default UserLogin