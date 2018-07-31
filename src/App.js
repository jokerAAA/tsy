import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'; 
import './App.css';
import Index from './page/index/index';
import Gamelist from './page/game/list';
import Goodslist from './page/goods/list';
import Goodsdetail from './page/goods/detail';

class App extends Component {
  render() {
    return (<Switch>
      <Route exact path='/' component={Index}></Route>
      <Route exact path='/game/list' component={Gamelist}></Route>
      <Route exact path='/goods/list' component={Goodslist}></Route>
      <Route exact path='/goods/detail' component={Goodsdetail}></Route>
    </Switch>)
  }
}

export default App;
