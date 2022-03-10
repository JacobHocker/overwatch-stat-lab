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
                <h1>OverStat Lab</h1>
            </div>
            
            <div className='login-area-container'>
                {showLogin ? (
                <>
                    <UserLoginForm onLogin={onLogin} />
                    <br />
                    <div className="sign-up-area-container">
                        <h3>
                            Don't have an account? &nbsp;
                        </h3>
                        <button className="user-sign-up-button" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </div>
                </>
                ) : (
                <div className='container-sign-up-click'>
                    <UserSignUpForm onLogin={onLogin} />
                    <br />
                    <div className="already-account-area">
                        <h3>
                            Already have an account? &nbsp;
                        </h3>
                        <button className="user-login-button" onClick={() => setShowLogin(true)}>
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