import React, { useState } from 'react';
import './UserLoginForm.scss';

function UserLoginForm({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        }); 
      }
    return(
        <div className='user-login-form-container'>
            <form onSubmit={handleSubmit} className="user-login-form">
                <div className="username-login">
                    <label htmlFor="username"></label>
                    <input
                    className="login-input"
                    placeholder="Username"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="password-login">
                    <label htmlFor="password"></label>
                    <input
                    className="login-input"
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='button-container'>
                    <button  type="submit" className="user-login-button">
                    {isLoading ? "Loading..." : "Login"}
                    </button>
                </div>
                <div>
                    {errors.map((err) => (
                    <error key={err}>{err}</error>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default UserLoginForm;