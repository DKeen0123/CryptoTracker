import React, { Component } from 'react';
import Header from '../components/Header';
import Wallet from '../components/Wallet';
import Coins from '../components/Coins';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wallet />
        <Coins />
      </div>
    );
  }
}

export default Wrapper;
