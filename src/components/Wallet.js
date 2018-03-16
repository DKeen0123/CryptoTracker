import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/action_balance';
import CryptoPicker from './CryptoPicker';
import { fetchCryptoNames } from '../actions/action_crypto';

export class Wallet extends Component {
  constructor() {
    super();
    this.state = { balance: undefined };
  }

  componentDidMount() {
    this.props.fetchCryptoNames();
  }

  updateBalance = event =>
    this.setState({ balance: parseInt(event.target.value, 10) });

  deposit = () => this.props.deposit(this.state.balance);
  withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    return (
      <div>
        <h3 className="balance">Balance: {this.props.balance}</h3>
        <input className="input-balance" onChange={this.updateBalance} />
        <button onClick={this.deposit} className="deposit-btn">
          Deposit
        </button>
        <button onClick={this.withdraw} className="withdrawal-btn">
          Withdraw
        </button>
        <CryptoPicker cryptos={this.props.cryptos} />
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state.balance, cryptos: state.crypto };
  },
  { fetchCryptoNames, deposit, withdraw }
)(Wallet);
