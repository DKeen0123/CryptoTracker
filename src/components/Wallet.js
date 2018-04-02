import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/action_balance';
import CryptoPicker from './CryptoPicker';
import Balance from './Balance';
import Button from './Button';
import ChangeBalance from './ChangeBalance';
import { fetchCryptoNames } from '../actions/action_crypto';

export class Wallet extends Component {
  constructor() {
    super();
    this.state = { balance: undefined };
  }

  componentDidMount() {
    this.props.fetchCryptoNames();
  }

  handleUpdateBalance = event =>
    this.setState({ balance: parseInt(event.target.value, 10) });

  deposit = () => this.props.deposit(this.state.balance);
  withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    return (
      <div>
        <Balance userBalance={this.props.balance} />
        <ChangeBalance changeBalance={this.handleUpdateBalance} />
        <Button
          label="Deposit"
          className="btn-deposit"
          deposit={this.deposit}
        />
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
