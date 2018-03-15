import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/action_bitcoin';
import { fetchEthereum } from '../actions/action_ethereum';

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

  calculateEthereum() {
    const { ethereum } = this.props;
    if (ethereum === null || ethereum === undefined) return '';
    if (Object.keys(ethereum).length === 0) return '';
    return this.props.balance / parseInt(ethereum[0].price_usd, 10);
  }

  render() {
    return (
      <div>
        <h3 className="bitcoin-balance">Bitcoin: {this.calculateBitcoin()}</h3>
        <h3 className="ethereum-balance">
          Ethereum: {this.calculateEthereum()}
        </h3>
      </div>
    );
  }
}

export default connect(state => state, { fetchBitcoin, fetchEthereum })(Coins);
