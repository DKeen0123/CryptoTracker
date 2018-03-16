import React, { Component } from 'react';

export default class CryptoPicker extends Component {
  populateCryptos() {
    const { cryptos } = this.props;
    if (cryptos === null || cryptos === undefined) return '';
    if (Object.keys(cryptos).length === 0) return '';
    return cryptos.map(crypto => {
      return (
        <option id={crypto.id} key={crypto.id}>
          {crypto.name}
        </option>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Choose your crypto: </h3>
        <select className="drop-down">{this.populateCryptos()}</select>
      </div>
    );
  }
}
