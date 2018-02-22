import React, { Component } from 'react';
import './App.css';
import { skillData, timelineData } from './Components/About/Data';
import About from './Components/About/About';

class App extends Component {
    // componentDidMount() {
    //     setInterval(function(){
    //         console.log(document.body.scrollHeight);
    //     }, 1000)
    // }
    render() {
        return (
            <div className="App">
                <About></About>
            </div>
        );
    }
}

export default App;
