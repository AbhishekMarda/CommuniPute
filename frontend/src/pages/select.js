import React from 'react';
import './dashboard.css';
import macos from './img/mac.png';
import linux from './img/linux.png';
import windows from './img/windows.png';
import { useMutation, useQuery } from '../convex/_generated/react';

class Instance extends React.Component {
    constructor(props) {
        super(props);
        this.handlePressMe = this.handlePressMe.bind(this);
    }
    

    handlePressMe(event) {
        event.preventDefault();
        window.location.href = '/run?client=TJHLsZgs7MF5Lwk-h8VLzw&host=' + this.props.id;
    }

  render() {
    return (
      <div className="instance">
        <div className="title">{this.props.name}</div>
        <div className="image-wrapper">
          <img src={this.props.image} alt="instance" className="instance-image" />
        </div>
        <div className="data-fields">
        <div>{this.props.ram}</div>
          <div>{this.props.memory}</div>
          <div>{this.props.version}</div>
          <div>{this.props.architecture}</div>
        </div>
        <button onClick={this.handlePressMe}>Select</button>
      </div>
    );
  }
}

class Navbar extends React.Component{
  render(){
      return (
          <div class="navbar">
          <a class="login" href="login">
              Login
          </a>
          <a class="register" href="register">
              Register
          </a>
      </div>);
  }
}

function Dashboard(props){
    const available_compute_resources = useQuery('listAvailableCompute')||[];

    return (
      <div className="App">
        <Navbar />
        <div className="container">
            {available_compute_resources.map(availableResource=> (<Instance id={availableResource._id.toString()} name={availableResource.operating_system} image={macos} ram = {availableResource.ram_available} memory = {"50 GB"} version = {availableResource.os_version_info} architecture = {availableResource.cpu_arch_type} dataURI="https://example.com/data1"/>))};
        </div>
      </div>
    );
}

export default Dashboard;