import React, { Component } from 'react';
import Search from './Search';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Search} />
        {/* <Route exact path="/" component={Artist} /> */}
      </Router>
    );
  }
} 
