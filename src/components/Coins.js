import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/action_bitcoin';

export class Coins extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }
  render() {
    return (
      <div>
        <h3>Bitcoin: </h3>
      </div>
    );
  }
}

export default connect(state => state, { fetchBitcoin })(Coins);
