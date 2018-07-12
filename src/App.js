import React, { Component } from 'react';
import './App.css';
import Index from './page/index/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index className="index"></Index>
      </div>
    );
  }
}

export default App;
