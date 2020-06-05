import React from 'react';
import history from './helpers/history'
import './App.css';
import { Router, Switch, Route } from "react-router-dom";

import Home from './views/Home/Home';
import Who from './views/WhoWeAre/Who';
import NavBar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router 
      history={history}>
      <NavBar/>
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          path='/HOLA'
          component={() => {return(<h1>HOLA</h1>);}}
        />
        <Route
          path='/who_we_are'
          component={Who}
        />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
