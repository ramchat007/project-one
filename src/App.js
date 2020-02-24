import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AddNewMeeting from './components/home/AddNewMeeting';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Sidebar from './components/nav-menu/Sidebar';
import About from './components/about/About';

function App() {
  return (     
        <Router>
            <Sidebar/>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/new-meeting" component={AddNewMeeting}></Route>
            </Switch>
        </Router>
  );
}

export default App;
