import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './navigation/';
import { Front, About } from './components/'

import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Route exact path={'/home'} render={() => <Front />} />
        <Route exact path={'/about'} render={() => <About />} />
         {/* test */}
         {/* <br />
         <br />
         <br />
         <br /> */}
        {/* <Front /> */}
      </div>
      </Router>
    );
  }
}

export default App;
