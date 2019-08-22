import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <Router>
      <Route path="/home" component={Home} />
    </Router>
  );
}
  
