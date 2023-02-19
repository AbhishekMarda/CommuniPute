import React from 'react';
import logo from './img/logo.png'
import eye from './img/eye.png'
import { useState } from 'react';
import {useQuery} from './../convex/_generated/react';

function showPassword() {
    var passwordList = document.getElementsByClassName('passwords');
    for(let i = 0;i<2;i++){
        var x = passwordList[i];
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}

export default function Login(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();

        setClicked(true);    
    }

    const users = useQuery("login", username, password);

    if(users != null && clicked){
        window.location.href = '/select?client=TJHLsZgs7MF5Lwk-h8VLzw'
    }
    
    return (<div>
                <div className="banner">
                    <img src={logo} alt="logo" id="login-logo-1"></img>
                    <img src={logo} alt="logo" id="login-logo-2"></img>
                </div>
                <div className = "registration-box">
                    <p className = "titleText">Login</p>
                    
                    <form onSubmit={handleLogin}>
                        <input type="text" name="Username" placeholder="Username" value={username} onChange={(event) => {
                            setUsername(event.target.value);
                        }} required></input>
                        <input type="password" className = "passwords" id = "confirmPassword" name="Password" placeholder="Password" value={password} onChange={(event) => {
                            setPassword(event.target.value);
                        }} required></input>
                        <img src={eye} id = "eyePicture" alt="eye" onMouseOver={showPassword} onMouseOut={showPassword}></img>

                        <p className = "error"></p>
                        <input type="submit" name="Register" value="SIGN IN"></input>
                    </form>

                    <p className = "redirect">Don't have an account? <a href="/register" className = "switchPage">Register</a></p>
                </div>
            </div>);
};
