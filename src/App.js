import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'; 
import './App.css';
import Index from './page/index/index'

class App extends Component {
  render() {
    return (<Switch>
      <Route exact path='/' component={Index}></Route>
    </Switch>)
  }
}

export default App;
