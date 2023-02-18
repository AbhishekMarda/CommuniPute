import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div class="navbar">
            <a class="login" href="login.html">
                Login
            </a>
            <a class="register" href="register.html">
                Register
            </a>
        </div>);
    }
}

export default Navbar