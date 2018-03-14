import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin, fetchEthereum } from '../actions/action_bitcoin';

export class Coins extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
    this.props.fetchEthereum();
  }

  calculateBitcoin() {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length === 0) return '';

    return this.props.balance / parseInt(bitcoin[0].price_usd, 10);
  }

  render() {
    return (
      <div>
        <h3 className="bitcoin-balance">Bitcoin: {this.calculateBitcoin()}</h3>
      </div>
    );
  }
}

export default connect(state => state, { fetchBitcoin, fetchEthereum })(Coins);
