import React from 'react';

class Option extends React.Component{
    render(){
        return(<button className = "option-box" onClick={()=>{console.log("hello")}}>{this.props.value}</button>);
    }
}


const Select = () =>{
    return (<div>
                <Option value={1}/>
                <Option value={2}/>
                <Option value={3}/>
            </div>);
};

export default Select
