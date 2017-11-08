import React, { Component } from 'react';
import Investments from './Investments'
import TotalBalance from './TotalBalance'
import './../css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TotalBalance />
        <Investments />
      </div>
    );
  }
}

export default App;
