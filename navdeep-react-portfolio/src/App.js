import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ImageAvatar from './components/ImageAvatar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ImageAvatar />
      </div>
    );
  }
}

export default App;
