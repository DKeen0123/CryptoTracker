import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  constructor() {
    super();

    this.state = { balance: undefined };
  }

  updateBalance = event =>
    this.setState({ balance: parseInt(event.target.value, 10) });

  render() {
    return (
      <div>
        <h3 className="balance">Balance: {this.props.balance}</h3>
        <input className="input-balance" onChange={this.updateBalance} />
      </div>
    );
  }
}

export default connect(state => {
  return { balance: state.balance };
}, null)(Wallet);
