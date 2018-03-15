import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCryptoNames } from '../actions/action_crypto';

export class CryptoPicker extends Component {
  componentDidMount() {
    this.props.fetchCryptoNames();
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
        <select className="drop-down">{this.populateCryptos()}</select>
      </div>
    );
  }
}

export default connect(
  state => {
    return { cryptos: state.crypto };
  },
  { fetchCryptoNames }
)(CryptoPicker);
