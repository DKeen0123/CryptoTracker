import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoPicker from './CryptoPicker';
import Balance from './Balance';
import Button from './Button';
import ChangeBalance from './ChangeBalance';
import { fetchCryptoNames } from '../actions/action_crypto';

export class Wallet extends Component {
  constructor() {
    super();
    this.state = { balance: undefined, chosenCrypto: 'Bitcoin' };
  }

  componentDidMount() {
    this.props.fetchCryptoNames();
  }

  handleUpdateBalance = event =>
    this.setState({ balance: parseInt(event.target.value, 10) });

  transaction = transactionType =>
    transactionType === 'Deposit'? this.deposit() : this.withdraw();

  selectCrypto = event => {
    this.setState({
      chosenCrypto: event.target.value
    });
  }

  // addCrypto = () => this.props.selectedCrypto(this.state.chosenCrypto);


  render() {
    return (
      <div>
        <Balance userBalance={this.props.balance} />
        <ChangeBalance changeBalance={this.handleUpdateBalance} />
        <Button
          label="Deposit"
          className="btn-deposit"
          // transaction={this.transaction}
        />
        <Button
          label="Withdraw"
          className="btn-withdraw"
          // transaction={this.transaction}
        />
        <CryptoPicker
          cryptos={this.props.cryptos}
          selectCrypto={this.selectCrypto}
          chosenCrypto={this.state.chosenCrypto}
          addCrypto={this.addCrypto}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state.balance, cryptos: state.crypto };
  },
  { fetchCryptoNames }
)(Wallet);
