import React, { Component } from 'react';
import './App.css';
import { Routes } from './routes';
import NavBar from './navbar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
