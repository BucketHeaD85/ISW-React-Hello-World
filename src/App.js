import React from 'react';
import history from './helpers/history'
import './App.css';
import { Router, Switch, Route } from "react-router-dom";

import Home from './views/Home/Home';
import Who from './views/WhoWeAre/Who';
import NavBar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';
import Counter from './views/Counter/Counter';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router 
      history={history}
    >
      <NavBar/>
      <div className='container'>
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
          <Route
            path='/counter'
            component={Counter}
          />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
