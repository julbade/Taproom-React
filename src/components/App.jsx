/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Beers from './Beers';
import Error404 from './Error404';
import AddBeer from './AddBeer';



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
        <Route path='/add' component={AddBeer} />
        <Route component={Error404} />
      </Switch>
  
    </div>
  );
}



export default App;
