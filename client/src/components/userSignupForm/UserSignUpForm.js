import React, { useState } from 'react';
import './UserSignUpForm.scss';

function UserSignUpForm({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [userImage, setUserImage] = useState(null);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        formData.append('password_confirmation', passwordConfirmation)
        formData.append('user_image', userImage)
        fetch("/signup", {
          method: "POST",
          body: formData
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
           } 
        });
      }
    return(
        <div className='user-sign-up-form'>
            <form onSubmit={handleSubmit}>
                <div className="sign-up-container">
                    <div>
                    <label htmlFor="username"></label>
                    <input
                        className="sign-up-input"
                        placeholder="Create Your Username"
                        type="text"
                        id="username"
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div>
                    <label htmlFor="password"></label>
                    <input
                        className="sign-up-input"
                        placeholder="Enter New Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    </div>
                    <div>
                    <label htmlFor="password"></label>
                    <input
                        placeholder="Confirm Password"
                        className="sign-up-input"
                        type="password"
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        autoComplete="current-password"
                    />
                    </div>
                    <div>
                    <label htmlFor="imageUrl"></label>
                    <input 
                      type='file'
                      accept='image/*'
                      onChange={(e) => setUserImage(e.target.files[0])} />
                    </div>
                    <div>
                    <button className="sign-up-button" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                    </div>
                    <div>
                    {errors.map((err) => (
                        <error key={err}>{err}</error>
                    ))}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserSignUpForm;