import React from 'react';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';
import SearchContainer from './search/searchContainer';
import ArtistResults from './containers/ArtistResults';
import Artists from './Artists';




export default function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchContainer} />
      <Route exact path="/search/:searchTerm" component={ArtistResults} /> 
      <Route exact path="/artist" component={Artists} />
    </Router>
  );
}

