import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Beers from './Beers';


function App(){

  return (
    <div>
      <style jsx>{`
        font-family: Helvetica;

      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />

      </Switch>

    </div>
  );
}

//App.propTypes = {
//};

export default App;
