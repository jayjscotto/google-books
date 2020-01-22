import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Pages/Home';
import Saved from './Components/Pages/Saved';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        
      </div>
    
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/saved' component={Saved}/>
      </Switch>
    </Router>
  );
}

export default App;

