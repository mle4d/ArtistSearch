import React from 'react';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';
import SearchContainer from './search/searchContainer';
import ArtistResults from './containers/ArtistResults';





export default function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchContainer} />
      <Route exact path="/artist/:artist/:id" component={ArtistResults} />
    </Router>
  );
}

