/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Beers from './Beers';
import About from './About';
import Kegs from './Kegs';


function App(){

  return (
    <div>
      <style jsx>{`
        font-family: Helvetica;

      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/beers' component={Beers} />
        <Route path='/about' component={About} />
      </Switch>
      <Kegs/>
      <Kegs/>


    </div>
  );
}



export default App;
