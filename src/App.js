import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import LabelBottomNavigation from './components/BottomNavigation';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "#fbf8e7"}} >
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <LabelBottomNavigation />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
