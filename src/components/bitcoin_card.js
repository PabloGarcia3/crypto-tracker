import React, { Component } from 'react';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class BitcoinCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

componentDidMount() {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
    });
  }

  render() {
    return (
      <div>
      {Object.keys(this.state.cryptos).map((key) => (
        <div id="crypto-container" className='ba bw1 fl w-20 pa2 shadow-5'>
        <div>
          <img
            src={require('../color_icons/btc.png')}
          />
        </div>
          <span className="left">{key}</span>
          <span className="right">
            <NumberFormat
              value={this.state.cryptos[key].USD}
              displayType={'text'}
              decimalPrecision={2}
              thousandSeparator={true}
              prefix={'$'} />
            </span>
        </div>
      ))}
      </div>
    );
  }
}

export default BitcoinCard;
