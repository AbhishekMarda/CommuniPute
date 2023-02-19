import React from 'react';
import { useState } from 'react';
import logo from './img/logo.png'
import "@fontsource/source-code-pro";
import { useMutation, useQuery } from '../convex/_generated/react';
import { Id } from '../convex/_generated/dataModel';

export default function Run(){
    const [code, setCode] = useState("");
    const queryParameters = new URLSearchParams(window.location.search);
    const response = useQuery('getJobOutput', new Id('users', queryParameters.get("client"))) || null;
    const createRequest = useMutation('requestSpecifiedAvailableCompute');
    var responseValue = null;
    var completed_flag = false;

    setInterval(pollResponse, 3000);

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
        
        const user_id = queryParameters.get("client");
        const host_id = queryParameters.get("host");
        console.log('Userid' + user_id);
        console.log('Hostid' + host_id);
        createRequest(new Id('users',  host_id), new Id('users', user_id), code, []);
        // document.getElementsById("ide-output").innerHTML = response;
    }

    function pollResponse() {
        console.log(response);
        if (response != null && response != [] && !completed_flag) {
            console.log("Hi");
            responseValue = response[0]['response'];
            document.getElementById("ide-output").innerHTML = responseValue;
            completed_flag = true;
        }
    }

    return (<div>
                <div className = "banner">
                    <img src={logo} alt="logo" id="login-logo-1"></img>
                    <img src={logo} alt="logo" id="login-logo-2"></img>
                </div>
                <form onSubmit={submitRequest}>
                    <div id="ide-container">
                        <h1 id="ide-title">CommuniPute IDE</h1>
                        <div id="ide-version">
                            <button className='ide-button-version' data-num = "0" data-ver="selected" onClick={updateSelection1}>Python 3.11.2</button>
                            <button className='ide-button-version' data-num = "1" data-ver="unselected" onClick={updateSelection2}>Python 3.10.1</button>
                            <button className='ide-button-version' data-num = "2" data-ver="unselected" onClick={updateSelection3}>Python 3.9.2</button>
                        </div>
                        <div id="ide-input">
                            <textarea value={code} id="editor-area" onChange={(event) => {
                            setCode(event.target.value)}}></textarea>
                        </div>
                        <p id="ide-output">Awaiting output...</p>
                        <div id="ide-run-button"><input type="submit" name="Run" id="run-button" value="Run"></input></div>
                    </div>
                </form>
           </div>);
};


