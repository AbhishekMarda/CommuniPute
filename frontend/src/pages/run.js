import React from 'react';
import { useState } from 'react';
import logo from './img/logo.png'
import "@fontsource/source-code-pro";

class Option extends React.Component{
    render(){
        return(<button className = "option-box" onClick={()=>{console.log("hello")}}>{this.props.value}</button>);
    }
}


export default function Run(){
    const [username, getScript] = useState('');

    function updateSelection1(){
        var versions = document.getElementsByClassName("ide-button-version");
        versions[0].setAttribute('data-ver',"selected");
        versions[1].setAttribute('data-ver',"unselected");
        versions[2].setAttribute('data-ver',"unselected");
    }

    function updateSelection2(){
        var versions = document.getElementsByClassName("ide-button-version");
        versions[0].setAttribute('data-ver',"unselected");
        versions[1].setAttribute('data-ver',"selected");
        versions[2].setAttribute('data-ver',"unselected");
    }

    function updateSelection3(){
        var versions = document.getElementsByClassName("ide-button-version");
        versions[0].setAttribute('data-ver',"unselected");
        versions[1].setAttribute('data-ver',"unselected");
        versions[2].setAttribute('data-ver',"selected");
    }

    const submitRequest = (event) => {
        event.preventDefault();
    
    }
    

    return (<div>
                <div className = "banner">
                    <img src={logo} alt="logo" id="login-logo-1"></img>
                    <img src={logo} alt="logo" id="login-logo-2"></img>
                </div>
                {/* <form> */}
                    <div id="ide-container">
                        <h1 id="ide-title">CommuniPute IDE</h1>
                        <div id="ide-version">
                            <button className='ide-button-version' data-num = "0" data-ver="selected" onClick={updateSelection1}>Python 3.11.2</button>
                            <button className='ide-button-version' data-num = "1" data-ver="unselected" onClick={updateSelection2}>Python 3.10.1</button>
                            <button className='ide-button-version' data-num = "2" data-ver="unselected" onClick={updateSelection3}>Python 3.9.2</button>
                        </div>
                        <div id="ide-input">
                            <textarea id="editor-area"></textarea>
                        </div>
                        <p id="ide-output">Hello This is some output</p>
                        <div id="ide-run-button"><input type="submit" name="Run" id="run-button" value="Run"></input></div>
                    </div>
                {/* </form> */}
           </div>);
};


