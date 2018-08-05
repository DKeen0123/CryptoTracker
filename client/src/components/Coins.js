import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/action_bitcoin';
import { fetchEthereum } from '../actions/action_ethereum';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';

const getCryptosQuery = gql`
  {
    cryptoCurrencies{
      name
      amount
      id
    }
  }
`

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

  renderCryptos = () => {
    var data = this.props.data;
    if (data.loading) {
      return( <div>Loading cryptos...</div>)
    } else {
      return (
      data.cryptoCurrencies.map(crypto => <h3 id={crypto.name} key={crypto.id}>{crypto.name}: {crypto.amount}</h3>)
      )
    }
  }

  render() {
    return (
      <div>
        <h3 className="bitcoin-balance">Bitcoin: {this.calculateBitcoin()}</h3>
        <h3 className="ethereum-balance">
          Ethereum: {this.calculateEthereum()}
        </h3>
        {this.renderCryptos()}
      </div>
    );
  }
}

const gqlWrapper = graphql(getCryptosQuery)
const reduxWrapper = connect(state => state, { fetchBitcoin, fetchEthereum })
export default compose(reduxWrapper, gqlWrapper)(Coins);
