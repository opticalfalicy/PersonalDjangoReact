import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ScrollableAnchor} from 'react-scrollable-anchor';

import Nav from './navigation/';
import { Front, About } from './components/'
import scrollToComponent from 'react-scroll-to-component';

import './App.css';



class App extends Component {

  componentDidMount(){
    scrollToComponent(this.Front, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <Router>
      <div className="App">
        {/* <Nav /> */}
        <div className='tempNav'>
          <button onClick={() => scrollToComponent(this.Front, { offset: 0, align: 'top', duration: 1500})} className='navButton'>Start</button>
          <button onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})} className='navButton' >About</button>
        </div>
        <div className='main'>
        <Route href="#start" ref={(section) => { this.Front = section; }} render={() => <Front />} />
        <Route href="#about" ref={(section) => { this.About = section; }} render={() => <About />} />
         {/* test */}
         {/* <br />
         <br />
         <br />
         <br /> */}
        {/* <Front /> */}
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
