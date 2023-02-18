import React from 'react';
import logo from './img/logo.png'
import eye from './img/eye.png'

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

function handleRegister(){

}

class BackgroundImages extends React.Component{
    render(){
        return (<div className="banner">
            <img src={logo} alt="logo" id="login-logo-1"></img>
            <img src={logo} alt="logo" id="login-logo-2"></img>
        </div>);
    }
}

class RegisterBox extends React.Component{
    render(){
        return (<div className = "registration-box">
                    <p className = "titleText">Register</p>
                    <RegisterForm />
                    <p className = "redirect">Already have an account? <a href="/login" className = "switchPage">Login</a></p>
                </div>)
    }
}

class RegisterForm extends React.Component{
    render(){
        return (<form onSubmit={handleRegister}>
                    <input type="text" name="First_Name" id = "firstName" placeholder="First Name" required></input>
                    <input type="text" name="Last_Name" id = "lastName" placeholder="Last Name" required></input>
                    <input type="text" name="Email" placeholder="Email" required></input>
                    <input type="text" name="Username" placeholder="Username" required></input>
                    <input type="password" className = "passwords" name="Password" placeholder="Password" required></input>
                    <input type="password" className = "passwords" id = "confirmPassword" name="Confirm_Password" placeholder="Confirm Password" required></input>
                    <img src={eye} id = "eyePicture" alt="eye" onMouseOver={showPassword} onMouseOut={showPassword}></img>

                    <p className = "error"></p>
                    <input type="submit" name="Register" value="REGISTER"></input>
                </form>);
    }
}

const Register = () =>{
    return (<div><BackgroundImages /><RegisterBox /></div>);
};

export default Register
