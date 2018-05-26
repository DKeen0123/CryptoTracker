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
    this.state = { balance: undefined, chosenCrypto: undefined };
  }

  componentDidMount() {
    this.props.fetchCryptoNames();
  }

  handleUpdateBalance = event =>
    this.setState({ balance: parseInt(event.target.value, 10) });

  deposit = () => this.props.deposit(this.state.balance);
  withdraw = () => this.props.withdraw(this.state.balance);

  transaction = transactionType =>
    transactionType === 'Deposit'? this.deposit() : this.withdraw();

  selectCrypto = event =>
    this.setState({ chosenCrypto: event.target.id })


  render() {
    return (
      <div>
        <Balance userBalance={this.props.balance} />
        <ChangeBalance changeBalance={this.handleUpdateBalance} />
        <Button
          label="Deposit"
          className="btn-deposit"
          transaction={this.transaction}
        />
        <Button
          label="Withdraw"
          className="btn-withdraw"
          transaction={this.transaction}
        />
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
