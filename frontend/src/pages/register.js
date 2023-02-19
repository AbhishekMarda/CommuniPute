import React from 'react';
import { useState } from 'react';
import logo from './img/logo.png'
import eye from './img/eye.png'
import {useMutation, useQuery} from './../convex/_generated/react'


function showPassword() {
    var passwordList = document.getElementsByClassName('passwords');
    for(let i = 0; i < 2; i++){
        var x = passwordList[i];
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}

export default function Register({props}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createUser = useMutation("createUser");

    const handleRegister = (event) => {
        event.preventDefault();
        
        // Handles Password Verification
        var error = document.getElementsByClassName("error")[0];
        error.innerHTML = "";
        if(confirmPassword !== password){
            error.innerHTML = "Passwords do not match. Please Enter again";
            return;
        }
    
        // Create User and Redirect        
        createUser(firstName, lastName, email, username, password);
    }

    const user = useQuery("login", username, password);
    if(user != null){
        localStorage.setItem("id",user._id);
        window.location.href = '/select'
    }

    return (<div>
                <div className="banner">
                    <img src={logo} alt="logo" id="login-logo-1"></img>
                    <img src={logo} alt="logo" id="login-logo-2"></img>
                </div>
                <div className = "registration-box">
                    <p className = "titleText">Register</p>
                    
                    <form onSubmit={handleRegister}>
                        <input type="text" name="First_Name" id = "firstName" placeholder="First Name" value={firstName} 
                        onChange={(event) => {
                            setFirstName(event.target.value);
                        }} required></input>
                        <input type="text" name="Last_Name" id = "lastName" placeholder="Last Name" value={lastName}
                        onChange={(event) => {
                            setLastName(event.target.value);
                        }} required></input>
                        <input type="text" name="Email" placeholder="Email" value={email} onChange={(event) => {
                            setEmail(event.target.value);
                        }} required></input>
                        <input type="text" name="Username" placeholder="Username" value={username} onChange={(event) => {
                            setUsername(event.target.value);
                        }} required></input>
                        <input type="password" className = "passwords" name="Password" placeholder="Password" value={password} onChange={(event) => {
                            setPassword(event.target.value);
                        }} required></input>
                        <input type="password" className = "passwords" id = "confirmPassword" name="Confirm_Password" value={confirmPassword} onChange={(event) => {
                            setConfirmPassword(event.target.value);
                        }} placeholder="Confirm Password" required></input>
                        <img src={eye} id = "eyePicture" alt="eye" onMouseOver={showPassword} onMouseOut={showPassword}></img>

                        <p className = "error"></p>
                        <input type="submit" name="Register" value="REGISTER"></input>
                    </form>

                    <p className = "redirect">Already have an account? <a href="/login" className = "switchPage">Login</a></p>
                </div>
            </div>);
};

