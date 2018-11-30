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

class App extends React.Component{
  constructor(props) {
    super(props);
    this.setState = {
      masterKegList: []
    };
    this.handleAddNewBeer = this.handleAddNewBeer.bind(this);
  }
  
  handleAddNewBeer(newBeer){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newBeer);
    this.setState({masterKegList: newMasterKegList});
  }
    
  render(){
    
    return (
      <div>
        <style jsx>{`
        font-family: Helvetica;

      `}</style>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beers' component={Beers}/>
          <Route path='/add' render= {() => <AddBeer onNewBeerCreation={this.handleAddNewBeer}/>} />
          <Route component={Error404} />
        </Switch>
  
      </div>  
    );
  }
}




export default App;
