import React, { Component } from 'react';

class CryptoPicker extends Component {
  constructor(props) {
    super()
  }
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
        <select
          onChange={this.props.selectCrypto}
          className="drop-down"
          value={this.props.chosenCrypto}
        >
          {this.populateCryptos()}
        </select>

      </div>
    );
  }
}

export default CryptoPicker;