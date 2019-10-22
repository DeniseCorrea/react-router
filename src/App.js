import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import History from './History';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/our-history" component={History}/>
      </Switch>
    </>
  );
}

export default App;




