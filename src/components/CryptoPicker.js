import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCryptoNames } from '../actions/action_crypto';

export class CryptoPicker extends Component {
  componentDidMount() {
    this.props.fetchCryptoNames();
  }

  render() {
    return (
      <div>
        <h3>Choose your crypto: </h3>
      </div>
    );
  }
}

export default connect(
  state => {
    return { crypto: state.crypto };
  },
  { fetchCryptoNames }
)(CryptoPicker);
