import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import logo from './img/logo.png'
import code from './img/code.png'
import coder from './img/coder.webp'
import globe from './img/globe.avif'
class Banner extends React.Component{
    render(){
        return (
        <div class="banner">
            <Navbar />
            <div class="company-name">CommuniPute</div>
            <div class="tagline">Harness the power of the world's computers in an instant. Discover the power of community computing.</div>
            <a href="start.html">
                <div class="start-button">
                    <p> Get Started </p>
                </div>
            </a>
            <img id="logo" src={logo} alt="Communipute Logo"></img>
        </div>
        );
    }
}

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

class About extends React.Component{
    render(){
        return (<div class = "about">
                    <div class = "about-card-left" id="first-card"><img src={globe} alt="code" id="first-row-image"></img></div>
                    <div class = "about-card-right" id="second-card">
                        <h1>What is CommuniPute?</h1>
                        <p>Whether it's taking a walking the dog, taking a jog in the park, or even just getting
                            a restful night's sleep, we're not always using our computer. But when we need power,
                            it seems like we can never get enough. Enter CommuniPute, the service that uses idle
                            computing power to make the most of computation power <span>globally</span>.
                            
                        </p>   
                    </div>
                    <div class = "about-card-left" id="third-card">
                        <h1>How Does CommuniPute Work?</h1>
                        <p>First, a host machine lets CommuniPute know they're idle and open to work. The connection
                            is then made available on the CommuniPute site, and any user that may want to run their
                             script on the host machine has the option to do so. If the computation is performed, the
                             record is logged and Compute Credits are transferred from the client to the host machine,
                             compensating the host for the power they lent out. 
                        </p>
                    </div>
                    <div class = "about-card-right" id="fourth-card"><img src={code} alt="code" id="second-row-image"></img></div>
                    <div class = "about-card-left" id="fifth-card"><img src={coder} alt="coder" id="third-row-image"></img></div> 
                    <div class = "about-card-right" id="sixth-card">
                        <h1>Who can use CommuniPute?</h1>
                        <p>In short, everyone! Users with weaker processors might donate their computation while
                            they sleep to supercharge (💪) the scripts they run during the day. Conversely, users
                            with powerful computers can lend out their hardware to accumulate Compute Credits that
                            they can in turn use on their own work.
                        </p>    
                    </div>
                </div>);
    }
}

class Footer extends React.Component{
    render(){
        return (<p id="footer">CommuniPute created by Abhishek Marda, Balaji Balachandran, 
        Mohammad Navqi, and Saad Jeelani at TreeHacks 2023. Made with  
        <a href="https://www.convex.dev/"> Convex</a>. </p>)
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div class = "home"><Banner /><About /><Footer /></div>);
