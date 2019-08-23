import React from 'react';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';
import Search from './Search';




export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Search} />
    </Router>
  );
}

