import React from 'react';
import Wallet from './Wallet';
import Coins from './Coins';
import CryptoPicker from './CryptoPicker';

const App = () => {
  return (
    <div>
      <h2>CryptoTracker</h2>
      <hr />
      <Wallet />
      <CryptoPicker />
      <Coins />
    </div>
  );
};

export default App;
