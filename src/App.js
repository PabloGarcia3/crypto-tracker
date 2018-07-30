import React, { Component } from 'react';
import Header from './components/Header/Header';
import BitcoinCard from './components/bitcoin_card';
import EthereumCard from './components/ethereum_card';
import RippleCard from './components/ripple_card';
import './App.css';
import tachyons from 'tachyons';
var NumberFormat = require('react-number-format');



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <BitcoinCard />
        <EthereumCard />
        <RippleCard />
      </div>
    );
  }
}

export default App;
