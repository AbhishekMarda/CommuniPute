import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div className="navbar">
            <a className="login" href="login.html">
                Login
            </a>
            <a className="register" href="register.html">
                Register
            </a>
        </div>);
    }
}

export default Navbar